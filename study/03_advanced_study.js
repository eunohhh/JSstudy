// === 고급 문법 ===

// 01) destructuring === 구조분해할당
var array = [2,3,4];
var aa = array[0]; 
var bb = array[1];

// 위는 아래와 완전히 같다 ===

var [aa,bb,cc] = [2,3,4];


// defualt 값도 줄 수 있다.
var [aa,bb,cc] = [2,3];  // 이 경우 cc는 undefined

var [aa,bb,cc = 5] = [2,3]; // 이렇게 default 를 지정해주면 undefined 방지 가능


// 이렇게 하면 name 은 kim, age는 30 할당 됨
var { name, age } = { name : 'Kim', age : 30 };


// 함수의 경우
function 함수(name, age){
    console.log(name);
    console.log(age);
}

var obj = { name : 'Kim', age : 20 }
함수(obj.name, obj.age); // 원래는 이렇게 써야 하지만,,,


// 이렇게 파라미터를 { } 구조분해할당 하고
function 함수2({name, age}){
    console.log(name);
    console.log(age);
}
함수2(obj); // 이렇게 써도 똑같음

// 배열의 경우도 같다!
function 함수3([name, age]){
    console.log(name);
    console.log(age);
}
함수3([ 'kim', 30 ]); // 이렇게 배열로 집어넣으면 똑같음



// 02) call-back 함수 

// 함수를 함수안에 넣는 방법
// 파라미터에 넣고, 내부에서 실행() 하면 됨
function 첫째함수(콜백){
    console.log(1);
    콜백();
}

function 둘째함수(){
    console.log(2)
}

첫째함수(둘째함수); // 1, 2 출력됨

// 이게 기본 패턴임
// 그래서 여기저기서 비슷하게 쓰는 것들 다 ~~ 콜백임
// 예를 들어 이벤트 리스너
document.querySelector('#button').addEventListener('click', function(){
    // 여기가 바로 익명 콜백함수
});

// 이렇게 쓰면 덜 헷갈릴 걸 아마도?
document.querySelector('#button').addEventListener('click', 둘째함수);

// !!!! 콜백함수를 엮어서 쓰는게 골치아프기 때문에!! promise === 비동기 가 있음!!!!



// 03) Promise !!

// 일단 만드는 법!!
const promise = new Promise((성공, 실패)=> { // 이렇게 만들고

    let 어려운연산 = 1 + 1; // 여기서 수행하고 싶은 동작

    if(어려운연산 === 2){
        성공(어려운연산); // 성공일 경우 성공(보낼데이터)
    }else {
        실패('연산 틀렷다 이놈아'); // 실패일 경우 실패(보낼에러메시지 등)
    }
})

// 사용법!!
promise
    .then((value) => { 
        console.log('연산성공' + value)
    }) // .then 을 통해 프로미스가 성공했을 경우 return 값을 사용할 수 있다.
    .catch((error)=>{
        console.log('연산실패' + error)
    }) // .catch 를 통해 프로미스가 실패했을 경우를 처리할 수 있다.


// async await 로 고급지게 하기
// 일단 만드는 법 !!
async function 더하기() {
    var 어려운연산 = new Promise((성공, 실패)=>{
        var 결과 = 1 + 1;
        성공(결과);
    });
    var 결과 = await 어려운연산;
    console.log(결과);
}
더하기();
// 중요! async 키워드가 사용된 함수를 꼭 await 로 실행해야하는 것은 아님
// async 는 그런 의미가 아니라 함수 내에서 await 를 사용할 수 있게 해주는 것 뿐임
// .then 체인이 지저분해보이니까 그냥 예쁘고 직관적으로 쓸 수 있게 해주는 것!!!

// 위 코드를 아래 처럼 할 수도 있겠지만!
// 상황 01
async function calculate() {
    const hardCal = 1 + 1; // 만약 여기서 수행하는 동작이 비동기라면? 아래 참고
    return hardCal;
}

async function sumsum() {
    const value = await calculate();
    console.log(value);
}


// 상황 02
async function calculate2() {
    let hardCal; // 변수 생성
    setTimeout(() => {
        hardCal = 1 + 1; // 2초뒤 변수 값 할당
    }, 2000);
    return hardCal; // 리턴
} // 이렇게 해도! 잘 안될 것이다...

async function sumsum2() {
    const value = await calculate2();
    console.log(value); // undefined
}

