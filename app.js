const clock=document.querySelector('.clock');



setInterval(function(){
  let date=new Date();
  let h=date.getHours();
  let m=date.getMinutes();
  let s=date.getSeconds();
  let ampm='';
  if(h>12){
    ampm='PM';
  }
  else{
    ampm='AM';
  }
  clock.innerHTML=`${(h==0) ? h=h+12 : h=Math.abs(12-h)}:${m}:${s} ${ampm}`;
  // `${h}:${m}:${s}`;
},1000);
