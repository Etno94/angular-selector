import { Component, ChangeDetectionStrategy, effect, Input, OnInit, signal } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatMenuModule} from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { ISupply } from '@app/models/ISupply.interface';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Observable } from 'rxjs/internal/Observable';
import { map, startWith } from 'rxjs';
@Component({
  selector: 'app-card-selector',
  imports: [
    CommonModule,
    FormsModule,
    MatExpansionModule,
    MatMenuModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    AsyncPipe,
    MatIconModule],
  templateUrl: './card-selector.component.html',
  styleUrl: './card-selector.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush // We use OnPush strategy to optimize performance and avoid unnecessary re-renders
})
export class CardSelectorComponent implements OnInit {

  @Input() linkedSuppliesThreshold: number = 3;
  @Input() suppliesData = signal<ISupply[]>([]);
  @Input() isLoading = signal<boolean>(false);

  selectedSupply: ISupply | null = null;

  searchControl = new FormControl('');
  secondarySupplies: ISupply[] = [];

  isOpen = false;
  filteredOptions!: Observable<ISupply[]>;

  constructor() {
    effect(() => {
      // Each time the suppliesData signal changes, we set the selectedSupply to the first supply in the list and update secondarySupplies
      this.selectFirstSupply();
      this.secondarySupplies = this.setSuppliesDataWithoutFirst();
    });
  }

  ngOnInit() {
    this.setSuggestObservable();
  }

  // #region: Data flow

  selectFirstSupply(): void {
    this.selectedSupply = this.suppliesData()[0];
  }

  setSuppliesDataWithoutFirst(): ISupply[] {
    return this.suppliesData().slice(1);
  }

  // #endregion: Data flow

  // #region UI Controls

  selectSupply(supply: ISupply) {
    if (!supply || !supply.id) return;
    // We show the selected supply details in the main card. 
    // When unselecting, we set the selected supply back to the first supply in the list.
    this.selectedSupply = supply.id === this.selectedSupply?.id ? this.suppliesData()[0] : supply;
  }
  
  toggleAccordion(): void {
    this.isOpen = !this.isOpen;
  }

  openSupplyOptions(): void {
  }

  setSuggestObservable(): void {
    this.filteredOptions = this.searchControl.valueChanges.pipe(
      startWith(''),
      map((supply: ISupply | string | null) => {
        if (typeof supply === 'string') {
          // We reset selectedSupply to the first supply if the input is cleared or invalid
          this.selectFirstSupply();
        } 
        // We check input value type and return the filtered options.
        // If no valid filter is provided, we return the secondarySupplies list.
        const address = typeof supply === 'string' ? supply : supply?.address;
        return address ? this._filter(address || '') : this.secondarySupplies.slice();
      })
    );
  }

  // #endregion: UI Controls

  // #region: Computed properties

  hasAtLeastOneSupply(): boolean {
    return this.suppliesData() && this.suppliesData().length > 0;
  }

  hasManySupplies(): boolean {
    return this.suppliesData() && this.suppliesData().length > 1;
  }

  hasSuppliesAboveThreshold(): boolean {
    return this.suppliesData() && this.suppliesData().length > this.linkedSuppliesThreshold;
  }

  private _filter(value: string): ISupply[] {
    const filterValue = value.toLowerCase();

    return this.secondarySupplies.filter(option => option.address.toLowerCase().includes(filterValue));
  }

  displaySupplyAddress(supply: ISupply): string {
    return supply && supply.address ? supply.address : '';
  }

  // #endregion: Computed properties

}
