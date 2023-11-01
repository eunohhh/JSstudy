// 07) class

// class 생성법
// constructor 에 있는 this.어쩌구 들이 프로퍼티로 들어감
class Parents {
    constructor(){
        this.lastName = "kim"
        // 이렇게 함수 추가하면 바로 등록되고,
        this.sayHi = function(){
            console.log('hi')
        }
    }
    // 이렇게 함수 추가하면 prototype 에 등록됨
    sayHello(){
        console.log('hello')
    }
}

const children = new Parents();

// children.__proto__ === Parents.prototype
// Object.getPrototypeOf(children) === Parents.prototype

// extends 사용법

// 부모 class 생성법
class GrandFather {
    constructor(age){
        this.lastName = 'kim';
        this.age = age;
    }
    sayHi(){
        console.log('안녕 나는 할아버지에요');
    }
}

const grandFather01 = new GrandFather(75); // grandFather01.age === 75

// 부모 class 를 extends 하는 자식 class 생성법
class Father extends GrandFather {
    constructor(age){
        super(age); // 부모 class 의 constructor 를 그대로 상속
        this.weight = '65kg';
    }
    sayHi(){
        super.sayHi();
        console.log('안녕 나는 아버지에요');
    }
}

const father01 = new Father(50); // father01.age === 50

// 위와 같은 경우에 다음을 실행한다면?
father01.sayHi(); 
// '안녕 나는 할아버지 에요'
// '안녕 나는 아버지 에요'
// 연속 출력됨!



// 08) getter, setter

// 기본 사용법
// get 값을 제공할때 === 얻을때
// set 값을 세팅할때 === 수정할때
const object = {
    name : 'Kim',
    age : 30,
    get nextAge(){
        return  this.age + 1  
    },
    set setAge(age){
        this.age = parseInt(age)
    }
}

console.log(object.nextAge) // 31

object.setAge = '35';
console.log(object.age); //35

// class 에서 사용법
class 사람 {
    constructor(){
        this.name = 'Park';
        this.age = 20;
    }
    get nextAge(){
        return this.age + 1
    }
    set setAge(나이){
        this.age = 나이;
    }
}

const people = new 사람();
console.log(people.nextAge) // 21

people.setAge = 50;
console.log(people.age) // 50

