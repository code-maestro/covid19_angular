import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MohSopsComponent } from './moh-sops.component';

describe('MohSopsComponent', () => {
  let component: MohSopsComponent;
  let fixture: ComponentFixture<MohSopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MohSopsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MohSopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
