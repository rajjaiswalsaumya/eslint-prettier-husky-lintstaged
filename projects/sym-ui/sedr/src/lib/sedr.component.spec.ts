import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SedrComponent } from './sedr.component';

describe('SedrComponent', () => {
  let component: SedrComponent;
  let fixture: ComponentFixture<SedrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SedrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SedrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
