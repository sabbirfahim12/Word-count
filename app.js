let button=document.getElementById('btn');
button.addEventListener("click",function(){
let word=document.getElementById('str').value;
let count=word.length;
let outputDiv=document.getElementById('output');
//if used html tag then have to write innerHTML
outputDiv.innerHTML=`<h1>${count}</h1>`;//NEW RULE I LEARNT

})
