
let btn1=document.querySelector("#moon")
let btn2=document.querySelector("#sun")
let b=document.querySelector(".brightness")
let body=document.querySelector("body")
let hamberg=document.querySelector("#hambrg")
let close=document.querySelector("#xi")
let sidebar=document.querySelector(".sidebar")
let icon=document.querySelector(".icon")
btn1.remove()
b.addEventListener("click",()=>{
   
   if(body.classList.toggle("white")){
       btn2.remove()
       b.append(btn1)} 
   else{
        btn1.remove()
       b.append(btn2)
           } })
sidebar.remove() 
close.remove()
hamberg.addEventListener("click",()=>{
   body.append(sidebar)
   hamberg.remove()
   icon.append(close)})
close.addEventListener("click",()=>{
   sidebar.remove(sidebar)
   icon.append(hamberg)
   close.remove()
})





