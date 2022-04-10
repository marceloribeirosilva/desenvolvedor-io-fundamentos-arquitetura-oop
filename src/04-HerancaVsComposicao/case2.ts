interface IRepositorio<T> {
  Adicionar(T: object): void;
  Excluir(T: object): void;
}

interface IRepositorioPessoa {
  Adicionar(pessoa: Pessoa): void;
}

class Repositorio<T> implements IRepositorio<T> {
  Adicionar(T: object): void {
    
  }

  Excluir(T: object): void {
    
  }
}

class RepositorioHerancaPessoa extends Repositorio<Pessoa> implements IRepositorioPessoa {

}

class RepositorioComposicaoPessoa implements IRepositorioPessoa {
  private readonly _repositorioPessoa: IRepositorio<Pessoa>;

  constructor(repositorioPessoa: IRepositorio<Pessoa>) {
    this._repositorioPessoa = repositorioPessoa;
  }

  Adicionar(pessoa: Pessoa): void {
    this._repositorioPessoa.Adicionar(pessoa);
  }
}

class TestesHerancaComposicao {
  constructor() {
    const pessoa = new Pessoa("Marcelo", new Date());
    
    const repositorioHeranca = new RepositorioHerancaPessoa();
    repositorioHeranca.Adicionar(pessoa);
    repositorioHeranca.Excluir(pessoa);

    const repositorioComposicao = new RepositorioComposicaoPessoa(new Repositorio<Pessoa>());
    repositorioComposicao.Adicionar(pessoa);
  }
}