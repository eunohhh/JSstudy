
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