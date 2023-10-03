const modal = document.getElementById('modal-subscription');
const btnBack = document.getElementById('btn-back');
const form = document.getElementById('form');


form.addEventListener('submit', validForm);


function validForm(e){
    e.preventDefault();

    const input = document.getElementById('input').value

    const modalActive = document.createElement('div');
    const section =document.getElementById('section');
  
     section.style.transform = 'translateX(-100%)';
     section.style.transition = 'all 2s';
  


        if(input === '' ){

            const fillForm = document.createElement('div');
      
            
           fillForm.innerHTML = `
           
            <div class=' bg-red-600 p-3 w-80 m-auto rounded-md  ' >

                <p class='text-center text-white' >Please fill the Form ! </p>

            </div>
           `

           setTimeout( ( ) =>{
            fillForm.remove();
           }, 2000);

          
            section.style.transform = 'translateX(0%)'    
           
            form.append(fillForm)
        }else{


            modalActive.innerHTML = `


            <div class=  ' bg-gray-800   flex fixed inset-0 p-3  h-auto w-full ' >

                        <div class= ' bg-white lg:bg-white rounded-3xl m-auto p-5 '>
                        
                                <i id="icon" class=" text-5xl fa-sharp fa-solid fa-circle-check mb-5 p-2" style="color: #ff6155; "></i>
                                
                                <h2 class='text-slate-800 font-bold font-roboto text-4xl lg:text-3xl my-4'>Thanks for <br/> subscribing!</h2>

                                    <p class='text-slate-800 font-light text-2xl lg:text-sm font-roboto my-4'>A confirmation email has been sent to : <br/> <strong class='text-red-600'>${input}</strong> Please open it and click <br/> the button inside to confirm your subscription.</p>
                                
                                    <button class='bg-slate-800 p-2 w-full rounded-md my-4 text-white font-roboto font-bold ' id='btn-back'>Dismiss message </button>
                        </div>

            </div>

`

        setTimeout( () =>{

        section.style.transform = 'translateX(0%)';
        section.style.transition = 'all 2s';
        modalActive.remove()
        }, 5000 )

        modal.append(modalActive);



        }

      
}



