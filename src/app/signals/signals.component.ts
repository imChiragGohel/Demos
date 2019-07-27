import { Component, OnInit } from '@angular/core';
//import { clearInterval,setInterval } from 'timers';
var inter;
@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.scss']
})
export class SignalsComponent implements OnInit {

  signalsValue: any;
  value: any;

  left_g: any = 0;
  left_r: any = 0;
  left_y: any = 0;
  right_r: any = 0;
  right_g: any = 0;
  right_y: any = 0;
  bottom_g: any = 0;
  bottom_r: any = 0;
  bottom_y: any = 0;
  top_g: any = 0;
  top_r: any = 0;
  top_y: any = 0;

  bufferTime: any = 3;


  signalGo() {
    if (this.signalsValue > 9 && this.signalsValue < 99) {
      this.clear();
      this.value = this.signalsValue;
      this.left_g = this.value;
      this.top_r = this.value;
      this.right_r = this.value * 2;
      this.bottom_r = this.value * 3;
      inter = setInterval(() => {
        this.timeMinus();
        this.calculations();
      }, 1000)
    } else {
      alert('Second must be greater than 9 \n And Less then 99');
    }
  };

  calculations() {
    if (this.left_g == this.bufferTime) {
      this.left_y = this.bufferTime;
    } else if (this.left_g == 0) {
      this.top_g = this.value;
      this.left_r = this.value * 3;
    } else if (this.top_g == this.bufferTime) {
      this.top_y = this.bufferTime;
    } else if (this.top_g == 0) {
      this.right_g = this.value;
      this.top_r = this.value * 3;
    } else if (this.right_g == this.bufferTime) {
      this.right_y = this.bufferTime;
    } else if (this.right_g == 0) {
      this.bottom_g = this.value;
      this.right_r = this.value * 3;
    } else if (this.bottom_g == this.bufferTime) {
      this.bottom_y = this.bufferTime
    } else if (this.bottom_g == 0) {
      this.left_g = this.value;
      this.bottom_r = this.value * 3;
    }
  };

  timeMinus() {
    this.left_g = this.left_g - 1;
    this.left_r = this.left_r - 1;
    this.left_y = this.left_y - 1;
    this.top_r = this.top_r - 1;
    this.top_y = this.top_y - 1;
    this.top_g = this.top_g - 1;
    this.right_r = this.right_r - 1;
    this.right_g = this.right_g - 1;
    this.right_y = this.right_y - 1;
    this.bottom_r = this.bottom_r - 1;
    this.bottom_g = this.bottom_g - 1;
    this.bottom_y = this.bottom_y - 1;
  };

  clear() {
    clearInterval(inter);
    this.value = 0;
    this.left_g = 0;
    this.left_r = 0;
    this.left_y = 0;
    this.right_r = 0;
    this.right_g = 0;
    this.right_y = 0;
    this.bottom_g = 0;
    this.bottom_r = 0;
    this.bottom_y = 0;
    this.top_g = 0;
    this.top_r = 0;
    this.top_y = 0;
  };

  constructor() { }

  ngOnInit() {
  }

}
