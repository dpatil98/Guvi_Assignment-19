const BodyHTML= document.body.innerHTML=`

        <div class="fluid-container ">
            <div class="task-heading "> 
                <h1 class="d-inline mx-5"><a href="index.html"><i class="bi text-white bi-house-fill"></i></a></h1>
                <h1 class="d-inline ">Create a calculator using DOM.</h1>
            </div>
            <div class="container ">
                <div class="Calci-container " >  

                    <div class="d-flex justify-content-evenly">
                        <h4>Calculator</h4>
                        <h5 class="MR" >Mem : ${localStorage.getItem("MR")}</h5>
                    </div>

                    <div class="text-center reflection">
                        <input class="calci-inp " onkeyup="Keycheck()" type="text" placeholder="0" >               
                    </div>

                    <div class="NumKeys-Container row ">
                    
                    </div>
                
                </div>
            </div>
        </div>
        


`;

//const Numkeys=["C","M+","M-","MC",1,2,3,"Del",4,5,6,"/",7,8,9,"+",".",0,"-","*","(",")","=","%",];

const Numkeys=[{danger : "C"}, {primary : "M+"}, {primary  : "M-"}, {danger : "MC"},
               {dark : 1},     {dark : 2},         {dark : 3},        {danger :"Del" },
               {dark: 4},      {dark: 5},          {dark : 6},        {info : "/"},
               {dark : 7},     {dark: 8},          {dark : 9},        {info : "+"},
               {info : "."}, {dark : 0},         {info : "-"},    {info : "*"},              
               {info : "("}, {info : ")"},     {success: "="},    {info : "%"},];

const calciContainer= document.querySelector(".NumKeys-Container"); 


//function to render keys on calculator
Numkeys.forEach( (k) => {


            calciContainer.innerHTML+=`
                <div class="text-white col-3">
                <div class="key-btn text-center bg-${Object.keys(k)}" onClick="pressedKey('${Object.values(k)}',false)"  >
                    ${Object.values(k)}     
                </div>
                </div>
                

            `;


});

const inputBox= document.querySelector(".calci-inp");

//MR reprents the Memory (line 13)
const MRText= document.querySelector(".MR");

//keycheck() is onkeyup fucntion on inputbox to check letters and unwanted symbols (line 17)
//
  Keycheck=()=>{ inputBox.value.match(/[a-zA-Z!@#$^&_{}:"";?,<>]/g ) ? pressedKey("DelLetters",true): null}

inputBox.addEventListener("keyup", (Pkey)  =>{ (Pkey.key==='Enter') ? pressedKey("=") : null; });
                                    
                                    // console.log(Pkey.key);                            
                                    
                                    //Pkey.key.match(/[a-zA-Z!@#$^&_{}:"";?,<>]/g ) ? pressedKey("DelLetters",true)
                         



//pressedKey() is called after pressing any key (line 43) 
//val variable stores the pressed button and isLetter represnts boolean value to used to delete letters
pressedKey = (val ,isLetter) =>
{
   // console.log(isLetter);


    switch(val)
    {

        case "C" :
            {
                //clearing inpute field
                inputBox.value=""; 
                break;
            }
        case "M+" : //to add the stored value in input field
            {   
                if(inputBox.value) 
                {
                    if(localStorage.getItem("MR"))
                    {
                        inputBox.value= parseFloat(pressedKey("=")) + parseFloat(localStorage.getItem('MR'));
                    }
                    else
                    {
                        localStorage.setItem("MR",pressedKey("=")); //to solve expression first then store the value in memory
                        MRText.textContent=`Mem : ${localStorage.getItem('MR')}`;
                    }
                   
                }
                
                break;
            }
        case "M-" : //to substracting the stored value in input field
            {
                if(inputBox.value)
                {
                    if(localStorage.getItem("MR"))
                    {
                        inputBox.value= parseFloat(pressedKey("=")) - parseFloat(localStorage.getItem('MR'));
                    }
                    else
                    {
                        localStorage.setItem("MR",pressedKey("=")); //to solve expression first then store the value in memory
                        MRText.textContent=`Mem : ${localStorage.getItem('MR')}`;
                    }
                   
                }
                break;
            }
        case "MC" : //to cleare localStorage
            {
                localStorage.removeItem("MR");
                MRText.textContent=`Mem : ${localStorage.getItem('MR')}`;
                break;
            }
        case "=" :
            {
                let result=eval(inputBox.value); 
                inputBox.value = result;
                return result; //returning result to M+ and M-
               // break;
            }
        case "DelLetters" :
            {
                let values=inputBox.value.split("");
                values.pop();
                console.log();
                if( inputBox.value.match(/[a-zA-Z!@#$^&_{}:"";?,<>]/g )  )
                 {        
                     inputBox.value=values.join(""); 
                     pressedKey("DelLetters",false); //using recursive to del all the letters in field if someone paste string on inpute field
                 }
                 

                //  inputBox.value=values.join("");
                (isLetter) ? alert("Please only type a Number") : null;
                  
                 break;  
            }
        case "Del" : //afterpressing del key 
            {
                let values=inputBox.value.split(""); //converting the values into array and poping out last value
                values.pop();
                console.log();     
                inputBox.value=values.join(""); 
                  
                 break;  
            }
        default : //if pressed keys are not from given cased add them to inpute field
                 // bcus they will be Numbers and Opratores
            {
                if( val.match(/[^a-zA-Z ]/g ) )  //val.match(/[0-9]/g)
                    {
                    // console.log(val);
                        inputBox.value+=val;    
                    }
                    break;

            }

    }


 
//  if(val==="=")
//     {
//        inputBox.value = eval(inputBox.value);
       
//     }

//     else if( val.match(/[^a-zA-Z ]/g ) )  //val.match(/[0-9]/g)
//     {
//        // console.log(val);
//         inputBox.value+=val;    
//     }

//     else if(val==="Del" && (inputBox.value) )
//     {
        
//         let values=inputBox.value.split("");

//        values.pop();

//        if( inputBox.value.match(/[a-zA-Z!@#$^&_{}:"";?,<>]/g )  )
//         {        
//             inputBox.value=values.join(""); 
//             pressedKey("Del",false);
//         }
//         (isLetter) ? alert("Please only type a Number") : null;
//        // inputBox.value=values.join("");
       
//         //console.log(values);
//     }
    
//     console.log( typeof(val) );
               
    
    
 }