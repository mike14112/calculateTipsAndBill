

let inputBill = document.querySelector('.input_bill'),
    btn5  = document.querySelector('.bill_5'),
    btn10  = document.querySelector('.bill_10'),
    btn15  = document.querySelector('.bill_15'),
    btn25 = document.querySelector('.bill_25'),
    btn50  = document.querySelector('.bill_50'),
    billInput = document.querySelector('.tip_input'),
    tips = document.querySelector('.tips_section'),
    tipsContainer = document.querySelector('.tips'),
    numberOfPerson = document.querySelector('.number_of_person'),
    numberOfPerson2 = document.querySelector('.number_of_person2'),
    personInput = document.querySelector('.person_input'),
    btnReset = document.querySelector('.reset'),
    InputTip = document.querySelector('.tip_input'),
    totalContainer = document.querySelector('.total');




const calculateTips = function(){

    btn5.addEventListener('click', () =>{

  

    if(inputBill.value  != '' && personInput.value != '' && personInput.value != ''){
        let total = 0,
            person = 0;

       
        tipsContainer.innerHTML = `${+inputBill.value * 0.05}`;
 
       

        total  += +inputBill.value;
         total += +inputBill.value  * 0.05;

         person = +personInput.value;
         numberOfPerson.innerHTML = `${person}`;
         numberOfPerson2.innerHTML = `${person}`;
      

         totalContainer.innerHTML = `${total}`;

         return total;
     
     }else{
        alert('please enter allrequired fields')
     }
    })

    
    btn10.addEventListener('click', ()=>{
      
       
       
        if(inputBill.value  != '' && personInput.value != ''){
            let total = 0;    
               person = 0;

            tipsContainer.innerHTML = `${+inputBill.value * 0.10}`;
         
        
       
           total  += +inputBill.value;
            total += +inputBill.value  * 0.10;
            person = +personInput.value;
            numberOfPerson.innerHTML = `${person}`;
            numberOfPerson2.innerHTML = `${person}`;
       
           
             totalContainer.innerHTML = `${total}`;
          
             return total;
        
    
        }
        else{
          alert('please enter  all required fields')
        }
       })

       btn15.addEventListener('click', ()=>{
        
        if(inputBill.value  != '' && personInput.value != ''){
            let total = 0;    
            person = 0;

         tipsContainer.innerHTML = `${+inputBill.value * 0.15}`;
      
     
    
        total  += +inputBill.value;
         total += +inputBill.value  * 0.15;
         person = +personInput.value;
         numberOfPerson.innerHTML = `${person}`;
         numberOfPerson2.innerHTML = `${person}`;
    
        
          totalContainer.innerHTML = `${total}`;
       
          return total;
    
        }else{
            alert('please enter all required fields')
        }
       })

       btn25.addEventListener('click', ()=>{
       
        
       
       
        if(inputBill.value  != '' && personInput.value != ''){
            let total = 0;    
            person = 0;

         tipsContainer.innerHTML = `${+inputBill.value * 0.25}`;
      
     
    
        total  += +inputBill.value;
         total += +inputBill.value  * 0.25;

         person = +personInput.value;
         numberOfPerson.innerHTML = `${person}`;
         numberOfPerson2.innerHTML = `${person}`;
    
        
          totalContainer.innerHTML = `${total}`;
       
          return total;
     
        
    
        }else{
            alert('please enter all required fields')
        }
       })
       btn50.addEventListener('click', ()=>{
      
       
       
        if(inputBill.value  != '' && personInput.value != ''){
          let total = 0;    
               person = 0;

            tipsContainer.innerHTML = `${+inputBill.value * 0.50}`;
         
        
       
           total  += +inputBill.value;
            total += +inputBill.value  * 0.50;
            person = +personInput.value;
            numberOfPerson.innerHTML = `${person}`;
            numberOfPerson2.innerHTML = `${person}`;
       
           
             totalContainer.innerHTML = `${total}`;
          
             return total;
    
        }else{
            alert('please enter allrequired fields')
        }
       })
    };

    calculateTips()
    


const costumTip = function () {

    InputTip.addEventListener('change',() => {
 
      let    sum = 0,
             person =  0;

       sum  =  inputBill.value *  InputTip.value / 100;

       tipsContainer.innerHTML = ` $ ${sum}`;

        totalContainer.innerHTML = ` $  ${+inputBill.value + sum}`

         person = +personInput.value

        numberOfPerson.innerHTML = `${person}`;
        numberOfPerson2.innerHTML = `${person}`;
   
   });
}

costumTip()

const resetValue = function (){
    btnReset.addEventListener('click', () =>{
  
        inputBill.value = '';
        tipsContainer.innerHTML = `$ 0.00` 
        totalContainer.innerHTML = `$ 0.00`
        personInput.value = '';
       numberOfPerson.innerHTML  = 'Person';
       numberOfPerson2.innerHTML  = 'Person';
        
     })
}

resetValue()