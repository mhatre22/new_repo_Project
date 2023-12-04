import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddhoteldetailsComponent } from './addhoteldetails.component';

describe('AddhoteldetailsComponent', () => {
  let component: AddhoteldetailsComponent;
  let fixture: ComponentFixture<AddhoteldetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddhoteldetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddhoteldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
