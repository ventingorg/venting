import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FnoComponent } from './fno.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        FnoComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(FnoComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'venting'`, () => {
    const fixture = TestBed.createComponent(FnoComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('venting');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(FnoComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent)
      .toContain('venting app is running!');
  });
});
