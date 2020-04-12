const annc=document.querySelector(".announcement");
const und=document.querySelector(".und");
let c=0;

und.addEventListener("click",()=>{
   ++c;
   if(c==1)
   annc.style.display="none";
  
});