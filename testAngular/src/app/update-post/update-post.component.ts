import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent {
  public updt=false
  public posts:any=[]
  post:any={
   titre:'',
   description:'',
   categorie:'',
   date:''
 
 }
 constructor(private postService:PostService,private router:Router){}
 ngOnInit(): void {
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
