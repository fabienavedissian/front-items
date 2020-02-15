/** Core testing */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

/** Shared Module */
import { SharedModule } from 'src/app/shared/shared.module';

/** Components */
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let firstCheckbox: any;
  let itemsCheckbox: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [HomeComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    firstCheckbox = fixture.debugElement.query(By.css('.checkbox-first')).nativeElement;
    itemsCheckbox = fixture.debugElement.query(By.css('.checkbox-item')).nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should checked all items on checked "Select All', () => {
    /** Default State */
    expect(firstCheckbox.checked).toBeFalsy();

    /** Simulate click on first checkbox */
    firstCheckbox.click();
    fixture.detectChanges();

    /** First checkbox should be truthy */
    expect(firstCheckbox.getAttribute('ng-reflect-checked')).toBeTruthy();

    /** All checkbox should be truthy */
    expect(itemsCheckbox.getAttribute('ng-reflect-checked')).toBeTruthy();
  });

  it ('should check if all items are checked so "Select All" should be checked', () => {
    /** Default State */
    expect(itemsCheckbox.checked).toBeFalsy();

    /** Simulate click on checkbox */
    itemsCheckbox.click();
    fixture.detectChanges();

    /** checkbox should be truthy */
    expect(itemsCheckbox.getAttribute('ng-reflect-checked')).toBeTruthy();

    /** First checkbox should be truthy */
    expect(firstCheckbox.getAttribute('ng-reflect-checked')).toBeTruthy();

  });
});
