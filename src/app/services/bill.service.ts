import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bill } from '../models/bill';

@Injectable({
  providedIn: 'root'
})
export class BillService {
  url = 'http://localhost:4000/api/facturas/'
  constructor(private http: HttpClient) { }

  getBills(): Observable<any> {
    return this.http.get(this.url)
  }

  createBill(bill: Bill): Observable<any> {
    return this.http.post(this.url, bill)
  }

  getBill(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }
  updateBill(id: string, bill: Bill): Observable<any> {
    return this.http.put(this.url + id, bill);
  }

  deleteBill(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
}
