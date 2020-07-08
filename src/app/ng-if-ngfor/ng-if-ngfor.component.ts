import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-ngfor',
  templateUrl: './ng-if-ngfor.component.html',
  styleUrls: ['./ng-if-ngfor.component.css']
})
export class NgIfNgforComponent implements OnInit {
  numero: number;
  arrNumeros = ["julio", "cesar", "pedro", "yasmim"];

  constructor() { }

  ngOnInit(): void {
  }



}
