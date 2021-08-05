
// Exercicio 1
// A) Sim na propria classe
// B) Somente 1 vez
/*class User {
  private id: string;
  private email: string;
  private name: string;
  private password: string;

  constructor(
		id: string,
		email: string,
		name: string,
		password: string
	){
		console.log("Chamando o construtor da classe User")
		this.id = id
		this.email = email
		this.name = name 
		this.password = password
	}

	public getId(): string {
		return this.id
	}

	public getEmail(): string {
		return this.email
	}

	public getName(): string {
		return this.name
	}
    public getPassword(): string {
		return this.password
	}
    public introduceYourSelf(): string {
        return (`Olá, bom dia ${this.name}!`)
    }
}

const newTiago = new User("1","tiago@gmail.com","Tiago","123456");*/


//console.log(newTiago.getId())

//console.log(newTiago.getEmail())

//console.log(newTiago.getName())

//console.log(newTiago.getPassword())

//console.log(newTiago.introduceYourSelf())

/*class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
    }
  
    public getCreditCard(): string {
      return this.creditCard;
    }
  }
  const newClient = new Customer("2", "carla@gmail.com", "May Pedroso", "123456", "mastercard")*/
  

  
// Exercicio 3
 /* console.log(newClient.getId())
  console.log(newClient.getName())
  console.log(newClient.getEmail())
  console.log(newClient.getCreditCard())
  console.log(newClient.getPassword())*/



  // Polimorfismo
  
// Exercicio 1

  export interface Client {
    name: string;
    // Refere-se ao nome do cliente
  
    registrationNumber: number;
    // Refere-se ao número de cadastro do cliente na concessionária
      // como se fosse um id
  
    consumedEnergy: number;
    // Refere-se à energia consumida pelo cliente no mês
  
    calculateBill(): number;
    // Retorna o valor da conta em reais
  }
  

  const client: Client = {
    name: "Goli",
    registrationNumber: 1,
    consumedEnergy: 100,
  
    calculateBill: () => {
      return 2;
    }
  }
  
  console.log(client)


export abstract class Place {
  constructor(protected cep: string) {}

	public getCep(): string {
		return this.cep;
  }
}

//const newPlace = new Place("06618000")
  
export class Residence extends Place {
    constructor(
      protected residentsQuantity: number,
      // Refere-se ao número de moradores da casa
  
      cep: string
    ) {
      super(cep);
    }
  }

  export class Commerce extends Place {
    constructor(
      protected floorsQuantity: number,
      // Refere-se à quantidade de andares do lugar
  
      cep: string
    ) {
      super(cep);
    }
  }

  export class Industry extends Place {
    constructor(
      protected machinesQuantity: number, 
      // Refere-se à quantidade de máquinas do local 
      
      cep: string
          ) {
          super(cep);
    }
  }

  