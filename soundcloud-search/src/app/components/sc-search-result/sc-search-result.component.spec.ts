import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScSearchResultComponent } from './sc-search-result.component';

describe('ScSearchResultComponent', () => {
  let component: ScSearchResultComponent;
  let fixture: ComponentFixture<ScSearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScSearchResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
