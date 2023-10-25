var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Filme = /** @class */ (function () {
    function Filme(titulo, ano) {
        this.titulo = titulo;
        this.ano = ano;
    }
    return Filme;
}());
var Acao = /** @class */ (function (_super) {
    __extends(Acao, _super);
    function Acao(titulo, ano) {
        var _this = _super.call(this, titulo, ano) || this;
        _this.categoria = "Ação";
        return _this;
    }
    return Acao;
}(Filme));
var Romance = /** @class */ (function (_super) {
    __extends(Romance, _super);
    function Romance(titulo, ano) {
        var _this = _super.call(this, titulo, ano) || this;
        _this.categoria = "Romance";
        return _this;
    }
    return Romance;
}(Filme));
// Crie uma lista de filmes com diferentes categorias
var listaDeFilmes = [
    new Acao("Missão Impossível", 2000),
    new Acao("Velozes e Furiosos", 2010),
    new Romance("Titanic", 1997),
    new Romance("Diário de uma Paixão", 2004),
    new Acao("Duro de Matar", 1988),
    new Romance("Orgulho e Preconceito", 2005),
];
function recomendarFilmes(categoria) {
    var filmesRecomendados = listaDeFilmes.filter(function (filme) { return filme.categoria === categoria; });
    if (filmesRecomendados.length === 0) {
        console.log("N\u00E3o h\u00E1 filmes dispon\u00EDveis na categoria ".concat(categoria, "."));
    }
    else {
        console.log("Filmes recomendados na categoria ".concat(categoria, ":"));
        filmesRecomendados.forEach(function (filme) {
            console.log("".concat(filme.titulo, " (").concat(filme.ano, ")"));
        });
    }
}
// Exemplo de uso:
recomendarFilmes("Ação");
recomendarFilmes("Romance");
