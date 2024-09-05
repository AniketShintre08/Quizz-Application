let quizUser = JSON.parse(localStorage.getItem("quizzUser"));
let userResult=quizUser.quizz;
console.log();

let main=document.querySelector("main");
let score=0;
userResult.forEach(e => {
   
    let div=document.createElement("div");
    main.append(div);
    if (e.userAns == e.options[e.correctAns]) {
        score++;
        div.className="correct";
    }else{
        div.className="wrong";
    }
    let p=document.createElement("h2");
    let h3=document.createElement("h3");
    let h4=document.createElement("h3");
    p.innerHTML=e.question;
    if (e.userAns) {
        h3.innerHTML="Your Answer: "+e.userAns;
    }else{
        h3.innerHTML="Your Answer: Not Answered";
    }
    h4.innerHTML="Correct Answer: "+e.options[e.correctAns];
    div.append(p, h3, h4);

});

let uName=document.querySelector("#name");
let uScore=document.querySelector("#score");
let innerDiv=document.querySelector("#innerdiv");
let marks=document.querySelector("#marks");
let width=0;
uName.innerHTML=quizUser.first;
uScore.innerHTML=score+"/"+userResult.length;
let interval = setInterval(()=>{
    if (score==0) {
        innerDiv.style.display="none";
    }
    width++;
    innerDiv.style.width=`${width}%`;
    if(width>=(score/userResult.length*100).toFixed(2)){
        clearInterval(interval);
        marks.innerHTML=`${(score/userResult.length*100).toFixed(2)}%`
    }
},50);