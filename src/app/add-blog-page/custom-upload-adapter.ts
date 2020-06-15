import {HttpClient, HttpParams} from '@angular/common/http';
import {BlogEditorImage} from '../models/blog-editor-image';

export class CustomUploadAdapter {
  loader;
  private httpClient: HttpClient;

  constructor(loader, httpClient) {
    this.loader = loader;
    this.httpClient = httpClient;
  }

  uploadFile(file) {
    const url = 'http://traverse.ap-south-1.elasticbeanstalk.com/api/traverse/upload/file/';
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.httpClient.post(url, formData);
  }

  upload() {
    return new Promise((resolve, reject) => {
      this.loader.file.then(
        (data) => {
          this.uploadFile(data)
            .subscribe(
              (result: BlogEditorImage) => {
                resolve({default: result.file});
              },
              (error) => {
                console.log(error);
                reject(data.msg);
              }
            );
        }
      );
    });
  }

  abort() {
    console.log('abort');
  }
}


