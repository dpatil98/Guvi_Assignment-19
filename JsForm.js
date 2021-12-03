//Main structure of HTML 
const BodyHTML= document.body.innerHTML=`

        <div class="fluid-container ">
            <div class="task-heading ">
                <h1 class="d-inline mx-5"><a href="index.html"><i class="bi text-white bi-house-fill"></i></a></h1>
                <h1 class="d-inline ">  DOM Manipulation with Forms</h1>
            </div>
            <div class="container-fluid ">
                <div class="Form-container " >

                        <div class="d-flex">
                            <h4 >Choose a Pen : </h4>
                            <i class="bi bi-pen-fill m-2 text-danger"  onclick="pen('red')   "  ></i>
                            <i class="bi bi-pen-fill m-2 text-primary" onclick="pen('blue') " ></i>
                            <i class="bi bi-pen-fill m-2 text-dark"    onclick="pen('black')   "    ></i>
                        </div>

                        <form class="form" action="" method="">      
                            <div><label><h4>Registration Form :</h4></label></div>
                            <br>
                        </form> 
                </div>
                
                <div class="tableContainer text-center">
                     <table class="tableBody">
                     </table>
                </div>
            </div>
        </div>
        


`;

// Inputfield Data ...so Inputs field can be created ezly without changing the code
const FormInputs = [
                    {
                    text:{
                            0:{  
                                label:"First Name",
                                DBKey:"firstName",  
                                                          
                              },
                            1:{
                                label:"Last Name",
                                DBKey:"lastName", 
                              },
                            2:{
                                label:"Address",
                                DBKey:"address", 
                              },
                            6:{
                                label:"State",
                                DBKey:"state", 
                              },
                            7:{
                                label:"Country",
                                DBKey:"country", 
                              }
                    },
                    },
                    {
                    number:{
                            3:{
                                label:"Pincode",
                                DBKey:"pincode",
                            }
                    }, }  ,
                    {
                    radio:{
                            4:{
                                Catagorylabel:"Gender",
                                DBKey:"gender",
                                label:[ "Male",
                                        "Female",
                                        "Other",],
                            //     value:[
                            //             "Male",      //element inside values and label should have same index respectivly.
                            //             "Female",  //optional 
                            //             "Other"
                            //     ],
                                }
                    },},
                    {
                    checkbox:{
                            5:{
                                Catagorylabel:"Choice Of Food",
                                DBKey:"foods",
                                label:[ "Indian Food",
                                        "Italian Food",
                                        "Street Food",
                                        "SeaFood",
                                        "Chinese Food"],
                            }
                    },}

                    ];


const formBody= document.querySelector(".form"); //creating DOM obj to store Form Inputs (Registration Form)

let  penColor="blue"; //default pen color
     

function pen(p)
{
    //this fucntion will be called after clicking on Pen Icon
    //it will store pen in localstorage and refresh the page
    //after refreshing form will rerender and class of inputfield will change ..the class will represent a pen

    penColor=p;
    console.log(penColor);

    formBody.innerHTML=`<div>
                        <label><h4>Registration Form :</h4></label> 
                        </div>
                        <br>`;
    ReRenderForm(0);
    
}



