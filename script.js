const form=document.querySelector("form")
form.addEventListener('submit', function(e){
    e.preventDefault();
    const height=parseInt(document.querySelector('#height').value)
    const Weight=parseInt(document.querySelector('#Weight').value)
    const result=document.querySelector('#result')
    const guide=document.querySelector('#guide')
    if(height=='' || height<0 || isNaN(height)){
        result.innerHTML=`Enter Valid Height ${height}`
    }
    else if(Weight=='' || Weight<0 || isNaN(Weight)){
        result.innerHTML=`Enter Valid Weight ${Weight}`
    }
    else{
        const bmi=(Weight/((height*height)/10000)).toFixed(2);
        result.innerHTML=`Your BMI Is <span>${bmi}</span>`;
        result.style.color="white"
        result.style.fontSize="20px"
        result.style.fontWeight="700"
        if(bmi<18.6){
            guide.innerHTML="Under Weight"
            guide.style.color="yellow"
        }
        else if(bmi>18.6 && bmi<24.9){
            guide.innerHTML="Normal Range"
            guide.style.color="green"
        }
        else if(bmi>24.9){
            guide.innerHTML="Over Weight"
            guide.style.color="red"
        }
        guide.style.fontSize="20px"
        guide.style.fontWeight="700"
    }
})
