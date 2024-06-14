const questions = [{
    'ques' : "Which of the following is the markup language ?" ,
    'a' : "Html" , 
    'b' : "Css" , 
    'c' : "Javascript" , 
    'd' : "Php" ,
    'correct' : "a"
} , 

{
    'ques' : "What year was javascript launced ?" ,
    'a' : "Html" , 
    'b' : "Css" , 
    'c' : "Javascript" , 
    'd' : "Php" , 
    'correct' : "b"

} , 

{
    'ques' : "What does css stands for ?" ,
    'a' : "Html" , 
    'b' : "Css" , 
    'c' : "Javascript" , 
    'd' : "Php" , 
    'correct' : "b"
}]

let index = 0;
const quesBox = document.querySelector("quesBox")
const loadQuestion = () =>{
   const data = questions[index]
   console.log(data);
}
//  initail
loadQuestion();













































