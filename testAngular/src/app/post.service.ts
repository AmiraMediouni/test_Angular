import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './post';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postsUrl : string =  'http://localhost:3000/posts' 
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })}

  constructor(private http: HttpClient) { }
  getPosts():Observable<Post[]>{
    return this.http.get<Post[]>(this.postsUrl)
                    
  }
  addPost (post: Post): Observable<Post[]> {
     return this.http.post<Post[]>(this.postsUrl, post, this.httpOptions);
    }

  updatePost(post: Post | number): Observable<Post[]>{
    const id = typeof post === 'number' ? post : post.id;
    const url=this.postsUrl+'/'+id
    return this.http.put<Post[]>(url,post)

  }
  deletePost(post: Post | number): Observable<Post[]>{
    const id = typeof post === 'number' ? post : post.id;
    const url=this.postsUrl+'/'+id
    return this.http.put<Post[]>(url,post)
  }
  
}
