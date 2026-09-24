import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroPaso2 } from './registro-paso2';

describe('RegistroPaso2', () => {
  let component: RegistroPaso2;
  let fixture: ComponentFixture<RegistroPaso2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroPaso2],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroPaso2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
