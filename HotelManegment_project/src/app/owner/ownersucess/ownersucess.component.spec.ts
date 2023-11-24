import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnersucessComponent } from './ownersucess.component';

describe('OwnersucessComponent', () => {
  let component: OwnersucessComponent;
  let fixture: ComponentFixture<OwnersucessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnersucessComponent]
    });
    fixture = TestBed.createComponent(OwnersucessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
