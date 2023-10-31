// === 중급 문법 ===

// 01) this ***

// 1_제일 바깥쪽에서 쓰면 window 를 가리킴
console.log(this) // winodw

// none strict 모드일때 함수 안에서 쓰면 window
function thisIsFunction(){
    console.log(this) // window
}

// 2_strict 모드일 때는 undefined
"use strict"
function thisIsFunction2(){
    console.log(this) // undefined
}

// 3_object 안에서는 자기자신을 가리킴  !!! 화살표 함수의 경우는 아님 주의 !!!! 
const exObject = {
    name : "kim",
    func : function(){ console.log(this) }
} 
exObject.func(); // exObject 자신을 출력함

// 4_class 를 class 문법 말고 그냥 function 을 이용해서 만드는 경우의 this (class 문법으로 쓸때는 constructor 안에서 쓰면 됨)
function machine(){
    this.name = "kim"
}
machine(); // 근데 이렇게 쓰면 에러날걸?
const exObject02 = new machine(); // class 문법을 안썼더라도 new 로 실행시켜야 할 듯
console.log(exObject02) // { name : 'kim' } 나온다

// 5_eventListener 안에서의 this 는 e.currentTarget 임  !!! 화살표 함수의 경우는 아님 주의 !!!! 
document.querySelector('#button').addEventListener('click', function(e){
    console.log(this) // e.currentTarget 그러니까 #button 자신을 뜻함
})



// 02) 그렇다면 화살표 함수란 무엇인가 ***

// 아래와 같은 함수를
function uglyFunction(){
    return 'ugly'
}

//이렇게 쓸수 있게해줌
const beautifulFunction = () => {
    return 'beautiful'
}

// 근데 뭐가 다름? 
const exObject03 = {
    name : "kim",
    func : () => { console.log(this) } // 여기서 this 는 window 나옴!!
}
// 화살표 함수로 쓸 경우의 this 는 외부의 this 를 안으로 그대로 가져옴
// 위의 경우는 exObject03 바깥의 this 는 window 이기 때문에 window 가 그대로 출력됨
// 결론 : this 를 써야할 때는 그냥 function 쓰자. 아니면 this 쓰지말자 !!



// 03) var, let, const + scope ***

// var 는 안쓰면 됨!
// let 은 재할당 가능
let a = 'kim';
a = 'oh' // 가능

// const 는 재할당 불가능
const b = 'kim';
b = 'oh' // 에러 !!

// const 라도 object 일 경우, 그 안의 데이터는 변경 가능
const c = { name : 'kim' };
c.name = 'oh'; // 가능
// 이런 경우에도 변경 불가하게 하고 싶으면
Object.freeze(c);
// 이렇게 하면 됨 (하지만 이렇게 해도 객체 내의 객체는 freeze 안됨)

// var 와 나머지의 scope(범위)
// var 는 범위가 함수임
function func3(){
    var name = 'kim'
}
console.log(name) // 에러 : 접근 불가

// let, const 는 {} 중괄호 내부
{
    let name = 'kim'
}
console.log(name) // 에러 : 접근 불가



// 04) tagged literals

// 템플릿 리터럴의 신박한 사용법
// tagged literals 는 템플릿 리터럴을 이용해 string을 해체 분석할 수 있게 해준다.
const sonny = '손흥민';
function analyze(strings, variable01){
    console.log(strings);
    console.log(variable01);
} 
analyze`안녕 나는 ${sonny} 입니다`; // ['안녕 나는 ', ' 입니다'] // '손흥민'



// 05) spread operator

// spread operator 의 활용법 중 유용한 것들

const array01 = [10, 20, 30];

function sumsum(a, b, c) {
    console.log(a + b + c)
};

// 아래 세가지 경우는 모두 같다!
sumsum(array01[0], array01[1], array01[2]); // 60

sumsum.apply(undefined, array01); // 60

sumsum(...array01) // 60


