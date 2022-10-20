/*
    1 зробити нажимання кнопки
        -поміняти колір квадрату
            -якщо квадрат червоний то зробити зеленим
            -інакше зробити червоним

    2 Змінювати розмір квадрату.
        Розмір зроби: ширина — 100px и висота — 100px.
        Додавати квадрату відступ зліва. Відступ — 100px
        kvadrat.style.width = "100px"
        kvadrat.style.height = "100px"

    3 colir
        Додавати відступ зверху квадрату. Відступ — 100px. 
        Змінювати колір фігури. Зроби так, щоб при кожному натисканні на кнопку 
        змінювався колір фігури. То синій — то жовтий.

    4 figura
        Якщо колір фігури синій — то вона трансформується в квадрат. 
        Якщо колір фігури жовтий — то вона трансформується в круг.
        Підказка, використовуй властивість borderRadius.
*/
knopka = document.querySelector("#knopka")
knopka.innerText = "інший текст"
// кнопка стає червоною
knopka.style.background = "red"
kvadrat = document.querySelector("#kvadrat")
// квадрат стає жовтим
kvadrat.style.background = "yellow"
//kvadrat.style.borderRadius = "90px"

//kvadrat.style.marginLeft = "100px"

console.dir(kvadrat)

knopka.onclick = function () {
    
    if (kvadrat.style.background == "" || kvadrat.style.background == "red") {
          kvadrat.style.background = "green";
        } else {
          kvadrat.style.background = "red";
        } 
}

rozmir = document.querySelector("#rozmir")
rozmir.style.background = "green"
rozmir.onclick = function () {
    
    if (kvadrat.style.width == "400px") {
          kvadrat.style.width = "100px"
          kvadrat.style.height = "100px"
          kvadrat.style.marginLeft = "100px"
        } else {
          kvadrat.style.width = "400px"
          kvadrat.style.height = "400px"
        } 
}

colir = document.querySelector("#colir")
colir.style.background = "yellow"
colir.onclick = function () {
    
    if (kvadrat.style.background == "" || kvadrat.style.background == "yellow") {
          kvadrat.style.background = "blue"
          kvadrat.style.marginTop = "100px";
        } else {
          kvadrat.style.background = "yellow";
        } 
}

colir.onmouseover = function () {
  console.log( "Движение это жизнь" );
}

figura = document.querySelector("#figura")
figura.style.background = "blue"
figura.onclick = function () {
    
    if (kvadrat.style.background == "" || kvadrat.style.background == "yellow") {
          kvadrat.style.borderRadius = "190px";
  }
    if (kvadrat.style.background == "" || kvadrat.style.background == "blue") {
          kvadrat.style.borderRadius = "10px";
  }
  
}