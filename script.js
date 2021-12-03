
document.body.innerHTML=`

        <div>
            <div class="task-heading">
                <h1>Task Number 19</h1>
            </div>
            <div class="container">
                <div class="con-box , calci-box" > </div>
                <div class="con-box , form-box" >  </div>
            </div>
        </div>

`;

const calciBox= document.querySelector(".calci-box"); 

calciBox.innerHTML=`

                <a href="Calci.html">
                <img src="https://media.istockphoto.com/vectors/calculator-isolated-on-a-colored-background-vector-id544462430?b=1&k=20&m=544462430&s=170667a&w=0&h=FtnsbMoG_joGyOryS0lnqmctUVpqv3HQM96tkf85TB0=" alt="Calculator-Img" srcset="">
                </a>
                <h1 class="func-title">Calculator</h1> 
            

`;

const FormBox= document.querySelector(".form-box"); 

FormBox.innerHTML=`

          
                <a href="HTMLForm.html">
                <img src="https://thumbs.dreamstime.com/b/vector-clipboard-checklist-checkmark-business-tablet-completed-application-form-115614354.jpg" alt="Form-Img" srcset="">                
                </a>
                <h1 class="func-title">HTML Form</h1> 
               
            

`;

