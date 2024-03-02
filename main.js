"use strict";

/** ================= 데 이 터 ===================== */

const object = {
    name : '호구',
    age : 11
};

//object 접근방법 console.log(object.name)

const array = [
    '풀숲', '호구', '미선', '병도'
];

//array 접근방법 console.log(array[3]);

const objInArray = [
    {
        name : '호구',
        age : 11
    },
    {
        name : '풀숲',
        age : 7
    },    
    {
        name : '미선',
        age : 33
    },
    {
        name : '병도',
        age : 34
    }       
];

//objInArray 접근방법 console.log(objInArray[2].name);

/** ================= 코  드 =================== */

const mainDiv = document.querySelector('.first');

const button_1 = document.querySelector('.insert-txt');
const button_2 = document.getElementById('insert-html');

const button_3 = document.querySelector('.append');
const button_4 = document.querySelector('.remove');

const button_5 = document.querySelector('.for');
const button_6 = document.querySelector('.func');
const button_7 = document.querySelector('.func2');

//document.querySelector 에서 ID를 불러올때 =>document.querySelector('#어쩌구');


button_1.addEventListener('click', function(){
    mainDiv.innerText = '와 신기하다!';
});

button_2.addEventListener('click', function(){
    mainDiv.innerHTML = "<div style = 'background-color:red; color:white'>아니 HTML 도 넣을 수 있잖아!</div>"
});

button_3.addEventListener('click', function(){
    const value = document.querySelector('.input-form').value;

    if( value.length > 0 ){
        const newDiv = document.createElement('div'); //createElement 엘리먼트를 만들어주세요.
                newDiv.innerHTML = `<h2>${value}</h2>`;
        mainDiv.appendChild(newDiv); //appendChild 넣어주세요.
    } else {
        mainDiv.innerText = '입력해주세요ㅜㅜ';
    }
});

button_4.addEventListener('click', function(){
    const forRemove = mainDiv.lastChild;
    
    if( forRemove ){
        mainDiv.removeChild(forRemove);
    } else {
        console.log('지울 요소가 없습니다')
    }
});

button_5.addEventListener('click', function(){
    for(let i = 0; objInArray.length > i; i++){
        const newDiv = document.createElement('div');
                newDiv.innerHTML = `<h2>${objInArray[i].name}</h2>`;
        mainDiv.appendChild(newDiv);
    }
});

button_6.addEventListener('click', (e)=>{
    const value = e.target.innerText;
    const newDiv = document.createElement('div');
        newDiv.innerHTML = `<h2>${value}</h2>`;
    mainDiv.appendChild(newDiv);
});

button_7.addEventListener('click', ()=>{
    let getValue = prompt('호구가좋아요 풀숲이가좋아요?');
    toDo(getValue);
});

function toDo(parameter){
    const newDiv = document.createElement('div');
            newDiv.innerHTML = `<h2>${parameter}</h2>`;
    mainDiv.appendChild(newDiv);
};

/** =============== 연 습 장 =================== */

let test_1;
console.log('언디파인드체크', test_1);

let test_2 = null;
console.log('널체크',test_2);

let hi = 'hi';
let exString = '스트링입니다';
let exStringTwo = "<div style = 'background-color:red;'></div>";
let exTemplate = `스트링인데 ${hi} 쓸수있고,
엔터도 먹어요`;

const isTrue = true;
const isFalse = false;
console.log('1번테스트', isTrue && isFalse);
console.log('2번테스트', isTrue || isFalse);
console.log('3번테스트', !isTrue);

const v1 = 1;
const v2 = 1;
const v3 = '1';
const v4 = 2;
console.log('1번비교', v1 == v2);
console.log('2번비교', v1 === v2);
console.log('3번비교', v1 === v3);
console.log('4번비교', v1 !== v4);

const regex = /스트링/;
console.log('정규식체크', regex.test(exTemplate));

const t = 1;
const c = 2;
console.log('test!', t&&c);


let sum = 0; 
var i = 1;
do {
    sum = sum + i;
    i = i + 1;
} while(i < 10)

console.log('dowhile', sum);

let sum2 = 0; 
var i2 = 1;
while(i2 < 10){
    sum2 = sum2 + i2;
    i2 = i2 + 1;
}
console.log('while', sum2);

// let number;
// while (isNaN(number) || number < 1 || number > 10) {
//   number = parseInt(prompt("Enter a number between 1 and 10:"));
// }

let x = 1;
do {
    console.log('이게됨? 되면 i는 ' + x);
    x++;
} while ( x < 1 )


const band = [10,10,100];
const hp = 10;
const at = [[1,15],[3,1]];

const result = solution(band, hp, at);

console.log(result)

function solution(bandage, health, attacks) {    
    const t = bandage[0];
    const x = bandage[1];
    const y = bandage[2];

    let currHealth = health;
    let curAttack = 0;

    for ( const e of attacks ){
        const attackTime = e[0];
        const damage = e[1];

        const timeDiff = attackTime - curAttack - 1;

        const success = Math.floor(timeDiff / t);

        let get = timeDiff * x + success * y;
        
        currHealth += get;
        if(currHealth >= health) currHealth = health;
        currHealth -= damage;

        curAttack = attackTime;

        if(currHealth <= 0){
            return currHealth = -1;
        }
    };

    return currHealth;
}

// function solution(bandage, health, attacks) {    
//     const t = bandage[0];
//     const x = bandage[1];
//     const y = bandage[2];

//     let currHealth = health;

//     function getHealth(attackInterval, over){
//         let start = 0;
//         while(start < attackInterval) {
//             start ++;
//             if(currHealth < health) {
//                 currHealth += x;
//             }
//         } 
//         start = 0;
//         if(over) currHealth += y;
//         if(currHealth >= health) currHealth = health;
//     };

//     function loseHealth(damage){
//         currHealth -= damage;        
//     };

//     attacks.forEach((e,i) => {
//         const attackTime = e[0];
//         const damage = e[1];

//         let attackInterval;

//         if(i === 0){
//             attackInterval = attacks[0][0] - 1;
//         }else{
//             attackInterval = attackTime - attacks[i-1][0] -1;
//         }

//         let over = attackInterval >= t ? true : false;

//         if(attackInterval === 0) {
//             loseHealth(damage);
//         }else{
//             getHealth(attackInterval, over);
//             loseHealth(damage);
//         }  

//         if(currHealth <= 0){
//             currHealth = -1;
//         }
//     });

//     return currHealth;
// }

// else if(i === attacks.length -1){
//     attackInterval = attacks[attacks.length -1][0] - attacks[attacks.length -2][0] -1;
// }