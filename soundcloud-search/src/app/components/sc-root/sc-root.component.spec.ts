import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScRootComponent } from './sc-root.component';

describe('ScRootComponent', () => {
  let component: ScRootComponent;
  let fixture: ComponentFixture<ScRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
