function validacaoEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
    
    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
    document.getElementById("msgemail").innerHTML="<font color='green'><strong>E-mail válido! </strong></font>";
    alert("E-mail válido!");
    }
    else{        
        document.getElementById("msgemail").innerHTML="<font color='red'><strong>E-mail inválido! </strong></font>";
        alert(`O endereço de email deve possuir as seguintes opções em seu campo:
        - Não possuir espaços;
        - Possuir o @;
        - Possuir algum caracter após o @;
        - Possuir algum caracter antes do @;
        - Possuir pelo menos um ponto após o caracter depois do @;
        - Possuir algum caracter após o ponto.`);
    }
}