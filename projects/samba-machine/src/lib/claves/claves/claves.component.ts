import { Component, OnInit } from '@angular/core';
import {ClavesService} from "../claves.service";

@Component({
  selector: 'claves',
  templateUrl: './claves.component.html',
  styleUrls: ['./claves.component.css']
})
export class ClavesComponent implements OnInit {

  constructor(private service: ClavesService) { }

  ngOnInit(): void {
  }

}
