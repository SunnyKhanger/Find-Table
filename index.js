var input =document.querySelector('input')
var btn=document.querySelector('button')
var num=document.querySelectorAll('.nu')
var eq=document.querySelectorAll('.eq')
var ind=document.querySelectorAll('.ind')
var table=document.querySelector('#div2')
btn.addEventListener('click',function(){
    if(input.value == ''){
        div2.style.display='none'
    }
    else{
        div2.style.display='inline-block'
        for(i = 0; i<= 9; i++){
            num[i].innerHTML = input.value;
            eq[i].innerHTML = (i+1) * (input.value)
           
        }

      
    }
  

})