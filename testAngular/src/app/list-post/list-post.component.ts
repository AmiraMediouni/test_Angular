import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent {
  public posts:any=[]
 
constructor(private postService:PostService,private router:Router){}
ngOnInit(): void {
  this.postService.getPosts()
    .subscribe(data => this.posts=data)


    }
   

}
