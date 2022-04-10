class Pessoa {
  private Nome: string;
  private DataNascimento: Date;

  constructor(nome: string, dataNascimento: Date) {
    this.Nome = nome;
    this.DataNascimento = dataNascimento;
  }

  setNome(nome: string){
    this.Nome = nome;
  }

  getNome(): string{
    return this.Nome;
  }

  setDataNascimento(data: Date) {
    this.DataNascimento = data;
  }

  getDataNascimento(): Date {
    return this.DataNascimento;
  }

  CalcularIdade(): number {
    const dataAtual = new Date();
    const idade = dataAtual.getFullYear() - this.DataNascimento.getFullYear()
    return idade;
  }
}