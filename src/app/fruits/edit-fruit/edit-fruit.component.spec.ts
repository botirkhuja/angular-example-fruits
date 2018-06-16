import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFruitComponent } from './edit-fruit.component';

describe('EditFruitComponent', () => {
  let component: EditFruitComponent;
  let fixture: ComponentFixture<EditFruitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFruitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFruitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
