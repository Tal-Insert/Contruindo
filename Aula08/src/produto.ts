import promptSync from "prompt-sync";

export class Produto {
    private nome: string;
    private preco: number;

    constructor(nome: string, preco: number) {
        if (nome.trim() === "") {
            throw new Error("O nome não pode ficar vazio.");
        }

        if (!Number.isFinite(preco) || preco < 0) {
            throw new Error("O preço deve ser maior ou igual a zero.");
        }

        this.nome = nome;
        this.preco = preco;
    }

    public exibirInformacoes(): void {
        console.log(`Nome: ${this.nome}`);
        console.log(`Preço: R$ ${this.preco.toFixed(2)}`);
    }
}

function executar(): void {
    const ler = promptSync();
    const nome = ler("Nome do produto: ");
    const preco = Number(ler("Preço do produto: R$ "));

    try {
        const produto = new Produto(nome, preco);

        console.log("\n--- PRODUTO ---");
        produto.exibirInformacoes();
    } catch (erro) {
        console.log(`Produto inválido: ${(erro as Error).message}`);
    }
}

executar();