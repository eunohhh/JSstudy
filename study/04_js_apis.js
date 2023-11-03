window.addEventListener('scroll', function(){
    console.log( window.scrollY ) // 스크롤 된 y 값 출력
});

window.scrollTo(0, 100); // y 100 만큼 스크롤해줌

window.scrollBy(0, 100); // y 100 만큼 현재위치에서 부터 스크롤해줌

document.querySelector('#ID').scrollTop; // 스크롤 양
document.querySelector('html').scrollTop;  // 현재 웹페이지 스크롤양 (전체 페이지의 스크롤양을 알고 싶을 때 html 찾으면 됨 )

document.querySelector('#ID').scrollHeight; // 실제(스크롤 포함한 전체) 높이
document.querySelector('#ID').clientHeight; // 보이는 높이

localStorage.setItem('이름', 'kim') // 자료저장하는법
localStorage.getItem('이름') // 자료꺼내는법
localStorage.removeItem('이름') // 자료삭제하는법

// 챗G 가 알려준 변화하는 opacity 값 적용법
window.addEventListener('scroll', function() {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop; // 크로스 브라우징을 위해 둘 중 하나 사용
    let opacity = (-1/500) * scrollTop + 2.3;
    
    // scrollTop이 650보다 작거나 1150보다 클 때 투명도가 1 이상 또는 0 이하가 되지 않도록 함
    opacity = Math.max(0, Math.min(1, opacity));
    
    document.querySelector('#card').style.opacity = opacity.toString();
});

// 카루셀 등에서 변화하는 변수의 값 기록과 계산
let startCoord = 0;
let clicked = false;

document.querySelector('.carousel').addEventListener('mousedown', (e)=>{
    startCoord = e.clientX; // 처음 시작한 지점의 clientX 를 startCoord 에 기록
    clicked = true; // 클릭 상태 추적
});

// 마우스 이동인데 클릭일 경우 (드래그) 드래그 한 만큼 이동
document.querySelector('.carousel').addEventListener('mousemove', (e)=>{
    let moving = e.clientX - startCoord; // mousemove 시 변화하는 clientX 에서 기록된 x 좌표를 빼서 계산
    if(clicked){
        document.querySelector('#slide-container').style.transform = `translateX(${moving}px)`;
    }
});

// 마우스 떼었을 때 이동거리가 100 이상이면 2번사진 보여주기
document.querySelector('.carousel').addEventListener('mouseup', (e)=>{
    clicked = false;

    if (e.clientX - startCoord < -100) {
        document.querySelector('#slide-container').style.transform = 'translateX(-100vw)';
    } else {
        document.querySelector('#slide-container').style.transform = 'translateX(0vw)';
    }
});