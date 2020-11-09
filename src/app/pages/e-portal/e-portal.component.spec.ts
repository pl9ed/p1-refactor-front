import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EPortalComponent } from './e-portal.component';

describe('EPortalComponent', () => {
  let component: EPortalComponent;
  let fixture: ComponentFixture<EPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    	declarations: [ EPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
