/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IntentComponent } from './intent.component';

describe('IntentComponent', () => {
  let component: IntentComponent;
  let fixture: ComponentFixture<IntentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
