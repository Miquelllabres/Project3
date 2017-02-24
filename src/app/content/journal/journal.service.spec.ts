/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JournalService } from './journal.service';

describe('JournalService', () => {
  let component: JournalService;
  let fixture: ComponentFixture<JournalService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
