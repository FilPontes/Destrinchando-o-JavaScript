/*Projetos referentes ao curso "Funções" que ministrei pela Digital Innovation One.
Atividade 1: Alunos Aprovados

    Crie uma função que recebe o array alunos e um número que irá representar a média final;
    Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
    Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.

Atividade 2: This

Dada a função calculaIdade, utilize os métodos call e apply para modificar o valor de this. Crie seus próprios objetos para esta atividade!

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}*/

//Atv 1 
const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C',
	},
    {
		nome: 'Miguel',
		nota: 3,
		turma: '2C',
	}
];

function alunosAprovados(arr, media) {
    let aprovados = [];

    for (let i = 0; i < arr.length; i++) {
        
        const{nota, nome} = arr[i];
        
        if(nota >= media) {
            aprovados.push(nome);
        }
    }
 
    
    return aprovados;
}

console.log(alunosAprovados(alunos,5));

//Terminal -> Node funcoes_script.js

//Atv 2
function calcularIdade(anos) {
    return 'Daqui a '+anos+' anos, '+this.nome+' tera '+[this.idade + anos]+' anos de idade'
};

const pessoa1 = {
    nome: 'Maria',
    idade: 30
};

const pessoa2 = {
    nome: 'Carla',
    idade: 26
};

const animal = {
    nome: 'Fiona',
    idade: 5,
    raca: 'Pug',
};

console.log(calcularIdade.apply(pessoa1, [5]));