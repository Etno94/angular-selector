import { Component, OnInit, signal } from '@angular/core';
import { ISupply } from '@app/models/ISupply.interface';
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

  supply = signal<ISupply>(
    {
      id: 0,
      address: '',
      nis: 0,
      alias: '',
      tags: [],
      status: '',
      linkedSupplies: [],
    });

    supplyData: ISupply = {
      id: 234,
      address: 'Avenida Libertad 2541',
      nis: 123,
      alias: 'Suministro Av. Libertad',
      tags: [
        { id: 1, text: 'Tag 1' },
        { id: 2, text: 'Tag 2' },
        { id: 3, text: 'Tag 3' },
      ],
      status: 'active',
      linkedSupplies: [
        { id: 1, 
          address: 'Avenida Libertad 2541',
          area: 'Las Tortuguitas',
          alias: 'Suministro Av. Libertad', },
        { id: 2, 
          address: 'Avenida Libertad 2541',
          area: 'Las Tortuguitas',
          alias: 'Suministro Av. Libertad', }
      ]
    };

  constructor(library: FaIconLibrary) {
    library.addIcons(faPlus, faMagnifyingGlass, faBell, faChevronDown); // Register the 'plus' icon
  }

  ngOnInit() {
    this.supply.set(this.supplyData);

  }

}
