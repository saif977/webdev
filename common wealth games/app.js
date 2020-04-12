const headerText=document.querySelector(".headerText");
const navbar=document.querySelector(".menu");
const navElement=document.querySelector(".nav-bar");
const navbar1=document.querySelector(".search");
const navElement1=document.querySelector(".nav-bar1");
const read=document.querySelector(".read");
const readContainer=document.querySelector(".read-container");
const joinus=document.querySelector(".joinus");
const joint=document.querySelector(".join-cnt");
const timeline=document.querySelector(".timeline");
const button=document.querySelectorAll("button");




window.addEventListener("load",()=>{
    console.log("loaded");
    headerText.classList.add("loaded");});


navbar.addEventListener("click",()=>{
    
 navElement.classList.toggle("nav-no-disp");
 console.log(navElement.classList.contains("nav-no-disp"))
});


navbar1.addEventListener("click",()=>{
    
   navElement1.classList.toggle("nav-no-disp1");
   console.log(navElement.classList.contains("nav-no-disp1"))
  });


const prop1={
 
  rootMargin:"0px 0px -100px 0px",
  threshold:0
};

const observer1=new IntersectionObserver((entries,observer1)=>{
   entries.forEach((i)=>{
       if(!i.isIntersecting)
        {read.classList.remove("read-slide");
          return;}
       read.classList.add("read-slide");
      console.log("observing");
   })
},prop1);

observer1.observe(readContainer);



const prop2={
 
   rootMargin:"0px 0px -150px 0px",
   threshold:0
 };
 
 const observer2=new IntersectionObserver((entries,observer1)=>{
    entries.forEach((i)=>{
        if(!i.isIntersecting)
         {timeline.classList.remove("r2-slide");
           return;}
        timeline.classList.add("r2-slide");
       console.log("observing");
    })
 },prop2);
 
 observer2.observe(timeline);
 


const prop3={
 
   rootMargin:"0px 0px -100px 0px",
   threshold:0
 };
 
 const observer3=new IntersectionObserver((entries,observer1)=>{
    entries.forEach((i)=>{
        if(!i.isIntersecting)
         {joinus.classList.remove("rslide");
           return;}
        joinus.classList.add("rslide");
       console.log("observing");
    })
 },prop3);
 observer3.observe(joint);





 button.forEach((i)=>{
   const l=document.createElement("i");
    l.className="fas fa-arrow-right fa-2x";
    l.style.color="white";
    i.append(l);
 })


