import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScSearchComponent } from './sc-search.component';

describe('ScSearchComponent', () => {
  let component: ScSearchComponent;
  let fixture: ComponentFixture<ScSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
