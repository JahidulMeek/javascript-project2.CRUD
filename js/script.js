
let Name=document.querySelector(".Name")
let caption=document.querySelector(".caption")
let postbtn=document.querySelector(".postbtn")
let allpost=document.querySelector(".allpost")
let error=document.querySelector(".error")
// console.log(Name)
// console.log(caption)
// console.log(postbtn)
// console.log(allpost)

//placeholder-এর পুরনো/অরিজিনাল লেখা(Enter your name:,Enter your caption:) ধরে রেখেছো দুইটা ভ্যারিয়েবলে: placeholderText,placeholder2.agulo pore use koresi
const placeholderText = Name.getAttribute("placeholder");
const placeholder2 = caption.getAttribute("placeholder");



 /*   postbtn.addEventListener("click",()=>{
      
        if (!Name.value) {
             Name.classList.add("warning");                         //new class "warning" jukto koresi input tag ar vitore(input tag ase Name variable ar moddhe).ar ai class name ke dhore style koresi color:red;
            Name.setAttribute("placeholder,"Please fill up this name field");
          } 
          
       if (!caption.value) {
            caption.classList.add("warning"); 
            caption.setAttribute("placeholder","Please fill up this caption field");
          }
          
       
      
       else{
        allpost.innerHTML=` <div class="card" style="width: 18rem;">
                            <div class="card-body">
                          <h5 class="card-title">${Name.value}</h5> 
                         <p class="card-text">${caption.value}</p>
                         <button class="btn btn-primary">Edit</button>
                         <button class="btn btn-danger">Delete</button>
                       </div>
                        </div>`
                          // ইনপুট ফিল্ড reset করো
                        Name.value="";
                        caption.value="";
                         // Restore original placeholders
                        Name.setAttribute("placeholder", placeholderText);
                        caption.setAttribute("placeholder", placeholder2);
                         // warning ক্লাস মুছে ফেলে. red colour ar thake nah
                         Name.classList.remove("warning");
                         caption.classList.remove("warning");
       }

})
*/

/*let array=[
  {
    name:"Jahidul",
    caption:"thank you"
  },
  {
    name:"Nahidul",
    caption:"welcome"
  },
  {
    name:"sagor",
    caption:"dear"
  },
   {
    name:"bakul",
    caption:"love"
   }

]
*/
/*let arr=[ 15,2,3 ,43]
arr.map(item=>{
allpost.innerHTML+=`<div class="card" style="width: 18rem;">             <!--  এখানে += মানে হলো: আগের innerHTML-এর সাথে নতুন HTML যোগ করো। amader akhane ager allpost.innerHTML ar value kisui nai-->   
         <div class="card-body">                                            <!--    ar new html jog kora mane 0 index a name:jahiudl,caption:thank you jog kora bujaytese.avabe array maping hove.-->       
       <h5 class="card-title">${item}</h5>                                  
       <p class="card-text">${item}</p>
       <button class="btn btn-primary">Edit</button>
       <button class="btn btn-danger">Delete</button>
     </div>
   </div>`
})
   */

/*🔍 hasError মানে কী? hasError একটা boolean (true/false) type ভেরিয়েবল।

এটা আমরা ব্যবহার করি check করার জন্য, কোনো input ফাঁকা আছে কিনা।*/
     let array=[]
    postbtn.addEventListener("click",()=>{
      let hasError = false;
    if (!Name.value) {
      Name.classList.add("warning");      
     Name.setAttribute("placeholder","Please fill up this name field");  
     hasError = true;                                                     
     } 
     
   if (!caption.value) {
     caption.classList.add("warning"); 
     caption.setAttribute("placeholder","Please fill up this caption field");
     hasError = true;
   }
   if (hasError) {
    return; // Don’t continue if there's any error
  }
   else{

    array.push({
      inputone:Name.value,    //inputone,inputtwo are variable name,ja array te push hove value gulo nia.
      inputtwo:caption.value
    })

    allpost.innerHTML="";
    display();
   
    Name.value="";
    caption.value="";
     // Restore original placeholders
    Name.setAttribute("placeholder", placeholderText);
    caption.setAttribute("placeholder", placeholder2);
     // Remove warning class if previously added
      Name.classList.remove("warning");
      caption.classList.remove("warning");

      }
  })
    function display(){
    array.map(item=>{
    allpost.innerHTML+=`<div class="card" style="width: 18rem;">   
             <div class="card-body">                               
           <h5 class="card-title">${item.inputone}</h5>                  
           <p class="card-text">${item.inputtwo}</p>
           <button class="btn btn-primary">Edit</button>
           <button class="btn btn-danger">Delete</button>
         </div>
       </div>`
    })
     }
   
   
 
 
 
 
 
 
 
 
 
 

 
 
 
 
 
 
 
 
 
 
 
 


   





