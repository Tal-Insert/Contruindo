import promptSync from "prompt-sync";

export class Estudante {
    private nome: string;
    private nota1: number;
    private nota2: number;

    constructor(nome: string, nota1: number, nota2: number) {
        if (nome.trim() === "") {
            throw new Error("O nome do estudante não pode ficar vazio.");
        }

        if (!this.notaValida(nota1) || !this.notaValida(nota2)) {
            throw new Error("As notas devem estar entre 0 e 10.");
        }

        this.nome = nome;
        this.nota1 = nota1;
        this.nota2 = nota2;
    }

    private notaValida(nota: number): boolean {
        return Number.isFinite(nota) && nota >= 0 && nota <= 10;
    }

    public calcularMedia(): number {
        return (this.nota1 + this.nota2) / 2;
    }

    public exibirInformacoes(): void {
        console.log(`Nome: ${this.nome}`);
        console.log(`Nota 1: ${this.nota1}`);
        console.log(`Nota 2: ${this.nota2}`);
        console.log(`Média: ${this.calcularMedia().toFixed(2)}`);
    }
}

function executar(): void {
    const ler = promptSync();
    const nome = ler("Nome do estudante: ");
    const nota1 = Number(ler("Nota 1: "));
    const nota2 = Number(ler("Nota 2: "));

    try {
        const estudante = new Estudante(nome, nota1, nota2);

        console.log("\n--- ESTUDANTE ---");
        estudante.exibirInformacoes();
    } catch (erro) {
        console.log(`Estudante inválido: ${(erro as Error).message}`);
    }
}

executar();