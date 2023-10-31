// === 기본 문법 ===
//
// 1. 변수, 상수
//    let, const
//    let => 변조 가능
//    const => 변조 불가능
//
//
// 2. 자료형 type
//    string    문자열      =>  ' ', " ", ` `
//    number    숫자        =>  정수, 소수, 등 수학임~~
// ★ boolean   참거짓      =>  true, false
//    object    객체        =>  {  }  => 사실 다 '객체' 이지만..
//    array     배열        =>  [  ]
//    function  함수        =>  여러가지 묶어서 하나의 기능으로 ~
//    null      널          =>  '없는 값' (의도적으로 명시되는 경우가 많음)
//    undefined 언디파인드   =>  '지정되지 않은 값'
//    regEx     정규식       =>  정규표현식 이라는 어려운 것입니다~~
//
//
// 3. 연산자
//    > 산술연산자
//    +, -, %, *  => 사칙연산
//
//    > 비교연산자
//    ==   =>  동등(동등)     => 같다는 뜻입니다~
//    !==  =>  불일치(부등)   => 같지 않다는 뜻입니다~
//    ===  =>  완전일치(일치) => 자료형 까지 완전히 같다는 뜻입니다~
//
//    > 논리연산자
//    &&   =>  AND  => 모두 true 라면
//    ||   =>  OR   => 하나라도 true 라면
//     !   =>  NOT  => 뒤에 오는 객체의 boolean 값을 반대로!(부정)
//
//    > 할당연산자
//    =   =>   할당
//    +=, -=  =>   기존 변수의 값을 변화시킴(기존 변수 할당)
//    
//    > 증감연산자
//    ++   =>   1씩 더하기~
//    --   =>   1씩 빼기
// 
//    > 삼항연산자
//    조건 ? 값1 : 값2   =>   조건이 true 면 값1, false 면 값2
//
//
// 4. 조건문
//    if( 조건 ){ 
//      값 
//    }             =>   조건이 true 면 값
//
//    if( 조건 ){ 
//      값1 
//    } else {    
//      값2
//    }             =>   조건이 true 면 값1, false 면 값2
//
//       
//    if( 조건1 ){ 
//      값1 
//    } else if( 조건 2){    
//      값2
//    } else {
//      값3
//    }             =>   조건1 이 true 면 값1, false 면 > 조건2 가 true 면 값2 > 모두 false 면 값3
//
//    switch( 조건값 ) {
//      case '검증대상1':  // if (x === 'value1')와 같음
//          값1
//        break;
//
//      case '검증대상2':  // if (x === 'value2')와 같음
//          값2
//        break;
//
//      default:
//          값3
//        break;
//    }             =>  조건값을 각 case 의 검증대상과 차례로 비교하여 true 일경우 문을 빠져나옴, 모두 false 면 default 값3 으로
//
//
// 5. 반복문
//    > for 문(기본형)
//          for(let i = 0; array.length > i; i++){
//              하고싶은 동작
//          }
//              => array의 length 만큼 하고싶은 동작을 실행
//              => 반복 횟수가 정해진경우
//              => 주로 배열과 함께 사용
//
//    > while 문
//          while( 조건 ){
//               하고싶은 동작
//               증감식
//          }
//              => 무한 루프나 특정 조건에 만족할때까지 반복해야하는 경우
//          
//    > do ... while 문
//          do {
//               하고싶은 동작
//               증감식
//          } while( 조건 )            
//              => while 문과 똑같지만 최소 한번은 실행됨
//      
//
// 6. 함수
//      function 함수명( 파라미터 ){
//          어쩌구 파라미터 해주세요
//      }
//      함수명(파라미터);
//                          => 기본적으로 이렇게 사용합니다! 함수호출이 없으면 함수는 실행되지 않습니다!
//                          => 뭔가 여러 동작을 묶고 싶을때 사용한다고 보면 됩니다!
//      
//      function ( 파라미터 ){
//          어쩌구 파라미터 해주세요
//      }
//                          => 함수명이 없는 익명 함수 입니다. 보통 call-back 으로 쓰입니다!
//
//      const 함수명 = (파라미터) => {
//          어쩌구 파라미터 해주세요 
//      }
//                          => '화살표 함수' 라고 합니다. 몇가지 근본적인 기능이 다른 함수선언법이기도 하고, 코드가 보기 좋아 진다는 점이 있습니다!(짧아짐)
//                          => 왜냐하면 다음과 같이 쓸 수 있기 때문입니다.    파라미터 => 어쩌구 파라미터 해주세요   이렇게 해도 똑같이동작합니다. 다만 실행 구문이 한 줄 일때만 가능합니다!
//
//
// 7. 객체와 배열
//      > 객체 object 는 보통 중괄호 { } 안에 필요한 값들을 담아서 씁니다.
//          let object = {
//              이름 : '호구',
//              나이 : 11
//          }
//                          => 이런식으로 키 : 밸류 형식으로 저장합니다.
//                          => 키 는 설정하기 나름이고, 밸류 는 타입을 맞춰서 써주는게 좋습니다.
//                          
//          let ourCats = {
//              호구 : [ 열한살, 턱시도 ],
//              풀숲 : [ 일곱살, 고등어 ],
//              냐옹 : function 냐옹(){
//                  console.log('냐옹')
//              }
//          }
//                          => 이렇게 배열도 담을 수 있습니다.
//                          => 함수도 담을 수 있습니다.
//
//      > 배열 array 는 보통 대괄호 [ ] 안에 필요한 값들을 담아서 씁니다.
//          let array = [
//              풀숲, 호구, 미선, 병도
//          ]
//                          => 접근은 array[0], array[1], array[2], array[3] 으로 할 수 있습니다.
//
//          let objInArray = [
//              {
//                  이름 : '호구',
//                  나이 : 11
//              },
//              {
//                  이름 : '풀숲',
//                  나이 : 7
//              },           
//          ]
//                          => 배열 안에 객체를 담을 수도 있습니다! 가장 자주쓰이는 데이터 패턴이니 꼭 기억해 두세요!