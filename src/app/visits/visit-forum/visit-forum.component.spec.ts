import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitForumComponent } from './visit-forum.component';

describe('VisitForumComponent', () => {
  let component: VisitForumComponent;
  let fixture: ComponentFixture<VisitForumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitForumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
