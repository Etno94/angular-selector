import { Observable } from 'rxjs';
import { ISupply } from '@app/models/ISupply.interface';

export interface ISupplyService {
  getSupplyData(): Observable<ISupply[]>;
}