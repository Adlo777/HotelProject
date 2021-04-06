export interface IHotel{

    hotelId: number;
    hotelName: string;
    description: string;
    price:number;
    imageUrl: string;
    rating : number;
    status: boolean;
}

/*On crée une interface pour pouvoir organiser le code de façon plus lisible et ainsi pouvoir profiter de toutes les propriétés du TypeScript. Notons que la variable hotel passe de any à IHotel comme type. Quelques fois on a recours aux classes externes mais ils sont utiles quand on veut implementer des méthodes propres à la classe dans des gros projets notamment.*/

export class Hotel
{
    hotelId: number;
    hotelName: string;
    description: string;
    price:number;
    imageUrl: string;
    rating : number;

    gethotelId() : number
    {
        return this.hotelId;
    }


}