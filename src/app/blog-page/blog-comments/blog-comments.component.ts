import {Component, Input, OnInit} from '@angular/core';
import {faComment} from '@fortawesome/free-solid-svg-icons/faComment';
import {faPencilAlt} from '@fortawesome/free-solid-svg-icons/faPencilAlt';
import {faTrash} from '@fortawesome/free-solid-svg-icons/faTrash';
import {Subscription} from 'rxjs';
import {Comment} from 'src/app/models/comment';
import {User} from 'src/app/models/user';
import {AuthenticationService} from 'src/app/services/authentication.service';
import {CommentService} from 'src/app/services/comment.service';

@Component({
  selector: 'app-blog-comments',
  templateUrl: './blog-comments.component.html',
  styleUrls: ['./blog-comments.component.css']
})
export class BlogCommentsComponent implements OnInit {
  @Input() comments: Comment[];
  @Input() blogId: string;

  replyIcon = faComment;
  editIcon = faPencilAlt;
  deleteIcon = faTrash;

  addCommentContent = '';
  editCommentContent = '';
  replyCommentContent = '';
  editCommentId = '';
  replyCommentId = '';
  editReplyId = '';
  editReplyContent = '';

  user: User;

  constructor(private  commentService: CommentService, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.user = this.authenticationService.currentUserValue;
  }

  addComment() {
    this.commentService.createComment(this.addCommentContent, this.blogId).subscribe();
  }

  updateComment(commentId) {
    this.commentService.editComment(commentId, this.editCommentContent).subscribe();
  }

  removeComment(commentId) {
    this.commentService.deleteComment(commentId).subscribe();
  }

  updateCommentEditMode(previousComment, commentId) {
    this.editCommentId === '' ? this.editCommentContent = previousComment : this.editCommentContent = '';
    this.editCommentId === '' ? this.editCommentId = commentId : this.editCommentId = '';
  }

  enableReplyMode(commentId) {
    this.replyCommentId === '' ? this.replyCommentId = commentId : this.replyCommentId = '';
  }

  replyComment(commentId) {
    this.commentService.createReply(this.replyCommentContent, commentId).subscribe();
  }

  removeReply(replyId) {
    this.commentService.deleteReply(replyId).subscribe();
  }

  updateReplyEditMode(previousReply, replyId) {
    this.editReplyId === '' ? this.editReplyContent = previousReply : this.editReplyContent = '';
    this.editReplyId === '' ? this.editReplyId = replyId : this.editReplyId = '';
  }

  updateReply(replyId) {
    this.commentService.editReply(replyId, this.editReplyContent).subscribe();
  }

}
