
import ServicoDePagamento from '../src/servicoDePagamento.js';
import assert from 'node:assert';

describe('Servico De Pagamento', () => {

    describe('Realizar Pagamento', () => {

        it('deve salvar um pagamento válido', () => {

            const servicoDePagamento = new ServicoDePagamento();

            servicoDePagamento.pagar('8472-9123-5541', 'Netflix', 189.90);

            const pagamento = servicoDePagamento.consultarUltimoPagamento();

            assert.equal(pagamento.codigoBarras, '8472-9123-5541');
            assert.equal(pagamento.empresa, 'Netflix');
            assert.equal(pagamento.valor, 189.90);

        });

        it('deve lançar erro ao enviar propriedade vazia', () => {

            const servicoDePagamento = new ServicoDePagamento();

            assert.throws(
                () => {
                    servicoDePagamento.pagar('7410-3321-9987', '', 220.45);
                },
                {
                    message: 'Todos os dados devem ser enviados'
                }
            );

        });

        it('não deve salvar pagamento inválido', () => {

            const servicoDePagamento = new ServicoDePagamento();

            assert.throws(
                () => {
                    servicoDePagamento.pagar('', 'Spotify', 75.30);
                },
                {
                    message: 'Todos os dados devem ser enviados'
                }
            );

            const pagamento = servicoDePagamento.consultarUltimoPagamento();

            assert.equal(pagamento, undefined);

        });

        it('deve definir categoria como cara quando valor for maior que 100', () => {

            const servicoDePagamento = new ServicoDePagamento();

            servicoDePagamento.pagar('5532-8874-1145', 'OpenAI Plus', 145.99);

            const pagamento = servicoDePagamento.consultarUltimoPagamento();

            assert.equal(pagamento.categoria, 'cara');

        });

        it('deve definir categoria como padrão quando valor for menor ou igual a 100', () => {

            const servicoDePagamento = new ServicoDePagamento();

            servicoDePagamento.pagar('9966-2244-7788', 'Claude AI', 59.90);

            const pagamento = servicoDePagamento.consultarUltimoPagamento();

            assert.equal(pagamento.categoria, 'padrão');

        });

    });

    describe('Consultar Ultimo Pagamento', () => {

        it('deve retornar apenas o último pagamento', () => {

            const servicoDePagamento = new ServicoDePagamento();

            servicoDePagamento.pagar('1001-2002-3003', 'ChatGPT Plus', 35.50);
            servicoDePagamento.pagar('4004-5005-6006', 'Claude AI', 82.75);
            servicoDePagamento.pagar('7007-8008-9009', 'Gemini Advanced', 249.90);

            const pagamento = servicoDePagamento.consultarUltimoPagamento();

            assert.equal(pagamento.codigoBarras, '7007-8008-9009');
            assert.equal(pagamento.empresa, 'Gemini Advanced');
            assert.equal(pagamento.valor, 249.90);
            assert.equal(pagamento.categoria, 'cara');

        });

        it('deve retornar undefined quando não existir pagamento', () => {

            const servicoDePagamento = new ServicoDePagamento();

            const pagamento = servicoDePagamento.consultarUltimoPagamento();

            assert.equal(pagamento, undefined);

        });

    });

});