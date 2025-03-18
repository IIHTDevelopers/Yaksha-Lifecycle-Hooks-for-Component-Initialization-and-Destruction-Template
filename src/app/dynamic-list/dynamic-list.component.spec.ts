import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DynamicListComponent } from './dynamic-list.component';
import { DynamicListService } from '../dynamic-list.service';
import { of } from 'rxjs';

// Mock Service
class MockDynamicListService {
  getItems() {
    return of(['Item 1', 'Item 2', 'Item 3']); // Return mock data
  }
}

describe('DynamicListComponent', () => {
  let component: DynamicListComponent;
  let fixture: ComponentFixture<DynamicListComponent>;
  let mockService: MockDynamicListService;

  beforeEach(() => {
    // Configure TestBed with necessary declarations and providers
    TestBed.configureTestingModule({
      declarations: [DynamicListComponent],
      providers: [
        { provide: DynamicListService, useClass: MockDynamicListService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicListComponent);
    component = fixture.componentInstance;
    mockService = TestBed.inject(DynamicListService);
  });

  beforeEach(() => {
    // Set up initial state of the component
    component.filter = 'Item'; // Example filter
    fixture.detectChanges(); // Trigger lifecycle hooks
  });

  describe('boundary', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it('should call ngOnInit and fetch data', () => {
      const spy = jest.spyOn(mockService, 'getItems').mockReturnValue(of(['Item 1', 'Item 2', 'Item 3']));
      component.ngOnInit();
      expect(spy).toHaveBeenCalled();
      expect(component.items.length).toBeGreaterThan(0);
      expect(component.items).toEqual(['Item 1', 'Item 2', 'Item 3']);
    });

    it('should call ngOnDestroy and unsubscribe', () => {
      const spy = jest.spyOn(component, 'ngOnDestroy');
      component.ngOnDestroy();
      expect(spy).toHaveBeenCalled();
    });

    it('should display the current filter', () => {
      component.filter = 'Item';
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('p').textContent).toContain('Current Filter: Item');
    });

    it('should display the list of items', () => {
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      const listItems = compiled.querySelectorAll('li');
      expect(listItems.length).toBe(3);
      expect(listItems[0].textContent).toBe('Item 1');
      expect(listItems[1].textContent).toBe('Item 2');
      expect(listItems[2].textContent).toBe('Item 3');
    });
  });
});
