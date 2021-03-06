import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UmwComponent } from './umw.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        UmwComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(UmwComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'umw-app'`, () => {
    const fixture = TestBed.createComponent(UmwComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('umw-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(UmwComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('umw-app app is running!');
  });
});
