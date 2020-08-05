import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe.skip('AppComponent', () => {
  let fixture;
  let instance;
  beforeEach(async(() => {
    console.log('HIT');
    TestBed.configureTestingModule({
      declarations: [AppComponent],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AppComponent);
        console.log('FIXTURE: ', fixture);
        instance = fixture.componentInstance;
      });
  }));

  it('should create the app', () => {
    expect(instance).toBeTruthy();
  });

  it(`should have as title 'dd-quiz'`, () => {
    expect(instance.title).toEqual('dd-quiz');
  });
});
