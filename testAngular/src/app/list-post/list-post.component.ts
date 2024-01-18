import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../post.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit{
  public posts:any=[]
 
constructor(private postService:PostService,private router:Router){}
ngOnInit(): void {
            
  this.postService.getPosts()
    .subscribe(data => this.posts=data)
    }
     deletePost(postt:any){
      Swal.fire({
        title: "Voulez-vous continuer la suppression de la publication",
        showDenyButton: true,
        confirmButtonText: "Continuer",
        denyButtonText: `Annuler`
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Publication supprimée!");
          this.postService.deletePost(postt)
          .subscribe(()=>{
            this.posts=this.posts.filter
            ((post: { id: any; })=>post.id!=postt.id)

          })
          this.ngOnInit()
                    
        } else if (result.isDenied) {
          Swal.fire("Vous avez annulé la suppression");

        }
      });
      
  
    }
}

