const year=new Date().getFullYear();
const newyear=new Date(`januray 1 ${year+1} 00:00:00`);

    const days=document.getElementsByClassName("days");
    const hours=document.getElementsByClassName("hours");
    const minutes=document.getElementsByClassName("minutes");
    const seconds=document.getElementsByClassName("seconds");
    
function countdown()
{
    const curDate = new Date();
    const diff=newyear-curDate;
    
    const d=Math.floor(diff/1000/60/60/24);
    const h=Math.floor((diff/1000/60/60 )%24);
    const m=Math.floor((diff/1000/60)%60);
    const s=Math.floor((diff/1000)%60);    
    days[0].innerHTML=d<10?"0"+d:d;
    hours[0].innerHTML=h<10?"0"+h:h;
    minutes[0].innerHTML=m<10?"0"+m:m;
    seconds[0].innerHTML=s<10?"0"+s:s;
    
}
 
setInterval(countdown,1000);
