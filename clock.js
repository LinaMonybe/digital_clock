function date(){let date=new Date();
let h=date.getHours();
h=h<10?'0'+h:h;
let m=date.getMinutes();
m=m<10?'0'+s:m;
let s=date.getSeconds();
s=s<10?'0'+s:s;
let h1=document.getElementById('h');
h1.innerHTML=h;
let m1=document.getElementById('m');
m1.innerHTML=m;
let s1=document.getElementById('s');
s1.innerHTML=s;

}
setInterval(date,1000);
