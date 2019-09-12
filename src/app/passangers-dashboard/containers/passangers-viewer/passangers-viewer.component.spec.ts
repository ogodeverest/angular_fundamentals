import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassangersViewerComponent } from './passangers-viewer.component';

describe('PassangersViewerComponent', () => {
  let component: PassangersViewerComponent;
  let fixture: ComponentFixture<PassangersViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassangersViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassangersViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
