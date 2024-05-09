import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersDatilsComponent } from './characters-datils.component';

describe('CharactersDatilsComponent', () => {
  let component: CharactersDatilsComponent;
  let fixture: ComponentFixture<CharactersDatilsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharactersDatilsComponent]
    });
    fixture = TestBed.createComponent(CharactersDatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
