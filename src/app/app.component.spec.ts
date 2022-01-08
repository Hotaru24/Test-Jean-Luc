import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should convert number in the good word`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.numberToJeanLuc(3)).toBe('Jean');
    expect(app.numberToJeanLuc(5)).toBe('Luc');
    expect(app.numberToJeanLuc(30)).toBe('Jean-Luc');
    expect(app.numberToJeanLuc(1)).toBe('n');
  })
});


