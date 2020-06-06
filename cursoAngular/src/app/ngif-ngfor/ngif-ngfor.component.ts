import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif-ngfor',
  templateUrl: './ngif-ngfor.component.html',
  styleUrls: ['./ngif-ngfor.component.css']
})
export class NgifNgforComponent implements OnInit {

  numero: number = 1;
  array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  par : number = this.numero % 2;

  constructor() { }

  ngOnInit() {
  }

}
