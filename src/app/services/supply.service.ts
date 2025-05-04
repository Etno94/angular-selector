import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable, of } from 'rxjs';
import { ISupply } from '@app/models/ISupply.interface';
import { config } from '@environments/config';

@Injectable({
  providedIn: 'root',
})
export class SupplyService {
  private apiUrl = config.apiURL;

  // Mocked supply data
  private mockSupplyData: ISupply[] = [
    {
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
      linkedSupplies: [],
    },
    {
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
        {
          id: 204,
          address: '654 Spruce Street',
          area: 'Industrial Zone',
          alias: 'Backup Supply 4',
        },
        {
          id: 205,
          address: '987 Willow Way',
          area: 'Rural',
          alias: 'Backup Supply 5',
        },
      ],
    },
    {
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
        {
          id: 201,
          address: '456 Oak Avenue',
          area: 'Downtown',
          alias: 'Backup Supply 1',
        },
        {
          id: 202,
          address: '789 Pine Road',
          area: 'Uptown',
          alias: 'Backup Supply 2',
        },
        {
          id: 203,
          address: '321 Birch Lane',
          area: 'Suburban',
          alias: 'Backup Supply 3',
        },
      ],
    },
  ];

  constructor(private http: HttpClient) {}

  getSupplyData(): Observable<ISupply> {
    return this.http.get<ISupply>(`${this.apiUrl}/user_id`);
  }

  getMockSupplyData(): Observable<ISupply[]> {
    return of(this.mockSupplyData).pipe(delay(5000));
  }
}
