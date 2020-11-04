import { Component, OnInit } from '@angular/core';
import { CardapiService } from './cardapi.service';

@Component({
  selector: 'app-invest-comp',
  templateUrl: './invest-comp.component.html',
  styleUrls: ['./invest-comp.component.scss']
})
export class InvestCompComponent implements OnInit {

  constructor(public serviceCard:CardapiService) { }

  ngOnInit(): void {
    this.serviceCard.getandmudle();
   this.serviceCard.cards.subscribe(
    data=>console.log(data)
   )
  }

}
