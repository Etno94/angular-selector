import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISupply } from '@app/models/ISupply.interface';
import { config } from '@environments/config';
import { ISupplyService } from '@app/models/ISupplyService.interface';

@Injectable({
  providedIn: 'root',
})
export class SupplyService implements ISupplyService {
  private apiUrl = config.apiURL;

  constructor(private http: HttpClient) {}

  getSupplyData(): Observable<ISupply[]> {
    return this.http.get<ISupply[]>(`${this.apiUrl}/user_id`);
  }
}
