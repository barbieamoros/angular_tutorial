//Component Logic
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-new-component', // used to provide a tag name for the component
  templateUrl: './my-new-component.component.html', //used to link an HTML template for rendering the view of the component
  styleUrls: ['./my-new-component.component.css'] //used to assign stylesheets files for styling the view of the component.
})
export class MyNewComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
