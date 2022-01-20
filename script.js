const GetCur = document.getElementById('GetCur');
const NotGetCur = document.getElementById('NotGetCur');


async function getName(){
    let response = await fetch('https://www.nbrb.by/api/exrates/currencies');
    let content = await response.json();
    newCont = content.splice(0,303);

    let result = newCont.filter(function(item,index,array){
       return (item.Cur_DateEnd.slice(0,4)) >=2022;
    });
    
    arrCur = result[Math.ceil(Math.random()*result.length)]
    curName = arrCur.Cur_Name
    filtered = arrCur.Cur_DateEnd
    curId = arrCur.Cur_ID

    let curResponse = await fetch(`https://www.nbrb.by/api/exrates/rates/${curId}?ondate=2022-1-1`);
    let curContent = await curResponse.json();
    curRate=curContent.Cur_OfficialRate
    CurName.innerHTML=curName
    CurRate.innerHTML=curRate + "руб."
    FirstPhrase.innerHTML = 'Прикинь'
    SecondPhrase.innerHTML = 'стоит аж'
};

function NotgetName(){
    NotFirstPhrase.innerHTML = 'Все мы такие.'
getName()
};
GetCur.addEventListener('click',getName)
NotGetCur.addEventListener('click',NotgetName)





