import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

import { CardSelectorComponent } from './card-selector.component';

describe('CardSelectorComponent', () => {
  let component: CardSelectorComponent;
  let fixture: ComponentFixture<CardSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CardSelectorComponent,
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatIconModule,
        MatMenuModule,
        NoopAnimationsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CardSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the loading spinner when isLoading is true', () => {
    component.isLoading.set(true);
    fixture.detectChanges();

    const spinner = fixture.debugElement.query(By.css('mat-spinner'));
    expect(spinner).toBeTruthy();
  });

  it('should display the "No Supplies" message when there are no supplies', () => {
    component.suppliesData.set([]);
    fixture.detectChanges();

    const noSuppliesMessage = fixture.debugElement.query(By.css('[role="alert"]'));
    expect(noSuppliesMessage).toBeTruthy();
    expect(noSuppliesMessage.nativeElement.textContent).toContain('Sin suministros actualmenteAl momento no hay suministros asociados al usuario');
  });

  it('should display the list of supplies when suppliesData is provided', () => {
    component.suppliesData.set([
      { id: 1, address: '123 Main St', area: 'Downtown', nis: 123, alias: 'Home', status: 'active' },
      { id: 2, address: '456 Elm St', area: 'Suburb', nis: 456, alias: 'Office', status: 'inactive' },
      { id: 3, address: '987 Willow Way', area: 'Rural', nis: 123, alias: 'Backup Supply 5', status: 'active'}
    ]);
    fixture.detectChanges();

    const supplyItems = fixture.debugElement.queryAll(By.css('[role="button"]'));
    expect(supplyItems.length).toBe(2);
    expect(supplyItems[0].nativeElement.textContent).toContain('456 Elm St');
    expect(supplyItems[1].nativeElement.textContent).toContain('987 Willow Way');
  });

  it('should call selectSupply when a supply is clicked', () => {
    spyOn(component, 'selectSupply');
    component.suppliesData.set([
      { id: 1, address: '987 Willow Way', area: 'Rural', nis: 123, alias: 'Backup Supply 5', status: 'active'},
      { id: 2, address: '123 Main St', area: 'Downtown', nis: 123, alias: 'Home', status: 'active' },
    ]);
    fixture.detectChanges();

    const supplyItem = fixture.debugElement.query(By.css('[role="button"]'));
    supplyItem.triggerEventHandler('click', null);

    expect(component.selectSupply).toHaveBeenCalledWith({
      id: 2,
      address: '123 Main St',
      area: 'Downtown',
      nis: 123,
      alias: 'Home',
      status: 'active',
    });
  });

  it('should clear the search input when the clear button is clicked', () => {
    component.suppliesData.set([
      { id: 1, address: '987 Willow Way', area: 'Rural', nis: 123, alias: 'Backup Supply 5', status: 'active'},
      { id: 2, address: '123 Main St', area: 'Downtown', nis: 123, alias: 'Home', status: 'active' },
      { id: 3, address: '987 Willow Way', area: 'Rural', nis: 123, alias: 'Backup Supply 5', status: 'active'},
      { id: 4, address: '987 Willow Way', area: 'Rural', nis: 123, alias: 'Backup Supply 5', status: 'active'},
      { id: 5, address: '123 Main St', area: 'Downtown', nis: 123, alias: 'Home', status: 'active' },
      { id: 6, address: '987 Willow Way', area: 'Rural', nis: 123, alias: 'Backup Supply 5', status: 'active'}
    ]);
    component.searchControl.setValue('Test');
    fixture.detectChanges();

    const clearButton = fixture.debugElement.query(By.css('button[aria-label="Clear Search"]'));
    expect(clearButton).toBeTruthy();
    clearButton.triggerEventHandler('click', null);

    expect(component.searchControl.value).toBe('');
  });
});