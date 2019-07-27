import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss']
})
export class FormArrayComponent implements OnInit {

  lst_Items: any = [
    { id: 1, itemName: 'Rasmalai', rate: 200 },
    { id: 2, itemName: 'Basundi', rate: 100 },
    { id: 3, itemName: 'GulabJambu', rate: 300 },
    { id: 4, itemName: 'Shreekhand', rate: 500 },
    { id: 5, itemName: 'Halvo', rate: 600 },
    { id: 6, itemName: 'Badampak', rate: 700 },
    { id: 7, itemName: 'Lachko', rate: 200 },
  ]

  Invoice_Form: FormGroup;
  subtotal: number = 0;
  discount: number = 0;
  grandTotal: number = 0;

  get InvoicesItems(): FormArray {
    return this.Invoice_Form.get('InvoicesItems') as FormArray;
  };

  formInitilization() {
    this.Invoice_Form = this.fb.group({
      discount: 'us',
      inputed_discount: '',
      InvoicesItems: this.fb.array([])
    });
  };

  addRow() {
    this.InvoicesItems.push(this.fb.group({
      itemid: 2,
      qty: 1,
      rate: this.lst_Items.length > 0 ? this.lst_Items[1].rate : 0,
      amount: this.lst_Items.length > 0 ? this.lst_Items[1].rate : 0,
    }));
  };

  calculationOfInvoice(Values) {
    let subtotal: number = 0;
    for (let i = 0; i < Values.length; i++) {
      const element = Values[i];
      const item = this.lst_Items.find(x => x.id == element.itemid);
      element.rate = item.rate;
      element.amount = (+element.qty) * element.rate;
      subtotal = subtotal + element.amount;
    }
    this.subtotal = subtotal;
    const formValue = this.Invoice_Form.value;
    if (formValue.inputed_discount) {
      if (formValue.discount == "us") {
        this.discount = (+formValue.inputed_discount);
      } else if (formValue.discount == "per") {
        this.discount = this.subtotal * (+formValue.inputed_discount) / 100;
      }
    };
    this.grandTotal = this.subtotal - this.discount;

    localStorage.setItem('items', JSON.stringify(this.InvoicesItems.value));
  };

  removeItem(item) {
    let i = this.InvoicesItems.controls.indexOf(item);
    if (i > -1) {
      this.InvoicesItems.controls.splice(i, 1);
      this.InvoicesItems.value.splice(i, 1);
    };
    this.calculationOfInvoice(this.InvoicesItems.value);
  };

  constructor(private fb: FormBuilder) {
    this.formInitilization();
  }

  ngOnInit() {
    this.Invoice_Form.valueChanges
      .subscribe(res => {
        if (res.InvoicesItems.length > 0) {
          this.calculationOfInvoice(res.InvoicesItems);
        };
      });
  }
}
