import {Component, OnInit} from '@angular/core';
import {faPencilAlt} from '@fortawesome/free-solid-svg-icons/faPencilAlt';
import {faTimes} from '@fortawesome/free-solid-svg-icons/faTimes';
import {faEye} from '@fortawesome/free-solid-svg-icons/faEye';

@Component({
  selector: 'app-your-blogs',
  templateUrl: './your-blogs.component.html',
  styleUrls: ['./your-blogs.component.css']
})
export class YourBlogsComponent implements OnInit {
  previewIcon = faEye;
  editIcon = faPencilAlt;
  deleteIcon = faTimes;
  constructor() { }

  ngOnInit(): void {
  }

}
