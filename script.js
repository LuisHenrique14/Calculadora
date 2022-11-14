function zero(){
    var p1 = document.getElementById('num1');
    var p2 = document.getElementById('num2');
    var h4 = document.getElementsByTagName("h4");
    if (h4[0].innerText == ""){
        p1.innerText = (p1.innerText) + 0; 
    }else{
        p2.innerText = (p2.innerText) + 0;
    }
}

function um(){
    var p1 = document.getElementById('num1');
    var p2 = document.getElementById('num2');
    var h4 = document.getElementsByTagName("h4");
    if (h4[0].innerText == ""){
        p1.innerText = (p1.innerText) + 1; 
    }else{
        p2.innerText = (p2.innerText) + 1;
    }
}
function dois(){
    var p1 = document.getElementById('num1');
    var p2 = document.getElementById('num2');
    var h4 = document.getElementsByTagName("h4");
    if (h4[0].innerText == ""){
        p1.innerText = (p1.innerText) + 2; 
    }else{
        p2.innerText = (p2.innerText) + 2;
    }
}
function tres(){
    var p1 = document.getElementById('num1');
    var p2 = document.getElementById('num2');
    var h4 = document.getElementsByTagName("h4");
    if (h4[0].innerText == ""){
        p1.innerText = (p1.innerText) + 3; 
    }else{
        p2.innerText = (p2.innerText) + 3;
    }
}
function quatro(){
    var p1 = document.getElementById('num1');
    var p2 = document.getElementById('num2');
    var h4 = document.getElementsByTagName("h4");
    if (h4[0].innerText == ""){
        p1.innerText = (p1.innerText) + 4; 
    }else{
        p2.innerText = (p2.innerText) + 4;
    }
}
function cinco(){
    var p1 = document.getElementById('num1');
    var p2 = document.getElementById('num2');
    var h4 = document.getElementsByTagName("h4");
    if (h4[0].innerText == ""){
        p1.innerText = (p1.innerText) + 5; 
    }else{
        p2.innerText = (p2.innerText) + 5;
    }
}
function seis(){
    var p1 = document.getElementById('num1');
    var p2 = document.getElementById('num2');
    var h4 = document.getElementsByTagName("h4");
    if (h4[0].innerText == ""){
        p1.innerText = (p1.innerText) + 6; 
    }else{
        p2.innerText = (p2.innerText) + 6;
    }
}
function sete(){
    var p1 = document.getElementById('num1');
    var p2 = document.getElementById('num2');
    var h4 = document.getElementsByTagName("h4");
    if (h4[0].innerText == ""){
        p1.innerText = (p1.innerText) + 7; 
    }else{
        p2.innerText = (p2.innerText) + 7;
    }
}
function oito(){
    var p1 = document.getElementById('num1');
    var p2 = document.getElementById('num2');
    var h4 = document.getElementsByTagName("h4");
    if (h4[0].innerText == ""){
        p1.innerText = (p1.innerText) + 8; 
    }else{
        p2.innerText = (p2.innerText) + 8;
    }
}
function nove(){
    var p1 = document.getElementById('num1');
    var p2 = document.getElementById('num2') 
    var h4 = document.getElementsByTagName("h4");
    if (h4[0].innerText == ""){
        p1.innerText = (p1.innerText) + 9; 
    }else{
        p2.innerText = (p2.innerText) + 9
    }

}
function zerar(){
    var p1 = document.getElementById('num1');
    var p2 = document.getElementById('num2');
    var p3 = document.getElementById('resultado');
    p1.innerText = parseInt(p1.innerText) - (p1.innerText);
    p2.innerText = parseInt(p2.innerText) - (p2.innerText);
    p3.innerText = parseInt(p3.innerText) - (p3.innerText);
}

function mudar_texto_mais(){
    var h4 = document.getElementsByTagName("h4");
    if (h4[0].innerText == ""){
        h4[0].innerText = "+";
    }else{
        h4[0].innerText = "";
    }    
}

function mudar_texto_menos(){
    var h4 = document.getElementsByTagName("h4");
    if (h4[0].innerText == ""){
        h4[0].innerText = "-";
    }else{
        h4[0].innerText = "";
    }    
}

function mudar_texto_vezes(){
    var h4 = document.getElementsByTagName("h4");
    if (h4[0].innerText == ""){
        h4[0].innerText = "x";
    }else{
        h4[0].innerText = "";
    }    
}

function mudar_texto_divisao(){
    var h4 = document.getElementsByTagName("h4");
    if (h4[0].innerText == ""){
        h4[0].innerText = "/";
    }else{
        h4[0].innerText = "";
    }    
}

function resultado(){
    var p1 = document.getElementById('num1');
    var p2 = document.getElementById('num2');
    var p3 = document.getElementById('resultado');
    var h4 = document.getElementsByTagName("h4");
    //p3.innerText = 88888;
    if(h4[0].innerText == "+"){
        p3.innerText = parseInt(p1.innerText) + parseInt(p2.innerText);
    }else if(h4[0].innerText == "-"){
        p3.innerText = parseInt(p1.innerText) - parseInt(p2.innerText);
    }else if(h4[0].innerText == "x"){
        p3.innerText = parseInt(p1.innerText) * parseInt(p2.innerText);
    }else{
        p3.innerText = parseInt(p1.innerText) / parseInt(p2.innerText);
    }
}

document.getElementById("myDiv").style.backgroundColor = "yellow";
document.getElementById("numeros").style.backgroundColor = "lightgray";
document.getElementById("calc_body").style.width = "450px";
document.getElementById("calc_body").style.backgroundColor = "gray";
document.getElementById("calc_body").style.padding = "150px"
document.getElementById("myDIV").style.backgroundSize = "660px 120px";
