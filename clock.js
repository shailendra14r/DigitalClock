let date=new Date();
let h=document.getElementById('hour');
h.innerText=`${date.getHours()}`;
let m=document.getElementById('minute');
m.innerText=`${date.getMinutes()}`;
let s=document.getElementById('second');
s.innerText=`${date.getSeconds()}`;
setInterval(()=>{
    let v1=s.innerText,v2=m.innerText;
    v1=(++v1)%59;
    if(v1==0){
        v2=(++v2)%59;
        if(v2<10){
            m.innerText=`0${v2}`;
        }
        else{
            m.innerText=`${v2}`;
        }
    }
    if(v1<10){
        s.innerText=`0${v1}`;
    }
    else{
        s.innerText=`${v1}`;
    }
},1000);