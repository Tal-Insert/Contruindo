import promptSync from "prompt-sync";

export class ContaBancaria {
    private saldo: number;

    private titular: string;

    constructor(titular: string, saldoInicial: number = 0) {
        this.titular = titular;
        this.saldo = saldoInicial;
    }

    public getTitular(): string {
        return this.titular;
    }

    public getSaldo(): number {
        return this.saldo;
    }

    public sacar(valor: number): boolean {
        if (valor <= 0 || valor > this.saldo) {
            return false;
        }

        this.saldo -= valor;
        return true;
    }

    public depositar(valor: number): boolean {
        if (valor <= 0) {
            return false;
        }

        this.saldo += valor;
        return true;
    }
}

function executar(): void {
    const ler = promptSync();
    const nome = ler("Nome do titular: ");
    const conta = new ContaBancaria(nome, 1000);

    console.log(`\nTitular: ${conta.getTitular()}`);
    console.log(`Saldo inicial: R$ ${conta.getSaldo().toFixed(2)}`);

    const valorSaque = Number(ler("Valor do saque: R$ "));
    if (!conta.sacar(valorSaque)) {
        console.log("Saque não realizado.");
    }

    const valorDeposito = Number(ler("Valor do depósito: R$ "));
    if (!conta.depositar(valorDeposito)) {
        console.log("Depósito não realizado.");
    }

    console.log(`Saldo final: R$ ${conta.getSaldo().toFixed(2)}`);
}

executar();