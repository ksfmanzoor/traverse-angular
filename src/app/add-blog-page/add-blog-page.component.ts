import {HttpClient} from '@angular/common/http';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {Blog} from 'src/app/models/blog';
import {AddBlogService} from '../services/add-blog.service';
import {NavBarService} from '../services/nav-bar.service';
import {CustomUploadAdapter} from './custom-upload-adapter';


@Component({
  selector: 'app-add-blog-page',
  templateUrl: './add-blog-page.component.html',
  styleUrls: ['./add-blog-page.component.css']
})
export class AddBlogPageComponent implements OnInit, OnDestroy {
  blogEditor = ClassicEditor;
  blogForm: FormGroup;
  editorConfig = {
    placeholder: 'Start writing blog!',
    mediaEmbed: {
      previewsInData: true,
    },
  };
  errorMessage = {
    onlyAlphabetsCharacters: 'Only alphabets are allowed',
  };

  tagValidator = [this.onlyAlphabets];
  isUpdated: boolean;
  initialBlogData: Blog;

  constructor(private httpClient: HttpClient, private addBlogService: AddBlogService, private router: Router,
              private navBarService: NavBarService) {
  }

  ngOnInit(): void {
    this.navBarService.changeNavColor.next('#333333');
    if (Object.keys(history.state).length !== 0) {
      this.isUpdated = true;
      this.initialBlogData = history.state;
    }
    this.blogForm = new FormGroup({
      title: new FormControl(this.isUpdated ? this.initialBlogData.title : null),
      subtitle: new FormControl(this.isUpdated ? this.initialBlogData.subtitle : null),
      keywords: new FormControl(this.isUpdated ? this.initialBlogData.tags : null),
      thumbnail: new FormControl(this.isUpdated ? this.initialBlogData.thumbnail : null),
      blogHtml: new FormControl(this.isUpdated ? this.initialBlogData.content : null)
    });
  }

  onReady($event) {
    $event.plugins.get('FileRepository').createUploadAdapter = (loader) => {
      return new CustomUploadAdapter(loader, this.httpClient);
    };
  }

  get formControl() {
    return this.blogForm.controls;
  }

  onSubmit() {
    const formData: FormData = new FormData();
    formData.append('title', this.formControl.title.value);
    formData.append('subtitle', this.formControl.subtitle.value);
    formData.append('keywords', JSON.stringify(this.formControl.keywords.value));
    formData.append('thumbnail', this.formControl.thumbnail.value);
    formData.append('content', this.formControl.blogHtml.value);
    if (!this.isUpdated) {
      this.addBlogService.addBlog(formData).subscribe(data => {
        this.router.navigate(['/']).then();
      });
    } else {
      console.log('sd');
    }
  }

  onlyAlphabets(control: FormControl) {
    const regExp = RegExp('^[A-Za-z]+$');
    if (!regExp.test(control.value)) {
      return {
        onlyAlphabetsCharacters: true
      };
    }
    return null;
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.blogForm.patchValue({
        thumbnail: file
      });
    }
  }

  ngOnDestroy() {
    this.navBarService.changeNavColor.next('transparent');
  }

}


