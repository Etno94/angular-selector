import { Component, effect, Input, signal } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ISupply } from '@app/models/ISupply.interface';
@Component({
  selector: 'app-card-selector',
  imports: [CommonModule, MatExpansionModule, MatIconModule],
  templateUrl: './card-selector.component.html',
  styleUrl: './card-selector.component.scss'
})
export class CardSelectorComponent {

  @Input() linkedSuppliesThreshold: number = 2;
  @Input() supply = signal<ISupply>(
    {
      id: 0,
      address: '',
      nis: 0,
      alias: '',
      tags: [],
      status: '',
      linkedSupplies: [],
    }
  );

  isOpen = false;
  
  toggleAccordion() {
    this.isOpen = !this.isOpen;
  }

  openSuplyMenu() {
  }

  isSupplyIdValid() {
    return this.supply() && this.supply().id > 0;
  }

}
