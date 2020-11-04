import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../view.card.model';

@Component({
  selector: 'app-cardcomp',
  templateUrl: './cardcomp.component.html',
  styleUrls: ['./cardcomp.component.scss'],
})
export class CardcompComponent implements OnInit {
  @Input() item: Card;
  @Input() i: number;
  colorBackGrounf = '#0F237D';
  fontColorLeft = '#1E1E1E';
  fontColorRight = '#0F237D';
  constructor() {}

  ngOnInit(): void {
    console.log(this.i)
    switch (this.item.type) {
      case 'companies':
        this.colorBackGrounf = '#F5F5F5';
        this.fontColorLeft = '#1E1E1E';
        this.fontColorRight = '#0F237D';
        break;
      case 'funds':
        this.colorBackGrounf = '#0F237D';
        this.fontColorLeft = '#FFFFFF';
        this.fontColorRight = '#FFFFFF';

        break;
      case 'index':
        this.colorBackGrounf = '#1857FA';
        this.fontColorLeft = '#FFFFFF';
        this.fontColorRight = '#FFFFFF';

        break;
      default:
        this.colorBackGrounf = 'white';
        this.fontColorLeft = '#1E1E1E';
        this.fontColorRight = '#0F237D';

        break;
    }
  }
}
