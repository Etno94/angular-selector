import { InMemoryDbService } from 'angular-in-memory-web-api';

export class MockDataService implements InMemoryDbService {
  createDb() {
    const supplies = [
      { id: 1, address: '123 Main St', area: 'Downtown', alias: 'Home', status: 'active' },
      { id: 2, address: '456 Elm St', area: 'Suburb', alias: 'Office', status: 'inactive' },
      { id: 3, address: '789 Willow Way', area: 'Rural', alias: 'Farm', status: 'active' },
    ];
    return { supplies };
  }
}