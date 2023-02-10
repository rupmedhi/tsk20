
let submitbtn=document.getElementById("submit");
let ul=document.getElementById("ullist");

submitbtn.addEventListener("click", StoreData);




function StoreData(e){
    e.preventDefault();
   
     let name=document.getElementById("name").value;
     let email=document.getElementById("email").value;
     let bothVal=`${name} - ${email}`;
     let li=document.createElement("li");
     let text=document.createTextNode(bothVal);
   
     let myObj={
         name,
         email
      }
     
        axios.post(`https://crudcrud.com/api/58b5335845cc43deb4b62b215b819b69/data`, myObj)
          .then((response)=>{
            display(response.data);
          }
          );
}




window.addEventListener("DOMContentLoaded",()=>{
      axios.get(`https://crudcrud.com/api/58b5335845cc43deb4b62b215b819b69/data`)
            .then((response)=>{
               for(let i=0;i<response.data.length;i++){
                  display(response.data[i]);
               }
            }); 

})





function display(respons){
    let li =document.createElement("li");
    li.textContent = respons.name +" -" + respons.email;
   



    let deletebtn = document.createElement("input");
    deletebtn.type = "button";
    deletebtn.value = "Delete";
    li.appendChild(deletebtn);
    
    deletebtn.onclick =()=>{
      // if(confirm("are u sure")){
      //   deleteUser(`${respons._id}`);
      // }
      deleteUser(`${respons._id}`);
    } 
    
    function deleteUser(userId){
         axios.delete(`https://crudcrud.com/api/58b5335845cc43deb4b62b215b819b69/data/${userId}`)
              .then((res)=>{
                ul.removeChild(li);
              })
      }

     
      
    


    // function removeitam(userId){
    //        let ul=document.getElementById("ullist");
    //        let dlt=document.getElementById("userId")
    //        if(dlt){
    //         ul.removeChild(dlt);
    //        }
    // }



    let editbtn = document.createElement("input");
    editbtn.type = "button";
    editbtn.value = "Edit";
    li.appendChild(editbtn);
    ul.appendChild(li);

    editbtn.onclick =()=>{
        // localStorage.removeItem(respons.email);
        // ul.removeChild(li);
        // document.getElementById("name").value = respons.name;
        // document.getElementById("email").value = respons.email;
        editUser(`${respons._id}`);

    }

    function editUser(userid){
      axios.delete(`https://crudcrud.com/api/58b5335845cc43deb4b62b215b819b69/data/${userid}`)
           .then((res)=>{
             ul.removeChild(li);
            document.getElementById("name").value = respons.name;
            document.getElementById("email").value = respons.email;
           })
           .catch((err)=>{
            console.log(err);
           })
     
    }

  }





