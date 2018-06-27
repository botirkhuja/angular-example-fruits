import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnknownPageComponent } from './unknown-page.component';

describe('UnknownPageComponent', () => {
  let component: UnknownPageComponent;
  let fixture: ComponentFixture<UnknownPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnknownPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnknownPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
