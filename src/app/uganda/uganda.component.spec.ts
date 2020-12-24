import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UgandaComponent } from './uganda.component';

describe('UgandaComponent', () => {
  let component: UgandaComponent;
  let fixture: ComponentFixture<UgandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UgandaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UgandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
