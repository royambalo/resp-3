import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from '../services/api.service';
import { getImageUrl } from './helper';
import { CardResponse } from './response.model.card';
import { Card } from './view.card.model';
import { eMediaSourceType } from './helper.helper';


@Injectable({
  providedIn: 'root'
})

export class CardapiService {
  private api='http://3.123.132.148/api/dashboard/Cards'
  private hedears= {Language : 0}
  cards=new BehaviorSubject<Card[]>([])
  urlimg="https://www.landscapingbydesign.com.au/wp-content/uploads/2018/11/img-person-placeholder.jpg"
  constructor(private apiService:ApiService) { }

  getandmudle(){
   this.apiService.getCard(this.api,this.hedears).pipe(map((data:CardResponse)=>{
     const cardArray:Card[]=[];
     data=data.data;
     data.map((data:CardResponse)=>{
      const media = data?.media?.length ? data.media.find( m => m.onHomePage) : null;
      const imageUrl = media ?
      media.sourceLinkType === eMediaSourceType.IMAGE ? media.link :
      getImageUrl(media) :
      this.urlimg;
       cardArray.push(new Card(data.name,data.overview,data.sectors[0].name,data.type,imageUrl))
     });
     return cardArray
   })).subscribe((data)=>{this.cards.next(data)},(error)=>{console.log(error)})
  }
}
