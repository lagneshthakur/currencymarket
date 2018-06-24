import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutiquesComponent } from './boutiques.component';

describe('BoutiquesComponent', () => {
  let component: BoutiquesComponent;
  let fixture: ComponentFixture<BoutiquesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoutiquesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
