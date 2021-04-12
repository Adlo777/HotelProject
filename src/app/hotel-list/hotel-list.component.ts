import { Component, OnInit } from '@angular/core';
import {IHotel} from './hotel';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

  public showBadge : boolean = false;
  public realnom : boolean = false;

  private _hotelfilter : string = 'mot';

  public hotelFiltered : IHotel[] = [];

  public get hotelFilter() : string
  {
    return this._hotelfilter;

  }

  public set hotelFilter(criteria : string) 
  {
    this._hotelfilter = criteria;
    this.hotelFiltered = this.hotelFilter ? this.FilteredHotels(this._hotelfilter) : this.hotels;

  }

  public FilteredHotels(criteria:string):IHotel[]
  {
    criteria = criteria.toLocaleLowerCase();
    const res = this.hotels.filter((hotel:IHotel) => hotel.hotelName.toLocaleLowerCase().indexOf(criteria)!==-1);
    return res;
  }




  public toggleshowBadge() : void{
    this.showBadge = !this.showBadge;
  }




  public title : string = 'Hotel List';

 

  public hotels : IHotel[] = [
    {
      "hotelId": 1,
      "hotelName": "Buea sweet life",
      "description": "Belle vue au bord de la mer",
      "price": 230.5,
      "imageUrl": "assets/img/hotel-room.jpg",
      "rating": 3.5,
      "status": true
},
{
      "hotelId": 2,
      "hotelName": "Marakech",
      "description": "Profitez de la vue sur les montagnes",
      "price": 145.5,
      "imageUrl": "assets/img/the-interior.jpg",
      "rating": 5,
      "status":false
},
{
      "hotelId": 3,
      "hotelName": "Abudja new look palace",
      "description": "Séjour complet avec service de voitures",
      "price": 120.12,
      "imageUrl": "assets/img/indoors.jpg",
      "rating": 4,
      "status":false
},
{
      "hotelId": 4,
      "hotelName": "Cape town city",
      "description": "Magnifique cadre pour votre séjour",
      "price": 135.12,
      "imageUrl": "assets/img/window.jpg",
      "rating": 2.5,
      "status":true
}
  ]

 
  public hotelstatus : boolean[] = this.hotels.map(hotel => hotel.status);



  
  constructor() {
    
   }

  ngOnInit(): void {
    this.hotelFiltered= this.hotels;
    this._hotelfilter = ''
    
  }

}
