import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { NotifierService } from '../notifier.service';

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
constructor(private postService:PostService,private router:Router, private notifier:NotifierService){}
ngOnInit(): void {

  this.postForm=new FormGroup({
    titre:new FormControl('', [Validators.required, Validators.minLength(3)]),
    description:new FormControl('', [Validators.required]),
    categorie:new FormControl('', [Validators.required]),
    date:new FormControl('', [Validators.required])
  })
  this.postService.getPosts()
    .subscribe(data => this.posts=data)
    
  }
  addPost(){
    this.newPost.id=(this.posts.length)+1

          this.postService.addPost(this.newPost)
          .subscribe((post)=>{
            this.posts=[post, ...this.posts]
          })     
          this.notifier.showSuccess('Publication ajoutée avec succès')
          this.router.navigate(['/list'])

  }

}
