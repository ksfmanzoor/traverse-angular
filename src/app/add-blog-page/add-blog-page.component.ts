import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {CustomUploadAdapter} from './custom-upload-adapter';
import {HttpClient} from '@angular/common/http';


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

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.blogForm = new FormGroup({
      title: new FormControl(null),
      subtitle: new FormControl(null),
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
    console.log(this.formControl.blogHtml.value);
    const url = 'http://traverse.ap-south-1.elasticbeanstalk.com/api/traverse/upload/file/';
    const formData: FormData = new FormData();
    console.log(this.formControl.thumbnail.value.file[0]);
    formData.append('file', this.formControl.thumbnail.value);
    this.httpClient.post(url, formData).subscribe(data => {
      console.log(data);
    });
  }

}


