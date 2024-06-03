const test = document.querySelectorAll(".num1");
const clear = document.querySelector(".clear");
const Del = document.querySelector(".Delete");
const equel = document.querySelector(".equal");
const myinput = document.querySelector(".value");

test.forEach(element => {
   element.addEventListener("click" , () =>{
 myinput.value += element.innerHTML;
   })
});

equel.addEventListener("click" , () => {
    if(!isNaN(myinput.value[myinput.value.length -1])  && !isNaN(myinput.value[0])){
        myinput.value = eval(myinput.value);
    }
})

Del.addEventListener("click" , () =>{
 myinput.value = "" ;  
})

clear.addEventListener("click" , () =>{
myinput.value = myinput.value.slice(0 ,-1);
})

