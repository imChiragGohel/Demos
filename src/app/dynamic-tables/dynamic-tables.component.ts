import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-tables',
  templateUrl: './dynamic-tables.component.html',
  styleUrls: ['./dynamic-tables.component.scss']
})
export class DynamicTablesComponent implements OnInit {

  lst_table: any = {
    columnName: ['Id', 'Qty', 'Rate', 'Amount'],
    column: ['itemid', 'qty', 'rate', 'amount'],
    items: []
  };

  // lstTable: [
  //   { num: 1, id: 'itemid', name: 'Id', data: [] },
  //   { num: 2, id: 'qty', name: 'Id', data: [] },
  //   { num: 3, id: 'rate', name: 'Id', data: [] },
  //   { num: 4, id: 'amount', name: 'Id', data: [] },
  // ];

  constructor() { }

  ngOnInit() {
    const data = localStorage.getItem('items');
    if (data) {
      let items = JSON.parse(data);
      console.log('items:', items)

      var a3 = items.map(function (val) {
        return Object.keys(val).map((k, i) => {
          console.log('i:', i)
          return { [k]: val[k] }
          //console.log('k:', val[k])
        })
      });
      //console.log('z:', z);

      console.log('a3:', a3);
      this.lst_table.items = items;
    };
  }
}