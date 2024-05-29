const gnb = {
    d1 : [
        {
            text:"펫시터가와요",
            href:"./펫시터.html"
        },
        {
            text:"훈련사",
            href:"./훈련사.html"
        },
        {
            text:"플레이스",
            href:"./플레이스.html"
        },
        {
            text:"사회공헌",
            href:"./사회공헌.html"
        },
        {
            text:"커뮤니티",
            href:"./커뮤니티.html"
        },
        {
            text:"펫트너",
            href:"./펫트너.html"
        },
    ],       
    
    d2 :{
        d2_sitter : [
            {
                text :"방문돌봄",
                href :"./방문돌봄.html"
            },
            {
                text :"집중호스피스",
                href :"./집중호스피스.html"
            },
            {
                text :"펫 플래닛",
                href :"./펫플래닛.html"
            },
            {
                text :"웨딩케어",
                href :"./웨딩케어.html"
            },
            {
                text :"안심&픽업드랍",
                href :"./안심픽업.html"
            },
        ],
        d2_trainer : [
            {
                text :"훈련사 소개",
                href :"./방문돌봄.html"
            },
            {
                text :"훈련사에게 물어봐",
                href :"./집중호스피스.html"
            },
        ],
        d2_place : [
            {
                text :"입점 문의",
                href :"./방문돌봄.html"
            },
            {
                text :"매장 찾기",
                href :"./집중호스피스.html"
            },
        ],
        d2_social : [
            {
                text :"봉사활동",
                href :"./방문돌봄.html"
            },
            {
                text :"지식 나눔",
                href :"./집중호스피스.html"
            },
            {
                text :"심리 상담",
                href :"./펫플래닛.html"
            },
        ],
        d2_community : [
            {
                text :"실시간 후기",
                href :"./방문돌봄.html"
            },
            {
                text :"구독 서비스",
                href :"./집중호스피스.html"
            },
        ],
        d2_petner : [
            {
                text :"펫시터 지원",
                href :"./방문돌봄.html"
            },
            {
                text :"훈련사 지원",
                href :"./집중호스피스.html"
            },
            {
                text :"산책 케어 지원",
                href :"./펫플래닛.html"
            },
        ],
    }
}

console.log(`<a href="${gnb.d2.d2_sitter[0].href}">${gnb.d2.d2_sitter[0].text}</a>`);