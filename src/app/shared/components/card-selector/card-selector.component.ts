import { Component, computed, effect, Input, OnInit, signal } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import { AsyncPipe, CommonModule } from '@angular/common';
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
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
    MatIconModule],
  templateUrl: './card-selector.component.html',
  styleUrl: './card-selector.component.scss'
})
export class CardSelectorComponent implements OnInit {

  @Input() linkedSuppliesThreshold: number = 2;
  @Input() suppliesData = signal<ISupply[]>([]);

  myControl = new FormControl('');
  secondarySupplies: ISupply[] = [];

  isOpen = false;
  filteredOptions!: Observable<ISupply[]>;

  constructor() {
    effect(() => {
      this.secondarySupplies = this.setSuppliesDataWithoutFirst();
    });
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((supply: ISupply | string | null) => {
      const address = typeof supply === 'string' ? supply : supply?.address;
        return address ? this._filter(address || '') : this.secondarySupplies.slice();
      })
    );
  }

  setSuppliesDataWithoutFirst(): ISupply[] {
    return this.suppliesData().slice(1);
  }

  // #region UI Controls

  selectSupply(supply: ISupply) {
    console.log('Selected supply:', supply);
    // Handle the supply selection logic here
  }
  
  toggleAccordion(): void {
    this.isOpen = !this.isOpen;
  }

  openSuplyMenu(): void {
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
