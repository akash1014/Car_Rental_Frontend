import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {
  Imagepath: string;
  constructor() {
    this.Imagepath='./assets/images/tree.jpeg'
   }

  ngOnInit(): void {
  }

}
