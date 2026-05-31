export default class ServicoDePagamento {

  #pagamentos = [];

  pagar(codigoBarras, empresa, valor) {

    if (!codigoBarras || !empresa || !valor) {
      throw new Error('Todos os dados devem ser enviados');
    }

    let categoria = 'padrão';

    if (valor > 100) {
      categoria = 'cara';
    }

    this.#pagamentos.push({
      codigoBarras: codigoBarras,
      empresa: empresa,
      valor: valor,
      categoria: categoria
    });

  }

  consultarUltimoPagamento() {
    return this.#pagamentos.at(-1);
  }

}