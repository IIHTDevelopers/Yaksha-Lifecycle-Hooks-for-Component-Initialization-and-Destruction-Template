import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DynamicListComponent } from './dynamic-list/dynamic-list.component';
import { FormsModule } from '@angular/forms';  // Needed for ngModel binding

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let dynamicListComponent: DynamicListComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AppComponent, DynamicListComponent],
            imports: [FormsModule]  // Import FormsModule to handle ngModel
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();  // Trigger change detection
        dynamicListComponent = fixture.debugElement.children[0].componentInstance;
    });

    describe('boundary', () => {
        it('should create the app component', () => {
            expect(component).toBeTruthy();
        });

        it('should update the filter value when input changes', () => {
            const input = fixture.nativeElement.querySelector('input');
            input.value = 'New Filter Value';
            input.dispatchEvent(new Event('input'));  // Simulate user input
            fixture.detectChanges();  // Trigger change detection

            expect(component.filter).toBe('New Filter Value');
            expect(dynamicListComponent.filter).toBe('New Filter Value');  // Check if the dynamic list receives the updated filter
        });

        it('should update the filter using updateFilter method', () => {
            component.updateFilter('Updated Filter');
            fixture.detectChanges();  // Trigger change detection

            expect(component.filter).toBe('Updated Filter');
            expect(dynamicListComponent.filter).toBe('Updated Filter');  // Ensure the filter is passed to DynamicListComponent
        });

        it('should pass the filter value to the DynamicListComponent', () => {
            component.filter = 'Item 2';
            fixture.detectChanges();  // Trigger change detection

            // Test that the DynamicListComponent gets the correct filter value
            expect(dynamicListComponent.filter).toBe('Item 2');
        });
    });
});
