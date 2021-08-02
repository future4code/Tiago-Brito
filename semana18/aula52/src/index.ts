
// a) construtores são os responsáveis por criar o objeto em memória, ou seja, instanciar a classe que foi definida. usamos a palavra reservada “new” e o nosso construtor é chamado.

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
    public getCpf():string {
        return this.cpf
    }

    public setAge(age: number) {
        if (age >= 18) {
          this.age = age;
        } else {
          throw new Error("Idade tem que ser maior de 18");
        }
      }

  }
  //b
   const  usuario = new UserAccount("123.123.123-11", "Camily", 18)
//Exercicio 2

  class Transaction {
    private date: string;
    private value: number;
    private description: string;

    public getDate=() =>{
        return this.date
    }

    public getValue=() =>{
        return this.value
    }
     public getDescription=() =>{
      return this.description
  }

    constructor(date: string, value: number, description: string) {
      this.date = date;
      this.value = value;
      this.description = description
    }
  }

  const Transactions = new Transaction("21-03", 500, "deu certo")
  //console.log(Transactions)

  class Bank {

    private accounts: UserAccount[];


    public addUser(cpf:string, name: string, age: number) {
        const user = new UserAccount(cpf,name,age);
        this.accounts.push(user);
      }

    constructor(accounts: UserAccount[]) {
      this.accounts = accounts;
    }
    public getAccount():UserAccount[] {
        return this.accounts
    }




    public setAccount():UserAccount[] {
        return this.accounts
    }

  }


const Thiago = new UserAccount("124.145.167-09", "Thiago", 20)
//console.log(Thiago)



//console.log(Thiago.getCpf())
//console.log(Thiago.setAge(18))