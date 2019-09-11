import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderingFlowsComponent } from './rendering-flows.component';

describe('RenderingFlowsComponent', () => {
  let component: RenderingFlowsComponent;
  let fixture: ComponentFixture<RenderingFlowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenderingFlowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderingFlowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
