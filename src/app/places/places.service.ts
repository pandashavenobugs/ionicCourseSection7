import { Injectable } from '@angular/core';
import {Place} from "./place.model"
@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places:Place[]=[
    {
      id:'p1',
      title:'manhattan mansion',
      description:'in the heart of new york city',
      imageUrl:'https://media.istockphoto.com/photos/entering-hotel-room-picture-id512882668?s=612x612',
      price:149.99
    },
    {
      id:'p2',
      title:'lamour toujours',
      description:'romantic in paris',
      imageUrl:'https://media.istockphoto.com/photos/hotel-receptionist-assisting-guest-for-checking-in-picture-id1191193092',
      price:189.99
    },
    {
      id:'p3',
      title:'shity places',
      description:'terrible in america',
      imageUrl:'https://media.istockphoto.com/photos/child-with-mother-in-swimming-pool-holiday-resort-picture-id1136247293?s=612x612',
      price:189.99
    }
  ];

  get places(){
    return [...this._places]
  }

  getPlace(id:string){
    return {...this._places.find(
      p=> p.id === id
    )}
  }
  constructor() { }
}
