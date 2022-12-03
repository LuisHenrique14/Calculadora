function zero(){
    let p1 = document.getElementById('num1');
    let p2 = document.getElementById('num2');
    let h4 = document.getElementsByTagName("h4");
    if (h4[0].innerText == ""){
        p1.innerText = (p1.innerText) + 0; 
    }else{
        p2.innerText = (p2.innerText) + 0;
    }
}

function um(){
    let p1 = document.getElementById('num1');
    let p2 = document.getElementById('num2');
    let h4 = document.getElementsByTagName("h4");
    if (h4[0].innerText == ""){
        p1.innerText = (p1.innerText) + 1; 
    }else{
        p2.innerText = (p2.innerText) + 1;
    }
}
function dois(){
    let p1 = document.getElementById('num1');
    let p2 = document.getElementById('num2');
    let h4 = document.getElementsByTagName("h4");
    if (h4[0].innerText == ""){
        p1.innerText = (p1.innerText) + 2; 
    }else{
        p2.innerText = (p2.innerText) + 2;
    }
}
function tres(){
    let p1 = document.getElementById('num1');
    let p2 = document.getElementById('num2');
    let h4 = document.getElementsByTagName("h4");
    if (h4[0].innerText == ""){
        p1.innerText = (p1.innerText) + 3; 
    }else{
        p2.innerText = (p2.innerText) + 3;
    }
}
function quatro(){
    let p1 = document.getElementById('num1');
    let p2 = document.getElementById('num2');
    let h4 = document.getElementsByTagName("h4");
    if (h4[0].innerText == ""){
        p1.innerText = (p1.innerText) + 4; 
    }else{
        p2.innerText = (p2.innerText) + 4;
    }
}
function cinco(){
    let p1 = document.getElementById('num1');
    let p2 = document.getElementById('num2');
    let h4 = document.getElementsByTagName("h4");
    if (h4[0].innerText == ""){
        p1.innerText = (p1.innerText) + 5; 
    }else{
        p2.innerText = (p2.innerText) + 5;
    }
}
function seis(){
    let p1 = document.getElementById('num1');
    let p2 = document.getElementById('num2');
    let h4 = document.getElementsByTagName("h4");
    if (h4[0].innerText == ""){
        p1.innerText = (p1.innerText) + 6; 
    }else{
        p2.innerText = (p2.innerText) + 6;
    }
}
function sete(){
    let p1 = document.getElementById('num1');
    let p2 = document.getElementById('num2');
    let h4 = document.getElementsByTagName("h4");
    if (h4[0].innerText == ""){
        p1.innerText = (p1.innerText) + 7; 
    }else{
        p2.innerText = (p2.innerText) + 7;
    }
}
function oito(){
    let p1 = document.getElementById('num1');
    let p2 = document.getElementById('num2');
    let h4 = document.getElementsByTagName("h4");
    if (h4[0].innerText == ""){
        p1.innerText = (p1.innerText) + 8; 
    }else{
        p2.innerText = (p2.innerText) + 8;
    }
}
function nove(){
    let p1 = document.getElementById('num1');
    let p2 = document.getElementById('num2') 
    let h4 = document.getElementsByTagName("h4");
    if (h4[0].innerText == ""){
        p1.innerText = (p1.innerText) + 9; 
    }else{
        p2.innerText = (p2.innerText) + 9
    }

}
function zerar(){
    let p1 = document.getElementById('num1');
    let p2 = document.getElementById('num2');
    let p3 = document.getElementById('resultado');
    p1.innerText = parseInt(p1.innerText) - (p1.innerText);
    p2.innerText = parseInt(p2.innerText) - (p2.innerText);
    p3.innerText = parseInt(p3.innerText) - (p3.innerText);
}

function mudar_texto_mais(){
    let h4 = document.getElementsByTagName("h4");
    if (h4[0].innerText == ""){
        h4[0].innerText = "+";
    }else{
        h4[0].innerText = "";
    }    
}

function mudar_texto_menos(){
    let h4 = document.getElementsByTagName("h4");
    if (h4[0].innerText == ""){
        h4[0].innerText = "-";
    }else{
        h4[0].innerText = "";
    }    
}

function mudar_texto_vezes(){
    let h4 = document.getElementsByTagName("h4");
    if (h4[0].innerText == ""){
        h4[0].innerText = "x";
    }else{
        h4[0].innerText = "";
    }    
}

function mudar_texto_divisao(){
    let h4 = document.getElementsByTagName("h4");
    if (h4[0].innerText == ""){
        h4[0].innerText = "/";
    }else{
        h4[0].innerText = "";
    }    
}

function mudar_texto_x_quadrado(){
    let h4 = document.getElementsByTagName("h4");
    if (h4[0].innerText == ""){
        h4[0].innerText = "x²";
    }else{
        h4[0].innerText = "";
    }    
}

function mudar_texto_raiz_quadrada(){
    let h4 = document.getElementsByTagName("h4");
    if (h4[0].innerText == ""){
        h4[0].innerText = "√";
    }else{
        h4[0].innerText = "";
    }    
}

function resultado(){
    let p1 = document.getElementById('num1');
    let p2 = document.getElementById('num2');
    let p3 = document.getElementById('resultado');
    let h4 = document.getElementsByTagName("h4");
    if(h4[0].innerText == "+"){
        p3.innerText = parseInt(p1.innerText) + parseInt(p2.innerText);
    }else if(h4[0].innerText == "-"){
        p3.innerText = parseInt(p1.innerText) - parseInt(p2.innerText);
    }else if(h4[0].innerText == "x"){
        p3.innerText = parseInt(p1.innerText) * parseInt(p2.innerText);
    }else if(h4[0].innerText == "x²"){
        p3.innerText = parseInt(p1.innerText)**2
    }else if(h4[0].innerText == "√"){
        p3.innerText = (Math.sqrt(p1.innerText))
    }else{
        p3.innerText = parseInt(p1.innerText) / parseInt(p2.innerText);
    }
}
//bootstrap
document.getElementById("myDiv").style.backgroundColor = "orange";
document.getElementById("numeros").style.backgroundColor = "lightgray";
document.getElementById("calc_body").style.width = "450px";
document.getElementById("calc_body").style.backgroundColor = "gray";
document.getElementById("calc_body").style.padding = "150px"
document.getElementById("myDIV").style.backgroundSize = "660px 120px";