//function to Render the Form
//variable rank will filter a inpute field's rank.
function ReRenderForm( rank ){
    for(i of FormInputs)  //for iterating through Input types..It will itreate 4 times 
                            //also it will genrate InpurForm
    {

        for(j in i[Object.keys(i)]) //for iterating through numbers of input fields (it will iterate 8 times ) j will represent the keys 0,1,2,6,7,3,4,5.
        {
            //console.log(j); 
                
            //const fil = FormInputs.filter( (v) => { console.log(v[Object.keys(v)][rank] ) }); working dont touch it

            const fil = FormInputs.filter( (v) => v[Object.keys(v)][rank] );  //filtering out a parent Object which contains inputfield 
                                                                             //EX:  Array(1)0:
                                                                                            // text:
                                                                                            // 0: {label: 'First Name', DBKey: 'firstName'}
                                                                                            // 1: {label: 'Last Name', DBKey: 'lastName'}
                                                                                            // 2: {label: 'Address', DBKey: 'address'}
                                                                                            // 6: {label: 'State', DBKey: 'state'}
                                                                                            // 7: {label: 'Country', DBKey: 'country'}

    
            //console.log(fil[0].text[0]);
            let currentInput= Object.values(fil)[0]; //text{0,1,2,5,6}....

            let currentObject=currentInput[Object.keys(currentInput)][rank]; //->{Catagorylabel:"Gender", label:[ "Male","Female", "Other",],}
            let Inptype = Object.keys(currentInput)[0]; //-> storeing key into IunputType 
                                                        // key is indexed at 0 on current filtered object
                                                        //key also represents the type of input field

            switch(Inptype){

                        case "text" :{

                            formBody.innerHTML+=`    
                            <div class="d-flex justify-content-between ">   
                            <label >${currentObject.label} :</label>
                            <input class="${penColor}" type=${Inptype} name="${currentObject.DBKey}" placeholder="${currentObject.label}"  required >
                            </div>   
                            `;

                            break;
                        }
                        case "number" :{

                            formBody.innerHTML+=` 
                            <div class="d-flex justify-content-between">       
                            <label for="">${currentObject.label} :</label> 
                            <input class="${penColor}" name="${currentObject.DBKey}" type=${Inptype} placeholder="${currentObject.label}" pattern="[0-9]{6}" min="99999" required >
                            </div>   
                            `;

                            break;
                        }
                        case "radio" :{
                                    
                            formBody.innerHTML+=`
                            <div>    
                            <label for="">${currentObject.Catagorylabel} :</label>
                            </div>
                            `;

                            for( let i in currentObject.label)
                            {
                            formBody.innerHTML+=` 
                                    <div>
                                    <input class="${penColor}" type="${Inptype}" name="${currentObject.DBKey}" value="${currentObject.label[i]}" id="${currentObject.label[i]}" required >
                                    <label for="${currentObject.label[i]}">${currentObject.label[i]} </label>
                                    </div>`;      
                            }
                            break;
                        }
                        case "checkbox" :{

                            formBody.innerHTML+=` 
                            <div> 
                            <label for="">${currentObject.Catagorylabel} :</label>
                            </div>
                            `;
                            
                            for( let i in currentObject.label)
                            {
                            formBody.innerHTML+=`  
                                    <div>
                                    <input class="${penColor}" type="${Inptype}" name="${currentObject.DBKey}" value="${currentObject.label[i]} id="${currentObject.label[i]}" >
                                    <span class="checkmark"></span>
                                    <label for="${currentObject.label[i]}">${currentObject.label[i]} </label>
                                    </div>
                                    `;      
                            }
                            break;
                        }


            }

    rank++;
        }
    }

    
    formBody.innerHTML+=`<div class="p-3" ></div> <div class="text-center "> <input class="${localStorage.getItem("pen")}" type="Submit" name="Submit" > </div>`;

}

ReRenderForm(0);


 users=[
        {
            id:"0",
            firstName:"John ",
            lastName:"Doe",
            address :"Lorem ipsum. Eum possimus alias ex",
            pincode:"000000", 
            gender:"Male" ,
            foods:[" Indian Food ",
                    " Italian Food ",
                    " Street Food ",
                    " SeaFood ",
                    " Chinese Food "] ,
            state :"MH",
            country:"India",
            penColor:"blue"

        },
        {
            id:"1",
            firstName:"John ",
            lastName:"Doe",
            address :"Lorem ipsum consectetur adipisicing elit",
            pincode:"000001", 
            gender:"Male" ,
            foods:["Indian Food ",
                    "Italian Food ",
                    "Chinese Food "] ,
            state :"TK",
            country:"India",
            penColor:"red",

        },
        {
            id:"2",
            firstName:"John ",
            lastName:"Doe",
            address :"Lorem ipsum dolor sit amet elits ex",
            pincode:"000002", 
            gender:"Male" ,
            foods:["Indian Food ",
                    
                    "SeaFood "] ,
            state :"TN",
            country:"India",
            penColor:"black",

        },
        {
            id:"3",
            firstName:"John ",
            lastName:"Doe",
            address :"Lorem ipsum dolor sit elits ex",
            pincode:"000003", 
            gender:"Female" ,
            foods:["Indian Food ","Chinese Food "] ,
            state :"GJ",
            country:"India",
            penColor:"red",

        },

 ];


