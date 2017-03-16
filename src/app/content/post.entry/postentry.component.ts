
import { Component, OnInit ,Input} from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';



import { JournalService } from '../journal/journal.service';
import { JournalComponent } from '../journal/journal.component';
import { Journal } from '../journal/journal';
import { JournalEntry } from './postentry';


@Component({
  moduleId: module.id,
  selector: 'app-post-entry',
  templateUrl: './postentry.component.html',
  styleUrls: ['./postentry.component.scss']
})
export class PostEntryComponent implements OnInit {

  public journals: JournalEntry[];
  journalEntries: Journal[] = [];
  selectedJournal:Journal;
  public entry: JournalEntry;
  public params: string;

  constructor(
    private journalService: JournalService,
    private location: Location,
    private router: Router) { }

  ngOnInit() {
    // this.getJournals();
    console.log(this.journalEntries);
  	this.entry = new JournalEntry();
    console.log(this.entry);
  }


  SubmitJournal() {
  	this.params = '[' + JSON.stringify(this.entry)+']';
  	let parameters = JSON.stringify($("#apiForm").serializeArray());
  	console.log(parameters);
  	let x:Promise<any> = this.journalService.postEntry(parameters);
    x.then( res => {
      console.log(res); 
    }
      ).catch( res02=> console.log(res02) );
  }


Back(): void {
    this.location.back();
  }
}

