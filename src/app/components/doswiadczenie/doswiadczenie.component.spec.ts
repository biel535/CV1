import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoswiadczenieComponent } from './doswiadczenie.component';

describe('DoswiadczenieComponent', () => {
  let component: DoswiadczenieComponent;
  let fixture: ComponentFixture<DoswiadczenieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoswiadczenieComponent]
    });
    fixture = TestBed.createComponent(DoswiadczenieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
