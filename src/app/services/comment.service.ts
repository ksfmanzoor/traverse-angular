import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private commentUrl = `${environment.baseUrl}traverse/blog/comment/`;
  private replyUrl = `${environment.baseUrl}traverse/blog/reply/`;
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

  createReply(reply, commentId) {
    return this.httpClient.post(this.replyUrl, {body: reply, blog_comment: commentId});
  }

  editReply(replyId, newReply) {
    return this.httpClient.patch(this.replyUrl + replyId + '/', {body: newReply});
  }

  deleteReply(replyId) {
    return this.httpClient.delete(this.replyUrl + replyId + '/');
  }
}
