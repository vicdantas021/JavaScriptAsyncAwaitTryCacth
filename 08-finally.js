function consultaServidor(disponivel){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            if(disponivel){
                resolve("Dados recebidos")
            }else{
                reject(new Error("Servidor indisponível"))
            }
        }, 1000)
    })
}
async function executar(){
    console.log("Carregando...")
    try {
        const resultado = await consultaServidor(false);
        console.log(resultado)
    } catch(error){
        console.log("Erro:", error.message)
    } finally{
        console.log("Carregamento finalizado")
    }
}

executar()