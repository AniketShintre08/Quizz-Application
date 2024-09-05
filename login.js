
let username = document.querySelectorAll("input")[0];
let pass = document.querySelectorAll("input")[1];
let form = document.querySelector("form");
let euser = document.getElementById("uname");
let epass = document.getElementById("upass");
let ebtn = document.getElementById("btn");
let storage = JSON.parse(localStorage.getItem("details"));



// console.log(username, pass, form, euser, epass, ebtn, storage);


form.addEventListener("submit", (e) => {
    euser.innerHTML="";
    ebtn.innerHTML="";
    epass.innerHTML="";

    let oneUser=storage.find(
        (e)=>{
            if ((e.mobile==username.value && e.password==pass.value) || (e.mail==username.value && e.password==pass.value)) {
                return e;
            }
        }
    );
   

    if (username.value == "" && pass.value == "") {
        e.preventDefault();
        euser.innerHTML = "Enter useraname.";
        epass.innerHTML = "Enter the password"
    } else if (username.value == "") {
        e.preventDefault();
        euser.innerHTML = "Enter useraname.";
    } else if (pass.value == "") {
        e.preventDefault();
        epass.innerHTML = "Enter password.";
    } 
    else if(oneUser){
        alert("logged in successfully");
        // e.preventDefault();
        localStorage.setItem("quizzUser",JSON.stringify(oneUser));
    }  
    else {
        e.preventDefault();
        alert("match not found.");
    }

})

let h3=document.querySelector("h3");
h3.addEventListener("click", ()=>{
    if (h3.innerHTML=="show") {
        pass.type="text";
        h3.innerHTML="hide";
    }else{
        h3.innerHTML="show";
        pass.type="password";
    }
})