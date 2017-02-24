import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-findus',
  templateUrl: './findus.component.html',
  styleUrls: ['./findus.component.scss']
})
export class FindusComponent implements OnInit {

  constructor( private location: Location) { }

  ngOnInit() {
  }
  Back(): void {
    this.location.back();
  }
}
