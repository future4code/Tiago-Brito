

class User {
    public id: string;
    private email: string;
    public name: string;
    private age: number;


    constructor(
        id: string,
        email: string,
        name: string,
        age: number,
    ) {
        console.log("Chamando o construtor da classe User")
        this.id = id
        this.email = email
        this.name = name
        this.age = age

    }


    public getEmail(): string {
        return this.email
    }

 
    public getAge(): number {
        return this.age
    }
}


class Product {
    private name: string;
    private description: string;
    private price: number;

    constructor(
        name: string,
        description: string,
        price: number,
    ) {
        console.log("Chamando o construtor da classe Product")
        this.name = name;
        this.description = description;
        this.price = price;
    }

    public getName(): string {
        return this.name
    }

    public getDescription(): string {
        return this.description
    }

    public getPrice(): number {
        return this.price
    }

    
}

interface ticket_destination {
    leaving: string;
    going: string;
}


class Ticket extends Product implements ticket_destination {
    public leaving: string = ""
    public going: string = ""

    constructor(
        name: string,
        description: string,
        price: number
    ) {
        super(name, description, price)
    }

    public setLeaving(): string {
        return this.leaving;
    }

    public setGoing(): string {
        return this.going;
    }
}

interface quantity_purchase {
    quantity: number;
}

class Purchase extends Product implements quantity_purchase{
   public quantity: number = 1
 
   constructor(
       id: string,
       name: string,
       description: string,
       price: number,
    ) {
      super(name, description, price)
   }
 
   public getTotal(price:number, quantity:number): number {
    const total = price * quantity
    return total
  }
  
 }