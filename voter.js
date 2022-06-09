let bjp__btn=document.getElementById("bjp__vote");
let congress__btn=document.getElementById("congress__vote");
let bjd__btn=document.getElementById("bjd__vote");

let display__bjp=document.getElementById("bjpvote_display");
let display__congress=document.getElementById("congress_vote_display");
let display__bjd=document.getElementById("bjdvote_display");

let finalresult=document.getElementById("res");
let display__result=document.getElementById("voterresult");
let totalresult=document.getElementById("total");

var bjp=1;
var congress=1;
var bjd=1;

var totalsum=0;
bjp__btn.addEventListener("click",()=>{
    display__bjp.value = bjp++; 
});
congress__btn.addEventListener("click",()=>{
    display__congress.value = congress++; 
});
bjd__btn.addEventListener("click",()=>{
    display__bjd.value = bjd++; 
});
finalresult.addEventListener("click",() =>{
    if(bjp>congress && bjp>bjd){
        display__result.innerText = "BJP Won and votes of BJP is   " + (bjp-1);
    } else if(congress>bjp && congress>bjd){
        display__result.innerText = "CONGRESS Won and votes of CONGRESS is   " + (congress-1);
    }    else if(bjp==congress && bjd==congress){
        display__result.innerText = "its Tie and equals vote are  " + (bjp-1);
    }else if(bjp==congress && congress!= bjd){
        if(congress>bjd){
            display__result.innerText = "BJP and CONGRESS got "+ (congress-1)+" votes and BJB got "+(bjp-1)+" votes, so its a tie!" ;
        }else{
            display__result.innerText = "BJD won by "+ (bjd-1) + "votes.";
    }
 } else if(bjd==congress && bjd!= bjp){
        if(bjd>bjp){
            display__result.innerText = "BJD and CONGRESS got "+ (congress-1)+" votes and BJd got "+(bjd-1)+" votes, so its a tie!" ;
        }else{
            display__result.innerText = "BJP won by "+ (bjp-1) + "votes."
        }
     }else if(bjd==bjp && bjd!= congress){
        if(bjd>congress){
            display__result.innerText = "BJP and BJD got "+ (bjd-1)+" votes and BJP got "+(bjp-1)+" votes, so its a tie!" 
        }else{
            display__result.innerText = "CONGRESS won by "+ (congress-1) + "votes."
        }
     }
        else{
            display__result.innerText = "BJD won and vote of BJD is   " + (bjd-1);
      }
      totalsum = (bjp-1)+(congress-1)+(bjd-1); 
      totalresult.innerText = "Total number of votes polled are "+ totalsum;
  
})

