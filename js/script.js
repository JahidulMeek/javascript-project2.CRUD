
// let Name=document.querySelector(".Name")
// let caption=document.querySelector(".caption")
// let postbtn=document.querySelector(".postbtn")
// let allpost=document.querySelector(".allpost")
// let error=document.querySelector(".error")

// console.log(Name)
// console.log(caption)
// console.log(postbtn)
// console.log(allpost)

//placeholder-এর পুরনো/অরিজিনাল লেখা(Enter your name:,Enter your caption:) ধরে রেখেছো দুইটা ভ্যারিয়েবলে: placeholderText,placeholder2.agulo pore use koresi
// const placeholderText = Name.getAttribute("placeholder");
// const placeholder2 = caption.getAttribute("placeholder");
// 
// 

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
let name=document.querySelector(".name")
let caption=document.querySelector(".caption")
let postbtn=document.querySelector(".postbtn")
let allpost=document.querySelector(".allpost")
let error=document.querySelector(".error")
const placeholderText = name.getAttribute("placeholder");
const placeholder2 = caption.getAttribute("placeholder");
let updateBtn=document.querySelector(".updateBtn")


     let array=[]
    postbtn.addEventListener("click",()=>{
      let hasError = false;
    if (!name.value) {
         
     name.setAttribute("placeholder","Please fill up this name field"); 
     name.classList.add("warning");   
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
      name:name.value,    //inputone,inputtwo are variable name,ja array te push hove value gulo nia.
      caption:caption.value
     
    })
    
    allpost.innerHTML="";
    display();
   
    name.value="";
    caption.value="";
     // Restore original placeholders
    name.setAttribute("placeholder", placeholderText);
    caption.setAttribute("placeholder", placeholder2);
     // Remove warning class if previously added
      name.classList.remove("warning");
      caption.classList.remove("warning");

      }
  })
    function display(){
//Display updated posts start:এই অংশটা array এর সব item কে HTML আকারে দেখায়। অর্থাৎ, তুমি যখন update করো বা কিছু delete করো, তখন এই অংশ নতুন করে updated array দিয়ে innerHTML তৈরি করে।
    array.map(item=>{
    allpost.innerHTML+=`<div class="card" style="width: 18rem;">   
             <div class="card-body">                               
           <h5 class="card-title">${item.name}</h5>                  
           <p class="card-text">${item.caption}</p>
           <button class="btn btn-primary edit">Edit</button>
           <button class="btn btn-danger delete">Delete</button>
         </div>
       </div>`
    })
//Display updated posts end


    let deleteBtn= document.querySelectorAll(".delete");
    let convertDeleteBtn=Array.from(deleteBtn)
    // console.log(convertDeleteBtn);
    convertDeleteBtn.map((item,index)=>{
     item.addEventListener("click",()=>{  //anonymous founction is auto called.item ar upor click korle auto fuction call hove.
            array.splice(index,1)  //index=item dilau noprolem
             allpost.innerHTML=""
             display();
           
     })
    })
    let editBtn=document.querySelectorAll(".edit");
    let convertEditBtn=Array.from(editBtn)
    convertEditBtn.map((item,index)=>{
       item.addEventListener("click",()=>{
        name.value=array[index].name
      caption.value=array[index].caption
      updateBtn.style.display="block";
      postbtn.style.display="none";
       indexStore=index;
     
     
       })        
    })
  }


    let indexStore;
    updateBtn.addEventListener("click",()=>{
     array[indexStore].name=name.value
     array[indexStore].caption=caption.value
    
     allpost.innerHTML="";
     display()
     name.value="";
     caption.value="";
     updateBtn.style.display="none";
     postbtn.style.display="block";
    
        })
    
   
   /*🔁 Edit আর Delete — দুটোই একই flow follow করে:

1.array পরিবর্তন হয় (edit বা delete)

2.innerHTML clear করা হয়

3.নতুন করে সব post দেখানো হয়

4.নতুন event listener বসানো হয়*/
   
   
   
   
   
   
   
   
   
   
   
   

    















    
    
    

  
  
  
  
  
    
   
    
 
 
 
 
 
 
 
 
 

 
 
 
 
 
 
 
 
 
 
 
 


   





