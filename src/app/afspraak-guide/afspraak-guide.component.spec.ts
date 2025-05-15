import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfspraakGuideComponent } from './afspraak-guide.component';

describe('AfspraakGuideComponent', () => {
  let component: AfspraakGuideComponent;
  let fixture: ComponentFixture<AfspraakGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AfspraakGuideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfspraakGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
