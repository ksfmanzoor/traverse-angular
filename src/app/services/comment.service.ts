import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private commentUrl = `${environment.baseUrl}traverse/blog/comment/`;
  constructor(private httpClient: HttpClient) { }

  createComment(comment, blogId) {
    return this.httpClient.post(this.commentUrl, {body: comment, blog_post: blogId});
  }

  editComment(commentId, newComment) {
    return this.httpClient.patch(this.commentUrl + commentId + '/', {body: newComment});
  }

  deleteComment(commentId) {
    return this.httpClient.delete(this.commentUrl + commentId + '/');
  }
}
