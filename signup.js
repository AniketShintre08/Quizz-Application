
let uname=document.querySelectorAll("input")[0];
let ulast=document.querySelectorAll("input")[1];
let email=document.querySelectorAll("input")[2];
let number=document.querySelectorAll("input")[3];
let pass=document.querySelectorAll("input")[4];
let cpass=document.querySelectorAll("input")[5];


let form=document.querySelector("form");

let ename=document.querySelectorAll("span")[0];
let elast=document.querySelectorAll("span")[1];
let eemail=document.querySelectorAll("span")[2];
let enumber=document.querySelectorAll("span")[3];
let epass=document.querySelectorAll("span")[4];
let ecpass=document.querySelectorAll("span")[5];

console.log(uname, ulast, email, number, pass, cpass, form, ename, elast, eemail, enumber, epass, ecpass);
let storage=[];
let dataFromStorage = JSON.parse(localStorage.getItem("details"));
if(dataFromStorage){
    storage=dataFromStorage;
}

form.addEventListener("submit", (e)=>{
    // e.preventDefault();
    let flag=true;
    let mobileCheck=storage.find((e)=>{
        if(e.mobile==number.value){
            return e;
        }
    })

    let emailCheck=storage.find((e)=>{
        if (e.mail==email.value) {
            return e;
        }
    })

    //first name
    let regx=/^[a-zA-Z]{1,17}$/;
    if (uname.value=="") {
        ename.innerHTML="*first name is required";
        flag=false;
        e.preventDefault();
    }else if (regx.test(uname.value)) {
        ename.innerHTML="";
    }else{
        ename.innerHTML="invalid first name!!!"
        flag=false;
        e.preventDefault();
    }

    //last name
    if (ulast.value=="") {
        elast.innerHTML="*last name is required";
        flag=false;
        e.preventDefault();
    }else if (regx.test(ulast.value)) {
        elast.innerHTML="";
    }else{
        elast.innerHTML="invalid first name!!!"
        flag=false;
        e.preventDefault();
    }

    //email
    if (emailCheck) {
        eemail.innerHTML="email is already registerd.";
        flag=false;
        e.preventDefault();
    }else if (email.value=="") {
        eemail.innerHTML="*email id is required";
        flag=false;
        e.preventDefault();
    }else{
        eemail.innerHTML="";
    }

    //mobile
    let regxx=/^[6-9]{1}[0-9]{9}$/;
    if (mobileCheck) {
        e.preventDefault();
        enumber.innerHTML="mobile no. is already registered!!!";
        flag=false;
    }else if (number.value=="") {
        enumber.innerHTML="*mobile no. id is required";
        flag=false;
        e.preventDefault();
    }else if (regxx.test(number.value)) {
        enumber.innerHTML="";
    }else{
        enumber.innerHTML="enter valid mobile number!!!";
        flag=false;
        e.preventDefault();
    }

    //password
    let regxxx=/^[a-zA-Z0-9!@]{8,15}$/;
    if (pass.value=="") {
        epass.innerHTML="*password is required"
        flag=false;
        e.preventDefault();
    }else if (regxxx.test(pass.value)) {
        epass.innerHTML="";
    }else{
        epass.innerHTML="create valid password!!!"
        flag=false;
        e.preventDefault();
    }

    //confirm pass
    if (cpass.value=="") {
        ecpass.innerHTML="*confirm password is required";
        flag=false;
        e.preventDefault();
    } else if(cpass.value==pass.value){
        ecpass.innerHTML="";
    }else{
        ecpass.innerHTML="password is not matching";
        flag=false;
        e.preventDefault();
    }

   if (flag) {
   
    let details={
        first:uname.value,
        last:ulast.value,
        mail:email.value,
        mobile:number.value,
        password:pass.value,
        quizz:null
    }
    storage.push(details);
    localStorage.setItem("details", JSON.stringify(storage));
   }
   

})
