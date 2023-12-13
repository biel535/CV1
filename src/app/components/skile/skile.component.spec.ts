import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkileComponent } from './skile.component';

describe('SkileComponent', () => {
  let component: SkileComponent;
  let fixture: ComponentFixture<SkileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkileComponent]
    });
    fixture = TestBed.createComponent(SkileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
