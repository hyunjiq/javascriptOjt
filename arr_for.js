// const nav_data = [
//     {
//         gnb_li_a : "회사소개",
//         gnb_li_href : "./company.html"
//     },
//     {
//         gnb_li_a : "제품소개",
//         gnb_li_href : "./product.html"
//     },
//     {
//         gnb_li_a : "커뮤니티",
//         gnb_li_href : "./community.html"
//     },
    
// ]

// console.log(nav_data[2].gnb_li_a);


console.log(`한번만 실행되지`);

// 초기값, 조건, 증가값(거짓)
// i는 0인데 i가 5까지만 i가 하나씩커질때
for(var i = 0; i < 5; i++ ){
    console.log(`나는 다섯번 실행되지`);
}
 
//let count = 10;
//count++; //10 내 다음 나한테 값을 예약 (후치연산) count += 1 추가저장
//count; //11
//++count; //12 지금(전치연산)

let count = 10;
    count += 100; //110
    count += 1; //111
    ++count; //112
    count++; //112

    console.log(count); //113

let multy = 10;
    multy = multy * 3; //multy *= 3

    //문자연산식

let mysyudy = "리액트";
    mystudy = "리액트" + "뷰" ; // mystudy += "뷰"

let startjs = 10;
    startjs += 10; //20
    startjs += "원"; //문자가 되어버림
    startjs += 100; //20원100
    startjs += 100; //20원100100