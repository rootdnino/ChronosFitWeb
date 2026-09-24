import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VentanaMetabolica } from './ventana-metabolica';

describe('VentanaMetabolica', () => {
  let component: VentanaMetabolica;
  let fixture: ComponentFixture<VentanaMetabolica>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentanaMetabolica],
    }).compileComponents();

    fixture = TestBed.createComponent(VentanaMetabolica);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
