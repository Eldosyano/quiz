let quiz = {
    data: [
    {
    q: " Какое из перечисленных устройств не относится к периферийным устройствам компьютера?",
    o: [
    "Процессор",
    "Клавиатура",
    " Мышь",
    " Принтер",
    ],
    a: 0
    },
    {
    q: "Что такое HTTP?",
    o: [
    "Метод передачи данных по сети",
    "Протокол прикладного уровня в сетевой модели OSI",
    "Язык программирования",
    "Тип базы данных",
    ],
    a: 1
    },
    {
    q: "Что такое RAM?",
    o: [
    "Жесткий диск",
    " Процессор",
    " Оперативная память",
    " Резервное копирование",
    ],
    a: 2
    },
    {
    q: " Что означает термин «бэкап»?",
    o: [
    "Архивирование данных",
    "Восстановление данных после сбоя",
    ". Копирование данных на внешний носитель",
    " Шифрование данных",
    ],
    a: 1
    },
    {
    q: ". Каково значение функции if в языке программирования Python?",
    o: [
    "Цикл",
    "Условный оператор",
    " Массив",
    "Функция вывода текста на экран",
    ],
    a: 1
    }
    ],

    
hWrap: null,
hQn: null,
hAns: null,

now: 0, 
score: 0,


init: () => {
    
    quiz.hWrap = document.getElementById("quizWrap");
    
    quiz.hQn = document.createElement("div");
    quiz.hQn.id = "quizQn";
    quiz.hWrap.appendChild(quiz.hQn);
    
    quiz.hAns = document.createElement("div");
    quiz.hAns.id = "quizAns";
    quiz.hWrap.appendChild(quiz.hAns);
   
    quiz.draw();
    },
   

    
draw: () => {

quiz.hQn.innerHTML = quiz.data[quiz.now].q;

quiz.hAns.innerHTML = "";
for (let i in quiz.data[quiz.now].o) {
let radio = document.createElement("input");
radio.type = "radio";
radio.name = "quiz";
radio.id = "quizo" + i;
quiz.hAns.appendChild(radio);
let label = document.createElement("label");
label.innerHTML = quiz.data[quiz.now].o[i];
label.setAttribute("for", "quizo" + i);
label.dataset.idx = i;
label.addEventListener("click", () => {
quiz.select(label);
});
quiz.hAns.appendChild(label);
}
},


select: (option) => {
    
    let all = quiz.hAns.getElementsByTagName("label");
    for (let label of all) {
    label.removeEventListener("click", quiz.select);
    }
    
    let correct = option.dataset.idx == quiz.data[quiz.now].a;
    if (correct) {
    quiz.score++;
    option.classList.add("correct");
    } else {
    option.classList.add("wrong");
    }
    
    quiz.now++;
    setTimeout(() => {
    if (quiz.now < quiz.data.length) { quiz.draw(); }
    else {
    quiz.hQn.innerHTML = `Вы ответили на ${quiz.score} из ${quiz.data.length} правильно.`;
    quiz.hAns.innerHTML = "";
    }
    }, 1000);
    },


reset : () => {
    quiz.now = 0;
    quiz.score = 0;
    quiz.draw();
    }
    };
 window.addEventListener("load", quiz.init);