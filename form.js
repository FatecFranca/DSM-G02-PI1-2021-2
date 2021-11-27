

function pegaDados(){
    var site = 'https://wa.me/5516992380482?text=Olá%20Marcos.%20Sou%20o%20'
    var validar = 1
    var corrigir = "Por favor, preencha o(s) campo(s):\n"
    var nome = document.querySelector("#nome")
    var sobrenome = document.querySelector("#sobrenome")
    var data = document.querySelector("#data")
    var hora = document.querySelector("#hora")
    var svc = document.getElementById("servico");
    var svc2 = svc.options[svc.selectedIndex].text
    
    if(nome.value.length == 0 ){
       validar = 0
       corrigir += "Nome\n"
    }
    if(sobrenome.value.length == 0){
        validar = 0
        corrigir += "Sobrenome\n"
        
    }
    if(data.value.length == 0){
        validar = 0
        corrigir += "Data\n"
        
    }
    if(hora.value.length == 0){
        validar = 0
        corrigir += "Hora\n"
        
    }
    if(svc2.length == 0){
        validar = 0
        corrigir += "Escolha o serviço\n"
        
    }
    
    corrigir += "Para continuar"
    if(!validar){
        alert(corrigir)
    }
    else{

        site += nome.value + '%20'
        site += sobrenome.value
        site += "%20e%20gostaria%20de%20solicitar%20seus%20serviços%20de%20"
        site += svc2
        site += "%20preferencialmente%20na%20data%20de%20"
        site += data.value
        site += "%20às%20"
        site += hora.value
        site += ".%20Obrigado!"
        window.open(site);

    }
    
}