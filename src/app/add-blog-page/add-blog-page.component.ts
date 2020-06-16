import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {CustomUploadAdapter} from './custom-upload-adapter';
import {HttpClient} from '@angular/common/http';
import {AddBlogService} from '../services/add-blog.service';


@Component({
  selector: 'app-add-blog-page',
  templateUrl: './add-blog-page.component.html',
  styleUrls: ['./add-blog-page.component.css']
})
export class AddBlogPageComponent implements OnInit {
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

  constructor(private httpClient: HttpClient, private addBlogService: AddBlogService) {
  }

  ngOnInit(): void {
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
    const formData = new FormData();
    formData.append('thumbnail', this.formControl.thumbnail.value);
    console.log(this.formControl.thumbnail.value);
    console.log(formData.get('thumbnail'));
    this.addBlogService.addBlog({
      title: this.formControl.title.value,
      content: this.formControl.blogHtml.value,
      // tags: this.tagValues,
      thumbnail: formData,
      subtitle: this.formControl.subtitle.value
    }).subscribe(data => {
      console.log(data);
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

}


