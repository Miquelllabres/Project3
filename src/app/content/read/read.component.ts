import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';



import { JournalService } from '../journal/journal.service';
import { Journal } from '../journal/journal';
import { JournalEntry } from '../post.entry/postentry';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {
journalPost: Journal;

  constructor(
		private journalService: JournalService,
		private route: ActivatedRoute,
		private location: Location
    
  	) {}

  ngOnInit(): void {
    this.route.params
        .switchMap((params: Params) => this.journalService.getPost(+params['ID']))
        .subscribe(journal => 
          {
            
            this.journalPost = journal;
            // console.log(this.journalPost);
            // console.log(journal);
          }
         );

}
  Back(): void {
    this.location.back();
  }
}
