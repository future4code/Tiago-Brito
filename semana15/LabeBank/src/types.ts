export type statement = {
   value: number,
   statement_date: number,
   description: string
}

export type Account = {
   name: string,
   CPF: string,
   birth_date: number,
   balance: number
   statement: statement[]
}
