let prompt = require("prompt-sync")();
let alunos = [];
let cursos = [];
let opcao;

function cadastrarAluno() {
  let nomeAluno = prompt("Digite o nome do aluno:");
  if (nomeAluno && nomeAluno.trim() !== "") {
    alunos.push({ nome: nomeAluno.trim(), curso: null });

    console.log("Aluno cadastrado com sucesso:");
  } else {
    console.log("Nome inválido.");
  }
}

function ExcluirAluno() {
  let nomeExcluirAluno = prompt("Digite o nome do aluno a ser excluído: ");
  let indexAluno = -1;
  for (let i = 0; i < alunos.length; i++) {
    if (alunos[i].nome === nomeExcluirAluno) {
      indexAluno = i;
      break;
    }
  }
  if (indexAluno !== -1) {
    alunos.splice(indexAluno, 1);
    console.log("Aluno excluído com sucesso.");
  } else {
    console.log("Aluno não encontrado.");
  }
}

function CadastrarCurso() {
  let nomeCurso = prompt("Digite o nome do curso:");
  if (nomeCurso && nomeCurso.trim() !== "") {
    cursos.push(nomeCurso.trim());
    console.log("Curso cadastrado com sucesso!");
  } else {
    console.log("Nome inválido.");
  }
}

function ExcluirCurso() {
  let nomeCursoExcluir = prompt("Digite o nome do curso a ser excluído: ");
  let indexCurso = cursos.indexOf(nomeCursoExcluir);
  if (indexCurso !== -1) {
    cursos.splice(indexCurso, 1);
    for (let i = 0; i < alunos.length; i++) {
      if (alunos[i].curso === nomeCursoExcluir) {
        alunos[i].curso = null; // Remove a matrícula do aluno no curso excluído
      }
    }
    console.log("Curso excluído com sucesso.");
  } else {
    console.log("Curso não encontrado.");
  }
}

function visualizarinformacoes() {
  console.log("\nAlunos cadastrados:");
  if (alunos.length > 0) {
    for (let i = 0; i < alunos.length; i++) {
      let curso;
      if (alunos[i].curso) {
        curso = alunos[i].curso;
      } else {
        curso = "Não matriculado";
      }
      console.log("-" + alunos[i].nome + " - Curso: " + curso);
    }
  } else {
    console.log("Nenhum aluno cadastrado.");
  }
  console.log("\nCursos cadastrados:");
  if (cursos.length > 0) {
    for (let i = 0; i < cursos.length; i++) {
      console.log("- " + cursos[i]);
    }
  } else {
    console.log("Nenhum curso cadastrado.");
  }
}

function matricularAlunoemCurso() {
  if (alunos.length === 0 || cursos.length === 0) {
    console.log(
      "É necessário ter alunos e cursos cadastrados antes de matricular."
    );
    return;
  }

  let nomeAluno = prompt("Digite o nome do aluno a ser matriculado:");
  let aluno = alunos.find((a) => a.nome === nomeAluno);

  if (!aluno) {
    console.log("Aluno não encontrado.");
    return;
  }

  console.log("Cursos disponíveis:");
  cursos.forEach((curso, index) => {
    console.log(`${index + 1}. ${curso}`);
  });

  let cursoIndex = parseInt(prompt("Digite o número do curso:"));
  if (cursoIndex > 0 && cursoIndex <= cursos.length) {
    aluno.curso = cursos[cursoIndex - 1];
    console.log(`Aluno "${aluno.nome}" matriculado no curso "${aluno.curso}".`);
  } else {
    console.log("Número do curso inválido.");
  }
}

do {
  opcao = prompt(
    "1 - Cadastrar aluno\n" +
      "2 - Excluir aluno\n" +
      "3 - Cadastrar curso\n" +
      "4 - Excluir curso\n" +
      "5 - Visualizar informações\n" +
      "6 - Matricular aluno em curso\n" +
      "7 - Sair\n\n" +
      "Escolha uma opção:\n"
  );
  // Verifica se a opção é válida

  switch (opcao) {
    case "1":
      cadastrarAluno();

      break;
    case "2":
      ExcluirAluno();
      break;

    case "3":
      CadastrarCurso();
      break;

    case "4":
      ExcluirCurso();
      break;

    case "5":
      visualizarinformacoes();

      break;
    case "6":
      matricularAlunoemCurso();
      break;

      break;

    case "7":
      console.log("Saindo do sistema...");
      break;

    default:
      console.log("Opção inválida. Tente novamente.");
      break;
  }
} while (opcao !== "7");
