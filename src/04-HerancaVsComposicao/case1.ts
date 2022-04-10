class PessoaFisica extends Pessoa {
  private readonly _Cpf: string;

  constructor(nome: string, dataNascimento: Date, cpf: string) {
    super(nome, dataNascimento);
    this._Cpf = cpf;
  }
}

class PessoaFisica2 {
  private readonly _pessoa: Pessoa;
  private readonly _Cpf: string;

  constructor(pessoa: Pessoa, cpf: string) {
    this._pessoa = pessoa;
    this._Cpf = cpf;
  }

  getPessoa(): Pessoa {
    return this._pessoa;
  }

  getCpf(): string {
    return this._Cpf;
  }
}

class TesteHerancaComposicao {
  constructor() {
    const pessoaHeranca = new PessoaFisica("Joao", new Date(), "323232323232");

    const pessoa = new Pessoa("Joao", new Date());
    const pessoaComposicao = new PessoaFisica2(pessoa, "323232323232");

    // Recuperar o estado do nome
    const nomeHeranca = pessoaHeranca.getNome();
    const nomeComposicao = pessoaComposicao.getPessoa().getNome();
  }
}