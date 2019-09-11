import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateRefsComponent } from './template-refs.component';

describe('TemplateRefsComponent', () => {
  let component: TemplateRefsComponent;
  let fixture: ComponentFixture<TemplateRefsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateRefsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateRefsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