// 그렇다면 어떻게 해야 하는가?
// 아래처럼 처리할 수 있다.

const calPromise = new Promise((성공, 실패)=>{
    setTimeout(() => {
        let hardCal = 1 + 1; 
        성공(hardCal); // 아예 이렇게 프로미즈 만들어서 콜백 안에서 직접 성공판정 내려주는 게 안전
    }, 2000);
})

async function sumsum3() {
    const value = await calPromise;
    console.log(value); // 2 가 나오게 된다!
}



// 04) 반복문 고급

// 1_ for in
// object 자료형에 사용
// enumerable 한 애들에 사용 가능함 ( 그냥 객체에 사용한다고 생각하면 편함 )
// 부모의 prototype 에 있는 애들도 다 출력함
// 만약 이게 싫다면 hasOwnProperty 문 추가해야함

var 오브젝트 = { name : 'Kim', age : 30 };

for (var key in 오브젝트) {
    console.log(오브젝트[key]); // kim 30
    console.log(key) // name age
}

for (var key in 오브젝트) {
    if (오브젝트.hasOwnProperty(key)) { // 부모의 prototype 에 있는애들 거르고 싶으면 이 구문 추가해야 함
        console.log(오브젝트[key]); // kim 30
    }
}


// 2_ for of
// array 자료형에 사용
// [Symbol.iterator]() 가 있는 애들에 적용 가능함 === iterable 한 자료형

var 어레이 = [2,3,4,5];

for (var 자료 of 어레이) {
    console.log(자료); // 2 3 4 5
}

// ex 구구단~~~~~~~~!!
// let 데이터 = [1,2,3,4,5,6,7,8,9]
// for(let i of 데이터){
//     for(let j of 데이터){
//         console.log(`${i} x ${j} = ${i*j}`)
//     }
// } 



// 05) Symbol

// ES6 에 Symbol 추가됨
// 아래와 같이 Symbol 만들면 
// 고유한 이름(key)을 가진 프로퍼티가 생성됨
// 이 자료형의 특징은 for 문에 적용되지 않음!!
// Symbol 은 고유함! 같은 description을 가진 Symbol 이라도 같지 않음 === 유니크함 
var person = { name : 'Kim' };
person.weight = 100;

var weight = Symbol('내 진짜 몸무게');
person[weight] = 200;

console.log(person); // { Symbol(내 진짜 몸무게) : 200, weight : 100}



// 06) Map

// 역시 ES6 에 추가된 Map 자료형
// object 와 비슷하게 key, value 로 되어 있음
// 하지만 출력해보면, 화살표로 표시해줌
// Map 자료형은 자료의 연관성을 표시하기 위해 사용하기 때문

var person = new Map();
person.set('name', 'Kim');
person.set('age', 20);

// 장점. key 에 여러 타입을 넣을 수 있음
var person = new Map();
person.set([1,2,3], 'Kim'); // key 에 배열을 넣었음
person.set('age', 20); // key에 string을 넣었음

// map 다루는 법!!!!
// 기본 생성
var person = new Map();
person.set('age', 20);

person.get('age'); //자료 꺼내는 법
person.delete('age'); //자료 삭제하는 법
person.size; //자료 몇갠지 알려줌

//Map자료 반복문 돌리기
for (var key of person.keys() ){
    console.log(key)
}

//자료를 직접 집어넣고 싶으면
var person = new Map([
    ['age', 20],
    ['name', 'Kim']
]); 

// 실은 알고리즘에 사용되는 자료형임
// hash table ~~



// 07) Set

// 역시 ES6 에 추가됨
// Array 자료형과 유사
// 특징은 중복자료를 걸러줌!!

var 출석부2 = new Set([ 'john' , 'tom', 'andy', 'tom' ]);
console.log(출석부2); // Set(4){ 'john' , 'tom', 'andy', 'tom' } 이렇게 무슨 객체처럼 표시됨

출석부2.add('sally'); //자료더하기 
출석부2.has('tom'); //자료있는지 확인
출석부2.size;  //자료 몇갠지 세기

// 중복자료 제거 방법
var 출석부 = [ 'john' , 'tom', 'andy', 'tom' ];
var 출석부2 = new Set(출석부); //Array를 Set으로 바꾸기
출석부 = [...출석부2]  //Set을 Array로 바꾸기, 이 과정을 거치면 중복이 제거됨