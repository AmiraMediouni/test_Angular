import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
  
public posts:any=[]
newPost:any={
  titre:'',
  description:'',
  categorie:'',
  date:'',

}
constructor(private postService:PostService,private router:Router){}
ngOnInit(): void {

  this.postService.getPosts()
    .subscribe(data => this.posts=data)
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
