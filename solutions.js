
// 분수의 덧셈
const fraction = [9,2,1,3];

const result2 = fractionSum(...fraction);

function fractionSum(numer1, denom1, numer2, denom2) {
    var answer = [];
    
    const denom = numer1 * denom2 + numer2 * denom1;
    const numer = denom1 * denom2;
    
    // 최대 공약수 구하기
    function cal_gcd(a, b) {
        return a % b === 0 ? b : cal_gcd(b, a % b)
    }
    
    //최대공약수,  최소공배수
    function gcdLcm(num1, num2) {
        const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
        const lcm = (a, b) => a * b / gcd(a, b);
        return [gcd(num1, num2), lcm(num1, num2)];
    }
    
    const gcd = cal_gcd(denom, numer);
    
    answer = [denom / gcd, numer / gcd];
    
    return answer;
}

const forManyValue = [1,1,2,2];

const res = manyValue(forManyValue);

function manyValue(array) {
    let answer = 0;

    const arr = [];
    const countedNumbers = array.reduce(function (allNumbers, number) {
        if (number in allNumbers) {
            allNumbers[number]++;
        } else {
            allNumbers[number] = 1;
        }
        return allNumbers;
    }, {});

    const max = Math.max(...Object.values(countedNumbers));

    for(const [key, value] of Object.entries(countedNumbers)){
        if(value === max){
            arr.push(Number(key));
        }
    }

    if(arr.length === 1){
        answer = arr[0];
    }else if(arr.length > 1){
        answer = -1;
    }

    // if(array.length === 1) answer = array[0];

    // const arr = [];
    // const values = [];
    // const set = [...new Set(array)]

    // const result = arr.filter((e,i)=>{

    //     return arr[`${e}`] === max
    // })


    // for(let i = 0; i < set.length; i++){
    //     for(let j = 0; j < array.length; j++){
    //         if(set[i] === array[j]){
    //             arr.push({
    //                 val : set[i]
    //             })
    //         }
    //     }
    // }
    // const filtered = array.filter((e,i) =>{
    //     return array.indexOf(e) !== i
    // })

    // const set = [...new Set(filtered)];
    
    // if(set.length === 0){
    //     answer = array[0];
    // }else if(set.length === 1){
    //     answer = set[0];
    // }else if(set.length > 1){
    //     answer = -1;
    // }
            
    return answer;
}