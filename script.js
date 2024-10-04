const form = document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault();
    const height= parseInt(document.querySelector('#height').value)
    const weight= parseInt(document.querySelector('#weight').value)
    const results= document.querySelector('.results');
    
    if(height==='' || height<0 || isNaN(height)){
        results.innerHTML=`please enter a valid height you have entered ${height}`
    }
    else if (weight==='' || weight<0 || isNaN(weight)){
        results.innerHTML=`please enter a valid weight you have entered ${weight}`
    }
    else{
        const bmi=(weight/((height*height)/10000).toFixed(2))
        let display;
        if(bmi <18.6 ?display=`You are under weight` : bmi>18.6 && bmi<24.9?display=`You are in Normal range` :display=`You are overweight`){
            results.innerHTML=`<h3>${bmi}<br> ${display}</h3>`
        }
    }
})

const clear= document.querySelector('#clear')
const results= document.querySelector('.results');
clear.addEventListener('click',function(){
    weight.value=''
    height.value=''
    results.innerHTML=''
})