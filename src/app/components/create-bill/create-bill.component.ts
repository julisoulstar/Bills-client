import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BillService } from 'src/app/services/bill.service';

@Component({
  selector: 'app-create-bill',
  templateUrl: './create-bill.component.html',
  styleUrls: ['./create-bill.component.css']
})
export class CreateBillComponent implements OnInit {
  billForm: FormGroup;
  id: string;
  itemForm: FormGroup;
  itemList: Array<any> = []
  totalValue: number;
  totalIva: number;
  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService, private _billService: BillService, private activeRoute: ActivatedRoute) {
    this.billForm = this.fb.group({
      paid: '',

    });
    this.itemForm = this.fb.group({
      name: '',
      price: '',
    });
    this.id = this.activeRoute.snapshot.params["id"]
    this.totalValue = 0;
    this.totalIva = 0;
  }

  ngOnInit(): void {
    this.editBill();
  }
  agregarFactura(value: any) {
    let bill = {
      items: this.itemList,
      totalValue: this.totalValue,
      totalIva: this.totalIva,
      paid: value.paid ? value.paid : false,
      code: 0,
      fechaCreacion: new Date
    }
    console.log("factura:", bill)

    if (this.id) {
      this._billService.updateBill(this.id, bill).subscribe(data => {
        this.toastr.success('Se actulizó la factura', 'Factura actualizada');
        this.router.navigate(['/'])
      }, error => {
        console.log(error);
      })
      return;
    }
    this._billService.createBill(bill).subscribe(data => {
      this.toastr.success('Factura creada con exito', 'Factura hecha');
      this.router.navigate(['/'])
    }, error => {
      console.log(error);
    })


  }
  editBill() {
    if (this.id) {
      this._billService.getBill(this.id).subscribe(data => {
        this.billForm.setValue({
          paid: data.paid,
        })
        this.itemList = data.items;
        this.calculateTotalValue();
      })
    }
  }
  deleteItem(i: any) {
    this.itemList.splice(i, 1)
    this.calculateTotalValue();
  }
  agregarItem(value: any) {
    value.iva = value.price * 0.19;
    this.itemList.push(value)
    this.calculateTotalValue();

  }
  calculateTotalValue() {
    this.totalValue = 0;
    this.totalIva = 0;
    this.itemList.forEach(element => {
      this.totalValue = this.totalValue + element.price + element.iva,
        this.totalIva = this.totalIva + element.iva
    });
  }

}
