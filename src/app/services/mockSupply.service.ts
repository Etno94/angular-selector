import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { ISupply } from '@app/models/ISupply.interface';
import { ISupplyService } from '@app/models/ISupplyService.interface';

@Injectable({
  providedIn: 'root',
})
export class MockSupplyService implements ISupplyService {

  // Mocked supply data
  private mockSupplyData: ISupply[] = [
    {
      id: 234,
      address: 'Avenida Libertad 2541',
      area: 'Downtown',
      nis: 123,
      alias: 'Suministro Av. Libertad',
      tags: [
        { id: 1, text: 'Tag 1' },
        { id: 2, text: 'Tag 2' },
        { id: 3, text: 'Tag 3' },
      ],
      status: 'active',
    },
    {
      id: 205,
      address: '987 Willow Way',
      area: 'Rural',
      nis: 123,
      alias: 'Backup Supply 5',
      status: 'active',
    },
    {
      id: 201,
      address: '456 Oak Avenue',
      area: 'Downtown',
      nis: 123,
      alias: 'Backup Supply 1',
      status: 'active',
    },
    {
      id: 202,
      address: '789 Pine Road',
      area: 'Uptown',
      nis: 123,
      alias: 'Backup Supply 2',
      status: 'active',
    },
    {
      id: 203,
      address: '321 Birch Lane',
      area: 'Suburban',
      nis: 123,
      alias: 'Backup Supply 3',
      status: 'inactive',
    },
    {
      id: 234,
      address: 'Avenida Libertad 2541',
      area: 'Downtown',
      nis: 123,
      alias: 'Suministro Av. Libertad',
      tags: [
        { id: 1, text: 'Tag 1' },
        { id: 2, text: 'Tag 2' },
        { id: 3, text: 'Tag 3' },
      ],
      status: 'active',
    },
    {
      id: 205,
      address: '987 Willow Way',
      area: 'Rural',
      nis: 123,
      alias: 'Backup Supply 5',
      status: 'active',
    },
    {
      id: 201,
      address: '456 Oak Avenue',
      area: 'Downtown',
      nis: 123,
      alias: 'Backup Supply 1',
      status: 'active',
    },
    {
      id: 202,
      address: '789 Pine Road',
      area: 'Uptown',
      nis: 123,
      alias: 'Backup Supply 2',
      status: 'active',
    },
  ];

  constructor() {}

  getSupplyData(): Observable<ISupply[]> {
    return of(this.mockSupplyData).pipe(delay(3500)); // Simulate a delay for the loading state
  }
}
