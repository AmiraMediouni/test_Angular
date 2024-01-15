import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../post.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent {
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
  public updt=false
  public posts:any=[]
  post:any={
   titre:'',
   description:'',
   categorie:'',
   date:''
 
 }
 constructor(private postService:PostService,private router:Router,private fb:FormBuilder){}
 ngOnInit(): void {
   this.postForm=this.fb.group({
     titre : ['', [Validators.required, Validators.minLength(3)]],
     description: ['', [Validators.required]],
     categorie:['', [Validators.required]],
     date:['', [Validators.required]],
   })
      
  this.postService.getPosts()
    .subscribe(data => this.posts=data)


    }
  editPost(post:any){
    this.updt=true
    this.post=post

  }
  cancel(){
  this.updt=false
  }
  updatePost(){
    this.postService.updatePost(this.post)
    .subscribe(data=>{
    })
    this.updt=false
  }

}
