import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {faComment} from '@fortawesome/free-solid-svg-icons/faComment';
import {faPencilAlt} from '@fortawesome/free-solid-svg-icons/faPencilAlt';
import {faTrash} from '@fortawesome/free-solid-svg-icons/faTrash';
import {Comment} from 'src/app/models/comment';
import {CommentService} from 'src/app/services/comment.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class BlogPageComponent implements OnInit {
  headerInfo: { title, subtitle: string, imageUrl: string };
  blogText = '';
  comments: Comment[];
  addCommentContent = '';
  editCommentContent = '';
  replyIcon = faComment;
  editIcon = faPencilAlt;
  deleteIcon = faTrash;
  editCommentId = '';

  constructor(private route: ActivatedRoute, private commentService: CommentService) {
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      const result = data.blog;
      const blogData = result[0];
      this.headerInfo = {title: blogData.title, subtitle: blogData.subtitle, imageUrl: blogData.thumbnail};
      this.blogText = blogData.content;
      this.comments = result[1];
    });
    console.log(this.comments);
  }

  addComment() {
    this.commentService.createComment(this.addCommentContent, this.route.snapshot.params.id).subscribe();
  }

  updateComment(id) {
    this.commentService.editComment(id, this.editCommentContent).subscribe();
  }

  removeComment(id) {
    this.commentService.deleteComment(id).subscribe();
  }

  updateEditMode(previousComment, commentId) {
    this.editCommentId === '' ? this.editCommentContent = previousComment : this.editCommentContent = '';
    this.editCommentId === '' ? this.editCommentId = commentId : this.editCommentId = '';
  }
}
