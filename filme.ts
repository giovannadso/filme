class Filme {
    titulo: string;
    ano: number;
  
    constructor(titulo: string, ano: number) {
      this.titulo = titulo;
      this.ano = ano;
    }
  }
  
  class Acao extends Filme {
    categoria: string;
  
    constructor(titulo: string, ano: number) {
      super(titulo, ano);
      this.categoria = "Ação";
    }
  }
  
  class Romance extends Filme {
    categoria: string;
  
    constructor(titulo: string, ano: number) {
      super(titulo, ano);
      this.categoria = "Romance";
    }
  }
  
  const listaDeFilmes: (Acao | Romance)[] = [
    new Acao("Missão Impossível", 2000),
    new Acao("Velozes e Furiosos", 2010),
    new Romance("Titanic", 1997),
    new Romance("Diário de uma Paixão", 2004),
    new Acao("Duro de Matar", 1988),
    new Romance("Orgulho e Preconceito", 2005),
  ];
  
  function recomendarFilmes(categoria: string) {
    const filmesRecomendados = listaDeFilmes.filter((filme) => filme.categoria === categoria);
  
    if (filmesRecomendados.length === 0) {
      console.log(`Não há filmes disponíveis na categoria ${categoria}.`);
    } else {
      console.log(`Filmes recomendados na categoria ${categoria}:`);
      filmesRecomendados.forEach((filme) => {
        console.log(`${filme.titulo} (${filme.ano})`);
      });
    }
  }

  recomendarFilmes("Ação");
  recomendarFilmes("Romance");
  