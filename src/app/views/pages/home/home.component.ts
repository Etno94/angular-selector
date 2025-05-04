import { Component, OnInit, signal } from '@angular/core';
import { ISupply } from '@app/models/ISupply.interface';
import { SupplyService } from '@app/services/supply.service';
import { CardSelectorComponent } from '@app/shared/components/card-selector/card-selector.component';
import { config } from '@environments/config';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faPlus, faMagnifyingGlass, faBell, faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  imports: [
    FontAwesomeModule,
    CardSelectorComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  LINKED_SUPPLIES_THRESHOLD: number = config.linkedSuppliesThreshold;

  voidSupplyObj: ISupply = {
    id: 0,
    address: '',
    nis: 0,
    alias: '',
    tags: [],
    status: '',
    linkedSupplies: [],
  };

  supplyData = signal<ISupply>(this.voidSupplyObj); //Data we'll use for card-selector component

  // Mock Supplies for showing different states in the card-selector component
  mainSupplyData = signal<ISupply>(this.voidSupplyObj);
  mainSupplyTwoLinkedData = signal<ISupply>(this.voidSupplyObj);
  mainSupplyManyLinkedData = signal<ISupply>(this.voidSupplyObj);

  constructor(library: FaIconLibrary, private supplyService: SupplyService) {
    library.addIcons(faPlus, faMagnifyingGlass, faBell, faChevronDown); // Register the 'plus' icon
  }

  ngOnInit() {

    // We would use this to get the supply data from the API
    // this.supplyService.getSupplyData()

    // Mock data for testing purposes
    this.supplyService.getMockSupplyData().subscribe({
      next: (supplyData: ISupply[]) => {
        this.mainSupplyData.set(supplyData[0]);
        this.mainSupplyTwoLinkedData.set(supplyData[1]);
        this.mainSupplyManyLinkedData.set(supplyData[2]);
      },
      error: (err) => {
        // Handle error here
        console.error('Error fetching supply data:', err);
      }
    });

  }

}