const tableBody= document.querySelector(".tableBody"); //insids of <table> </table>

function ReRenderTable()
{

    tableBody.innerHTML=`
      
        <tr class="text-center black">
        <th>First Name</th>
        <th>Last Name</th>
        <th>Address</th>
        <th>Pincode</th>
        <th>Gender</th>
        <th>Food</th>
        <th>State</th>
        <th>Country</th>
        </tr>    
   

      `;



//for loop will create rows for stored users
for(user of users)
    {

    // console.log(user);
    tableBody.innerHTML+=`

                    <tr class="text-center ${user.penColor}">
                        <td>${user.firstName}</td>
                        <td>${user.lastName}</td>
                        <td>${user.address}</td>
                        <td>${user.pincode}</td>
                        <td>${user.gender}</td>
                        <td>${user.foods.map(v => v)}</td>
                        <td>${user.state}</td>
                        <td>${user.country}</td>            
                    </tr>

                        `;
    }

// tableBody.innerHTML=`

//     <div class="row text-center black">
            
//         <div class=" col-2 ">
//             <h5 >First Name</h5>
//         </div>
//         <div class="col-2">
//             <h5 >Last Name</h5>
//         </div>
//         <div class="col-2">
//             <h5 >Address</h5>
//         </div>
//         <div class="col-1">
//             <h5 >Pincode</h5>
//         </div>
//         <div class="col-1">
//             <h5 >Gender</h5>
//         </div>
//         <div class="col-2">
//             <h5 >Food</h5>
//         </div>
//         <div class="col-1">
//             <h5 >State</h5>
//         </div>
//         <div class="col-1">
//             <h5 >Country</h5>
//         </div>

//     </div> `;





//     for(user of users)
//     {

//     // console.log(user);
//     tableBody.innerHTML+=`
                
//                         <div class="row text-center ${user.penColor}">
                                
//                             <div class=" col-2 ">
//                             <p>${user.firstName}</p>
//                             </div>
//                             <div class="col-2">
//                             <p>${user.lastName}</p>
//                             </div>
//                             <div class="col-2">
//                             <p>${user.address}</p>
//                             </div>
//                             <div class="col-1">
//                             <p>${user.pincode}</p>
//                             </div>
//                             <div class="col-1">
//                             <p>${user.gender}</p>
//                             </div>
//                             <div class="col-2">
//                             <p>${user.foods.map(v => v)}</p>
//                             </div>
//                             <div class="col-1">
//                             <p>${user.state}</p>
//                             </div>
//                             <div class="col-1">
//                             <p>${user.country}</p>
//                             </div>

//                         </div>

//                         `;
//     }
}   

ReRenderTable();

const Form =document.querySelector(".form");


//event listener after clicking on submit button
Form.addEventListener("submit" ,  (e) => 
{
    e.preventDefault();
    var data = new FormData(Form); //all data inside <form> with class.form will be stored in var data... line(405)
    const newUser = {}; //structure to store extracted data from  Form
    let CheckboxValues=[];     

   let Foodcount=1; //to check if Selectes foods are atleast two..
                    //value 1 bcus 1 food will be stored when createing object(line 423-428)


    for(const [name,value] of data) //name represnts the Key and value represents value from form.
    {
      
        if(!newUser[name])
        {   
            
            CheckboxValues=[];  //so it can be empty again after finishing checkbox array. bcus name of another checkbox will be different 
            newUser[name]=value;

        }else
        {   
            
            if(!CheckboxValues[0]) //if CheckboxValues is empty
            {   
                CheckboxValues.push(newUser[name]); 
                
            }
            Foodcount++;
            CheckboxValues.push(value);
            newUser[name]=CheckboxValues;
           
           // console.log(  newUser[name]);
        }
        newUser["penColor"]= penColor; 
        

    }
    if(Foodcount<2){ return alert("Please Select at list 2 Foods "); }
    else{Foodcount=1};
    users[users.length] = newUser;
    
    formBody.innerHTML=`<div><label><h4>Registration Form :</h4></label></div><br>`;
    ReRenderForm(0);
    ReRenderTable();
})

                
localStorage.removeItem("pen"); // to empty the localstorege after setting class to input

