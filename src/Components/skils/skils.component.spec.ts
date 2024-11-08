import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SKilsComponent } from './skils.component';

describe('SKilsComponent', () => {
  let component: SKilsComponent;
  let fixture: ComponentFixture<SKilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SKilsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SKilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
