import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentifycurbComponent } from './identifycurb.component';

describe('IdentifycurbComponent', () => {
  let component: IdentifycurbComponent;
  let fixture: ComponentFixture<IdentifycurbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IdentifycurbComponent]
    });
    fixture = TestBed.createComponent(IdentifycurbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
