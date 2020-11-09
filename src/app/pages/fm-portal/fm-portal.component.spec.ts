import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FmPortalComponent } from './fm-portal.component';

describe('FmPortalComponent', () => {
  let component: FmPortalComponent;
  let fixture: ComponentFixture<FmPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FmPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
