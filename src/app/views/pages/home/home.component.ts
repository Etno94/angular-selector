import { Component, Inject, OnInit, signal } from '@angular/core';
import { ISupply } from '@app/models/ISupply.interface';
import { CardSelectorComponent } from '@app/shared/components/card-selector/card-selector.component';
import { config } from '@environments/config';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatIconModule } from '@angular/material/icon';
import { tap } from 'rxjs';
import { ISupplyService } from '@app/models/ISupplyService.interface';
import { ISupplyServiceToken } from '@app/app.config';

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
  isRequestingData = signal<boolean>(false); // isLoading flag as feedback for the user

  supplyData = signal<ISupply[]>([]); //Data we'll use for card-selector component

  // Mock Supplies for showing different states in the card-selector component
  mainSupplyData = signal<ISupply[]>([]);
  mainSupplyTwoLinkedData = signal<ISupply[]>([]);
  mainSupplyInactive = signal<ISupply[]>([]);
  mainSupplyManyLinkedData = signal<ISupply[]>([]);

  /**
   * @param ISupplyServiceToken we set the service token gaining flexibility and development speed
   * @param supplyService service instance we'll be using to operate 
   */
  constructor(@Inject(ISupplyServiceToken) private supplyService: ISupplyService) {
  }

  ngOnInit() {
    this.getSupplyData();
  }

  getSupplyData(): void {

    this.isRequestingData.set(true);

    this.supplyService.getSupplyData()
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
