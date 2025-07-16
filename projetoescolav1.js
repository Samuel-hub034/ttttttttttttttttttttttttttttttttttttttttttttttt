let prompt = require ('prompt-sync')();
let alunos = [];
let cursos = [];

let opcao;



do {
    opcao = prompt("1 - Cadastrar aluno\n" +
               "2 - Excluir aluno\n" +
               '3 - Cadastrar curso\n' +
                '4 - Excluir curso\n' +
             '5 - Visualizar informações\n' +
                '6 - Sair\n\n' +
               'Escolha uma opção:\n');
    // Verifica se a opção é válida

    switch(opcao) {
        case '1':
            let nomeAluno = prompt('Digite o nome do aluno: ');
            if (nomeAluno !== null && nomeAluno.trim() !== '') {
                alunos.push(nomeAluno.trim());

            console.log('Aluno cadastrado com sucesso: ' + nomeAluno);
            } else {
                console.log('Nome inválido. ');
            }
             



             
        break;
        case '2':
            let nomeExcluir = prompt('Digite o nome do aluno a ser excluído: ');
            if (nomeExcluir !== null && nomeExcluir.trim() !== '') {
                let index = alunos.indexOf(nomeExcluir.trim());
                if (index !== -1) {
                    alunos.splice(index, 1);
                    console.log('Aluno excluído com sucesso.');
                } else {
                    console.log('Aluno não encontrado.');
                }
            }
        break;

        break;
        case '3':
            let nomeCurso = prompt('Digite o nome do curso: ');
            if (nomeCurso !== null && nomeCurso.trim() !== '') {
                cursos.push(nomeCurso.trim());
                console.log('Curso cadastrado com sucesso: ' + nomeCurso);
            } else {
                console.log('Curso inválido. ');
            }
            break;

        case '4':
            let nomeCursoExcluir = prompt('Digite o nome do curso a ser excluído: ');
            if (nomeCursoExcluir !== null && nomeCursoExcluir.trim() !== '') {
                let indexCurso = cursos.indexOf(nomeCursoExcluir.trim());
                if (indexCurso !== -1) {
                    cursos.splice(indexCurso, 1);
                    console.log('Curso excluído com sucesso.');
                } else {
                    console.log('Curso não encontrado.');
                }
            }
            break;

        case '5':
           // Visualizar informações
           let info = "\nAlunos cadastrados:\n";
            if (alunos.length > 0) {
                for (let i = 0; i < alunos.length; i++) {
                    info += (i + 1) + '. ' + alunos[i] + '\n';
                }
            } else {
                info += 'Nenhum aluno cadastrado.\n';
            }
            info += "\nCursos cadastrados:\n";
            if (cursos.length > 0) {
                for (let i = 0; i < cursos.length; i++) {
                    info += "- " + cursos[i] + '\n';
                }
            } else {
                info += 'Nenhum curso cadastrado.\n';
            }
            
console.log(info);
        break;

        case '6':
            console.log('Saindo do sistema...');
            break;

        default:
            console.log('Opção inválida. Tente novamente.');
            break;
    }
} while(opcao != '6');
// Fim do código
