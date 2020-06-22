import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {CustomUploadAdapter} from './custom-upload-adapter';
import {HttpClient} from '@angular/common/http';
import {AddBlogService} from '../services/add-blog.service';
import {Router} from '@angular/router';
import {NavBarService} from '../services/nav-bar.service';


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
  tagValues = [];

  constructor(private httpClient: HttpClient, private addBlogService: AddBlogService, private router: Router,
              private navBarService: NavBarService) {
  }

  ngOnInit(): void {
    this.navBarService.changeNavColor.next('#333333');
    this.blogForm = new FormGroup({
      title: new FormControl(null),
      subtitle: new FormControl(null),
      tags: new FormControl([]),
      thumbnail: new FormControl(null),
      blogHtml: new FormControl(null)
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
    // if (this.formControl.tags.value.length) {
    //   this.formControl.tags.value.map(e => {
    //     this.tagValues.push(e.value);
    //   });
    // }
    const formData: FormData = new FormData();
    formData.append('title', this.formControl.title.value);
    formData.append('subtitle', this.formControl.subtitle.value);
    formData.append('thumbnail', this.formControl.thumbnail.value);
    formData.append('content', this.formControl.blogHtml.value);
    console.log(this.blogForm.value);
    this.addBlogService.addBlog(formData).subscribe(data => {
      this.router.navigate(['/']).then();
    });
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


