import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallGifApiComponent } from './call-gif-api.component';

describe('CallGifApiComponent', () => {
  let component: CallGifApiComponent;
  let fixture: ComponentFixture<CallGifApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallGifApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallGifApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
