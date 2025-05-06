import { Component, OnInit, signal } from '@angular/core';
import { ISupply } from '@app/models/ISupply.interface';
import { SupplyService } from '@app/services/supply.service';
import { CardSelectorComponent } from '@app/shared/components/card-selector/card-selector.component';
import { config } from '@environments/config';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatIconModule } from '@angular/material/icon';
import { tap } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [
    FontAwesomeModule,
    MatIconModule,
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
    area: '',
    nis: 0,
    alias: '',
    tags: [],
    status: '',
  };

  isRequestingData = signal<boolean>(false); // isLoading flag as feedback for the user

  supplyData = signal<ISupply[]>([]); //Data we'll use for card-selector component

  // Mock Supplies for showing different states in the card-selector component
  mainSupplyData = signal<ISupply[]>([]);
  mainSupplyTwoLinkedData = signal<ISupply[]>([]);
  mainSupplyInactive = signal<ISupply[]>([]);
  mainSupplyManyLinkedData = signal<ISupply[]>([]);

  constructor(private supplyService: SupplyService) {
  }

  ngOnInit() {
    this.getSupplyData();
  }

  getSupplyData(): void {

    this.isRequestingData.set(true);

    // We would use this to get the supply data from the API
    // this.supplyService.getSupplyData()

    // Mock data for testing purposes
    this.supplyService.getMockSupplyData()
      .pipe(
        tap(() => this.isRequestingData.set(false))
      )
      .subscribe({
        next: (supplyData: ISupply[]) => {
          this.mainSupplyData.set([supplyData[0]]);
          this.mainSupplyTwoLinkedData.set([supplyData[1], supplyData[2], supplyData[4]]);
          this.mainSupplyInactive.set([supplyData[4]]);
          this.mainSupplyManyLinkedData.set(supplyData);
        },
        error: (err) => {
          // We can handle errors here, showing a Toast message feedback to the user
          console.error('Error fetching supply data:', err);
        }
      });
  }

}
