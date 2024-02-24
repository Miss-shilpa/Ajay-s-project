 var a = 0;

 document.getElementById("count").innerHTML = a;

 var first = document.querySelector("#first");
 var sec = document.querySelector("#sec");

first.addEventListener("click", function(){ 
     a = a + 1;
    document.getElementById("count").innerHTML = a;
})

sec.addEventListener("click", function(){
    a = a - 1;
    document.getElementById("count").innerHTML = a;    
})
