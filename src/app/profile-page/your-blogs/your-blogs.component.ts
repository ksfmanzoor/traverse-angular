import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {faEye} from '@fortawesome/free-solid-svg-icons/faEye';
import {faPencilAlt} from '@fortawesome/free-solid-svg-icons/faPencilAlt';
import {faTimes} from '@fortawesome/free-solid-svg-icons/faTimes';
import {Subscription} from 'rxjs';
import {Blog} from 'src/app/models/blog';
import {User} from 'src/app/models/user';

@Component({
  selector: 'app-your-blogs',
  templateUrl: './your-blogs.component.html',
  styleUrls: ['./your-blogs.component.css']
})
export class YourBlogsComponent implements OnInit {
  previewIcon = faEye;
  editIcon = faPencilAlt;
  deleteIcon = faTimes;
  blogsArray: Blog[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      this.blogsArray = data.yourBlogs;
    });
  }

  previewBlog(id) {
    this.router.navigate(['/blog', id]).then();

  }

  editBlog(blog) {
    console.log(blog);
    this.router.navigate(['/add-blog'], {state: blog}).then();
  }

  deleteBlog() {}

}
