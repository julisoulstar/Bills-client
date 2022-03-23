import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Bill } from 'src/app/models/bill';
import { BillService } from 'src/app/services/bill.service';

@Component({
  selector: 'app-reading-bill',
  templateUrl: './reading-bill.component.html',
  styleUrls: ['./reading-bill.component.css']
})
export class ReadingBillComponent implements OnInit {
  listBills: Bill[] = [];
  constructor(private _billService: BillService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getBills();
  }
  getBills() {
    this._billService.getBills().subscribe(data => {
      console.log(data)
      this.listBills = data;
    }, error => {
      console.log(error)
    })
  }

  


  deleteBill(id: any){
    this._billService.deleteBill(id).subscribe(data=>{
      this.toastr.error('Factura eliminada', 'Hecho')
      this.getBills();
    }, error =>{
      console.log(error)
    })
  }
}
