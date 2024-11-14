import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwpButtonComponent } from './twp-button.component';

describe('TwpButtonComponent', () => {
  let component: TwpButtonComponent;
  let fixture: ComponentFixture<TwpButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwpButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwpButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
