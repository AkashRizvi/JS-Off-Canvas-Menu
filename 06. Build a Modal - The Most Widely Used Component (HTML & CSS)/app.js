
// --------------- Folder:07, Video 06&07. Creating Modal

const myTrigger = document.querySelector(".trigger");
const mymodal = document.querySelector(".modal");
const myClose = document.querySelector(".close");

function main(){
  myTrigger.addEventListener("click", function(){
    mymodal.classList.add("open");
  })
  
  myClose.addEventListener("click", function(){
    mymodal.classList.remove("open")
  })

//------- This function is created to close the modal when we click outside the model

  window.addEventListener("click",function(event){
    if (event.target === mymodal){
                                                                                    
      mymodal.classList.remove("open")  // check = console.log(event);   also  // console.log(event.target);
    }
  })


}


main();