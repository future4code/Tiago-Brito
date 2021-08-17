

export class Product {
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