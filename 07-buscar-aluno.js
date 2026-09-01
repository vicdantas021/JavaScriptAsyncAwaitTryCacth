const ALUNOS = [
    {id: 1, nome: "Evellyn", curso: "JavaScript"},
    {id: 2, nome: "Yuri", curso: "Node.js"},
    {id: 3, nome: "Fernanda", curso: "Banco de dados"}
];

function buscarAluno(id){
    return new Promise((resolve, reject)=>{
        console.log("Consultando o banco de dados...");

        setTimeout(()=>{
            const aluno = ALUNOS.find((item) => item.id === id)
            if(aluno){
                resolve(aluno)
            }else{
                reject(new Error("Aluno não encontrado"))
            }
        }, 2000)
    })
}
async function  mostrarAluno(){
    try{
    const aluno = await buscarAluno(5)
console.log("Aluno encontrado");
console.log("ID", aluno.id)
console.log("Nome:", aluno.nome);
console.log("Curso", aluno.curso)
    }catch(error){
    console.log("Erro na consulta:", error.message)
    }
}

mostrarAluno()