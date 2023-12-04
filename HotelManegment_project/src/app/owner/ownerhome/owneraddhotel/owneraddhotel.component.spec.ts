import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwneraddhotelComponent } from './owneraddhotel.component';

describe('OwneraddhotelComponent', () => {
  let component: OwneraddhotelComponent;
  let fixture: ComponentFixture<OwneraddhotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OwneraddhotelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OwneraddhotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
