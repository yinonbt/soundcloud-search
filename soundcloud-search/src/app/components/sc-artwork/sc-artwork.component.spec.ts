import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScArtworkComponent } from './sc-artwork.component';

describe('ScArtworkComponent', () => {
  let component: ScArtworkComponent;
  let fixture: ComponentFixture<ScArtworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScArtworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScArtworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
