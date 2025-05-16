import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistratieComponent } from './registratie.component';

describe('RegistratieComponent', () => {
  let component: RegistratieComponent;
  let fixture: ComponentFixture<RegistratieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistratieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistratieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
