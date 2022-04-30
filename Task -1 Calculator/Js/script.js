var getinput=document.getElementById('input_number');               //input field
var gethistory=document.getElementById('input_preview');           //previous field
var buttons=document.querySelectorAll('button');                //buttons

//display the value in input field
function display(val){
   return getinput.innerText+=val;
}

//display the value in previous field
function history(){
    return gethistory.innerText=val;
}

for(key of buttons){
    key.addEventListener('click',(event)=>{
        
        buttonText=event.target.innerText;

        if(buttonText =='AC'){
            //Clear both field
            getinput.innerText="";
            gethistory.innerText="";
        }

        else if(buttonText =='='){
            
            if(getinput.innerText!="" || gethistory.innerText!=""){
            //  Move value in previous Field
            let text_value=getinput.innerText;
            gethistory.innerText=text_value;

            //Calculation
            let result=eval(text_value);
            getinput.innerText=result;
            }
           
        }

        else if(buttonText =='CE'){
            
            getinput.innerText=getinput.innerText.slice(0 , -1);

            //if history field is not empty
            if(gethistory.innerText!=""){
                gethistory.innerText=gethistory.innerText.slice(0 , -1);
            }
        }

        else{
            display(buttonText);
        } 
    });
}