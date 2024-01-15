import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
  postForm!: FormGroup
   get titre(){
    return this.postForm.get('titre')
  }
  get description(){
    return this.postForm.get('description')
  }
  get categorie(){
    return this.postForm.get('categorie')
  }
  get date(){
    return this.postForm.get('date')
  }

public posts:any=[]
newPost:any={
  titre:'',
  description:'',
  categorie:'',
  date:'',

}
constructor(private postService:PostService,private router:Router,private fb:FormBuilder){}
ngOnInit(): void {
  this.postForm=this.fb.group({
    titre : ['', [Validators.required, Validators.minLength(3)]],
    description: ['', [Validators.required]],
    categorie:['', [Validators.required]],
    date:['', [Validators.required]],
  })
      }
  addPost(){
    this.newPost.id=(this.posts.length)+1

          this.postService.addPost(this.newPost)
          .subscribe((post)=>{
            this.posts=[post, ...this.posts]
          })         
          this.router.navigate(['/list'])

  }

}
