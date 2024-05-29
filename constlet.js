let study = "프론트앤드";
//const myword = "그래 나도 한번 " + study + " 해보자!";
const myword = `그래 나도 한번 ${study} 해보자!`;
console.log(myword);

//메모리낭비..
let _month = [2,3,7];
let _study = ['피그마','뷰','리액트'];
let _name = ["홍길동",'나훈아','조명섭'];

const myinfo0 = `저는 ${_month[0]}개월 간의 ${_study[0]} 공부를 한 ${_name[0]} 입니다`;
const myinfo1 = `저는 ${_month[1]}개월 간의 ${_study[1]} 공부를 한 ${_name[1]} 입니다`;
const myinfo2 = `저는 ${_month[2]}개월 간의 ${_study[2]} 공부를 한 ${_name[2]} 입니다`;

//console.log(myinfo0,myinfo1,myinfo2);

//이중어래이[]
const myarr = [
    ["네이버","http://www.naver.com"],
    ["다음","http://www.daum.net"],
    ["구글","http://www.google.com"]
]

console.log("첫번째 배열",myarr[0],typeof myarr[0],
            "첫번째배열의 첫번째값",myarr[0][0],typeof myarr[0][0]);

                //myarr의 0번째줄의 1번째 값 //myarr의 0번째줄의 0번째 값
console.log(`<a href="${myarr[0][1]}">${myarr[0][0]}</a>`);
console.log(`<a href="${myarr[2][1]}">${myarr[2][0]}</a>`);

//오브젝트{}
const myarrobj = {
    _month : [2,3,7],
    _study : ['피그마','뷰','리액트'],
    _name : ["홍길동",'나훈아','조명섭']
}

console.log(myarrobj._study[0]);

const gnb={
    d1:{
        text : "회사소개",
        href : "./company.html"
    },
    d2:[
        {
            text : "ceo인삿말",
            href : "./company.html"
        },
        {
            text : "조직도",
            href : "./company.html"
        },
    ]
}

console.log(`<a href="${gnb.d1.href}">${gnb.d1.text}</a>`)
//오브젝트는 반드시 key(class같은거?)가 있어야 하고 어레이는 없이 사용

const _gnb = {
        pclass:"gnb_p",
        href:"gnb.html",
        aclass:"gnb_a",
        text:"네비"           
}

console.log(`<p class="${_gnb.pclass}"><a href="${_gnb.href}" class="${_gnb.aclass}">${_gnb.text}</a></p>`)