export class Car {
    push(car: Car) {
      throw new Error('Method not implemented.');
    }
    name: string;
    description: string;
    price: number;
    imageUrl: string;

    // TODO: Populate products from an API
    constructor( name: string, description = '', price = 0, imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUDeQ0UC4TH-VQn1gDp7HjwAPQvHiQvYHezg&usqp=CAU') {
        this.name = name
        this.description = description
        this.price = price
        this.imageUrl = imageUrl
    }
}