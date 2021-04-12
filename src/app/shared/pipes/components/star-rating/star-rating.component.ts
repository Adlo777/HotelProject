import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnChanges {

  public starWidth: number; //Taille de l'étoile
  @Input() public rating : number =2; // Le ratio d'étoiles
  constructor() { }

  ngOnChanges(): void {
    this.starWidth = this.rating * 25;//Pour pouvoir adapter la taille de l'étoile en fonction du ratio à chaque fois que le ratio des instances du composants changent.
  }

}
