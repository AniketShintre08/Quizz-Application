let detailss=JSON.parse(localStorage.getItem("details"));
let quizzUser=JSON.parse(localStorage.getItem("quizzUser"));
// console.log(details, quizzUser);
let body=document.querySelector("body");

if (quizzUser) {
    if (quizzUser.quizz) {
        body.innerHTML=`<h1>test is already submitted <a href=./result.html>check here</a></h1>`;
    }else{
        mainFunction();
    }
}else{
    alert("Log in first");
    window.location.href="./login.html";
}

function mainFunction(){

let storage=[
    { 
        id: 1,
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAns: 2, // Index of "Paris"
        userAns:null,
        visited:false
    },
    {
        id: 2,
        question: "Which language is primarily used for web development?",
        options: ["Python", "JavaScript", "C#", "Java"],
        correctAns: 1,
        userAns:null,
        visited:false
    },
    {
        id: 3,
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
        correctAns: 1 ,// Index of "Leonardo da Vinci"
        userAns:null,
        visited:false
    },
    {
        id: 4,
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correctAns: 3, // Index of "Pacific Ocean"
        userAns:null,
        visited:false
    },
    {
        id: 5,
        question: "In which year did World War II end?",
        options: ["1945", "1939", "1918", "1963"],
        correctAns: 0, // Index of "1945"
        userAns:null,
        visited:false
    },
    {
        id: 6,
        question: "What is the chemical symbol for Gold?",
        options: ["Au", "Ag", "Fe", "Pb"],
        correctAns: 0 ,// Index of "Au"
        userAns:null,
        visited:false
    },
    {
        id: 7,
        question: "Which country hosted the 2016 Summer Olympics?",
        options: ["China", "Brazil", "Greece", "United Kingdom"],
        correctAns: 1, // Index of "Brazil"
        userAns:null,
        visited:false
    }
];
console.log(storage);


let questionCont=document.querySelector("#actual-question");
let optionCont=document.querySelector("#actual-option");
let btnCont=document.querySelector("#actual-btn");
// console.log(questionCont, optionCont, btnCont);

let footer=document.querySelector("footer");
let pBtn=footer.querySelectorAll("button")[0];
let nBtn=footer.querySelectorAll("button")[1];
let sBtn=footer.querySelectorAll("button")[2];
let submit=footer.querySelectorAll("button")[3];
let index=0;
// console.log(pBtn, nBtn, sBtn, submit);

function createBtn(){
    storage.forEach((e)=>{
        let btn =document.createElement("button");
        btn.id=e.id;
        btn.innerHTML=e.id;
        btnCont.append(btn);

    })
}
createBtn();

let allBtn=btnCont.querySelectorAll("button");

function display(){
    questionCont.innerHTML=`<h2>${storage[index].question}</h2>`
    storage[index].visited=true;
    optionCont.innerHTML="";
    storage[index].options.map((e)=>{
        let opt=document.createElement("input");
        opt.type="radio";
        opt.value=e;
        opt.name="option";
        let lable=document.createElement("lable");
        lable.innerHTML=e;
        if(storage[index].userAns==e){
            opt.checked=true;
        }
        optionCont.append(opt, lable);
    })

    allBtn.forEach((btn)=>{
        if(btn.id-1==index){
            btn.style. background="linear-gradient(135deg, #0f2027, #2c5364)";
            // btn.style.transform="translateY(-5px)";
        }
    })
}

display();

nBtn.addEventListener("click",(e)=>{
    saveAns();
    notSave();
    index=(index+1)%storage.length;
    display();
    legends();
})
pBtn.addEventListener("click", ()=>{
    saveAns();
    notSave();
    index=(index-1+storage.length)%storage.length;
    display();
    legends();
})
sBtn.addEventListener("click", ()=>{
    saveAns();
    index=(index+1)%storage.length;
    display();
    legends();
})


// console.log(allBtn);

function individualBtn(){
    
    allBtn.forEach((e)=>{
        // console.log(allBtn);
        e.addEventListener("click", ()=>{
                saveAns();
                notSave();
                index=e.id-1;
                display();
                legends();
            
        })
    })
}
individualBtn();


function saveAns(){
    let opt=document.querySelectorAll("input");
    // console.log(opt);
    opt.forEach((e)=>{
        if(e.checked){
            console.log(e.value);
            storage[index].userAns=e.value;
            console.log(storage[index]);

            allBtn.forEach((btn)=>{
                if(btn.id-1==index){
                    btn.style. background="linear-gradient(135deg, #34e89e, #0f3443)";
                    btn.style.transform="translateY(-5px)";
                }
            })
        }
    })
}

function notSave(){
    storage[index].visited=true;
    if(!(storage[index].userAns)){
        allBtn.forEach((btn)=>{
            if(btn.id-1==index){
                btn.style.background= "linear-gradient(135deg, #7f00ff, #e100ff)";
                // btn.style.transform="translateY(-5px)";
            }
        })
    }
}

function legends(){
    let legendCont=document.querySelector("#legends");
    let ans=legendCont.querySelectorAll("span")[0];
    let notAns=legendCont.querySelectorAll("span")[1];
    let marked=legendCont.querySelectorAll("span")[2];
    let notVisited=legendCont.querySelectorAll("span")[3];
    
    let ansCont=0;
    let notAnsCont=storage.length;
    let markedCont=0;
    let notVisitedCont=storage.length;

    storage.map((e)=>{
        if(e.userAns){
            ansCont++;
            notAns--;
        }
        if (e.visited) {
            notVisitedCont--;
        }
        if(e.visited && !e.userAns){
            markedCont++;
        }
    })

    ans.innerHTML=ansCont;
    notAns.innerHTML=notAnsCont;
    marked.innerHTML=markedCont;
    notVisited.innerHTML=notVisitedCont;
}

legends();

function time(){
    let header = document.querySelector("header");
    let hr=header.querySelectorAll("span")[0];
    let min=header.querySelectorAll("span")[1];
    let sec=header.querySelectorAll("span")[2];

    let duration=3000;

    let interval=  setInterval(()=>{
        duration--;
        hr.innerHTML=`${Math.floor(duration/3600)}`;
        min.innerHTML=`${Math.floor((duration%3600)/60)}`;
        sec.innerHTML=`${Math.floor((duration%3600)%60)}`;
        if (duration==0) {
            clearTimeout(interval);
            quizzUser.quizz=storage;
            localStorage.setItem("quizzUser", JSON.stringify(quizzUser));
            detailss=detailss.filter((e)=>{
            if(e.mobile!=quizzUser.mobile){
            return e;
            }
            })
            detailss.push(quizzUser);
            localStorage.setItem("details", JSON.stringify(detailss));
            window.location.href="./result.html";
        }
    },1000)
  
}
time();


submit.addEventListener("click", ()=>{

   let cont= confirm("Are you sure want to submit?");
   if (cont) {
    quizzUser.quizz=storage;
    localStorage.setItem("quizzUser", JSON.stringify(quizzUser));
    detailss=detailss.filter((e)=>{
        if(e.mobile!=quizzUser.mobile){
            return e;
        }
    })
    detailss.push(quizzUser);
    localStorage.setItem("details", JSON.stringify(detailss));
    window.location.href="./result.html";
   }
})

}