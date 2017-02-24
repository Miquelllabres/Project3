
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
  //WANTED TO ADD A NEW FEATURE DISPLAYING LATEST ENTRIES ON BLOG
  //WITHOUT IMAGES


  //   getJournals(): void {
  //   console.log('getting journals');
  //   let myPromiseOfJournals:Promise<Journal[]> = this.journalService.getJournals();

  //   myPromiseOfJournals.then(
  //       journals => {

  //       this.journalEntries = <Journal[]>journals;
  //           // console.log("***** in journal.component.ts callback *****");
  //           // console.log(this.journalEntries);
  //           console.log(journals)
  //       /*
  //       console.log(this.journalEntries);
  //       console.log("***** in journal.component.ts callback *****");
  //       */
  //       });
  // }
  // onSelect(journal: Journal): void {
  //     this.selectedJournal = journal;
  //     console.log(this.selectedJournal);
      
  //   }

  // gotoDetail(journal: Journal): void {
  //   this.selectedJournal = journal;
  //   // this.router.navigate(['/read', this.selectedJournal.ID]);
  // }

  SubmitJournal() {
  	this.params = '[' + JSON.stringify(this.entry)+']';
  	let parameters = JSON.stringify($("#apiForm").serializeArray());
  	console.log(parameters);
  	this.journalService.postEntry(parameters);
  }

Back(): void {
    this.location.back();
  }
}
