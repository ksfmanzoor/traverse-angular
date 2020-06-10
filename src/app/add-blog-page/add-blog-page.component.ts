import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';


@Component({
  selector: 'app-add-blog-page',
  templateUrl: './add-blog-page.component.html',
  styleUrls: ['./add-blog-page.component.css']
})
export class AddBlogPageComponent  implements OnInit {
  blogEditor = ClassicEditor;
  blogForm: FormGroup;
  editorConfig = {
    placeholder: 'Start writing blog!',
    mediaEmbed: {
      previewsInData: true,
    }
  };

  constructor() {
  }

  ngOnInit(): void {
    this.blogForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      subtitle: new FormControl(null, [Validators.required, Validators.email]),
      blogHtml: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  get formControl() {
    return this.blogForm.controls;
  }

  onSubmit() {
    console.log(this.formControl.blogHtml.value);
  }


}
