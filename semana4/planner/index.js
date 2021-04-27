function novaTarefa() {
    
    const selecao = document.getElementById("dias-semana").value
    
    let tarefa = document.getElementById("tarefa").value
    
    document.getElementById(selecao).innerHTML += "<p>- " + tarefa + "</p>"
    
    document.getElementById("tarefa").value = ""
    
    document.getElementById("dias-semana").value = "domingo"
    if (meuInput.value !== ""){
       
        meuInput.value = ""
    }
}