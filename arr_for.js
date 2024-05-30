const nav_data = [
    {
        gnb_li_a : "회사소개",
        gnb_li_href : "./company.html"
    },
    {
        gnb_li_a : "제품소개",
        gnb_li_href : "./product.html"
    },
    {
        gnb_li_a : "커뮤니티",
        gnb_li_href : "./community.html"
    },
    {
        gnb_li_a : "인트라넷",
        gnb_li_href : "./intra.html"
    },
    
]

//오브젝트 접근법
// console.log(nav_data[1].gnb_li_href);
// console.log(nav_data[1]['gnb_li_href']);//리액트 표현

let mygnb = null;//""; 둘 다 같지만 다른 언어에서는 ""를 문자로 인식 할 수 있음
for(let liea = 0; liea < nav_data.length; liea++){ //length 몇개인가
    mygnb += nav_data[liea]['gnb_li_href'];
}
console.log(mygnb); //오리지날 for문

let mygnb2 = null;//""; 둘 다 같지만 다른 언어에서는 ""를 문자로 인식 할 수 있음
for(let v in nav_data){ //length 몇개인가 //for in 문 오브젝트나 어래이 만들고써야함 in뒤에 오브젝트나 어래이가 와야함

   // console.log("forin문처리 : ", v);
   mygnb2 += `${nav_data[v].gnb_li_href}\n`;
}
// document.getElementsByClassName("gnb").length;
// document.querySelectorAll(".gnb").length; 같은 말

// console.log(nav_data[2].gnb_li_a);


//console.log(`한번만 실행되지`);

// 초기값, 조건, 증가값(거짓)
// i는 0인데 i가 5까지만 i가 하나씩커질때
//for(var i = 0; i < 5; i++ ){
    //console.log(`나는 다섯번 실행되지`);
//}
 
//let count = 10;
//count++; //10 내 다음 나한테 값을 예약 (후치연산) count += 1 추가저장
//count; //11
//++count; //12 지금(전치연산)

//let count = 10;
    // count += 100; //110
    // count += 1; //111
    // ++count; //112
    // count++; //112

   // console.log(count); //113

// let multy = 10;
//     multy = multy * 3; //multy *= 3

    //문자연산식

//let mysyudy = "리액트";
//    mystudy = "리액트" + "뷰" ; // mystudy += "뷰"

//let startjs = 10;
//    startjs += 10; //20
    // startjs += "원"; //문자가 되어버림
    // startjs += 100; //20원100
    // startjs += 100; //20원100100

    //for문에 메서드 동사 넣지않기
    // let meg = "";
    // for(var i = 0; i < 10 ; i++){
    //    meg += `나 \"열번\"나오게 해줘 \n`;
    // }

    // console.log(meg)

    // \n 자바스크립트의 <br> 
    // \ 건너뛰기 \t = tab 에스케이프 문자?