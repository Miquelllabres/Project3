/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FindusComponent } from './findus.component';

describe('FindusComponent', () => {
  let component: FindusComponent;
  let fixture: ComponentFixture<FindusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
