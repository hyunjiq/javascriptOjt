const yo = ["월","화","수","목","금","토","일"];


let conut = "";
for(var i = 0 ; i < 3; i++){

    conut += `${i + 1}주`;

    for(j in yo){
        conut += `${yo[j]}요일`
    }

    conut += `${i}마침\n`
};

console.log(conut);