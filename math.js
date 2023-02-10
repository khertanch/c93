p1_name=localStorage.getItem("player1_name");
p2_name=localStorage.getItem("player2_name");

p1_score=0;
p2_score=0;

document.getElementById("player1_name").innerHTML=p1_name +":";
document.getElementById("player2_name").innerHTML=p2_name+":";

document.getElementById("player1_score").innerHTML=p1_score;
document.getElementById("player2_score").innerHTML=p2_score;

document.getElementById("player_question").innerHTML="question turn-"+p1_name;
document.getElementById("player_answer").innerHTML="answer turn -"+p2_name;

function send(){
    get_number=document.getElementById("1").value;
    get_number2=document.getElementById("2").value;
    console.log(get_number);
    console.log(get_number2);

   actual_answer=parseInt(get_number)*(get_number2);
   
   
    question="<h4 id='question'>Q."+get_number+"X"+get_number2+"</h4>";

    input_box="<br>answer:<input type='number' id='input_check_box'>";
    

    check_btn="<br><br><button class='btn btn-info' onclick='check()'>check</button>";

    row=question+input_box+check_btn;
    document.getElementById("output").innerHTML=row;
    document.getElementById("1").value="";
    document.getElementById("2").value="";
}
question_turn="player1";
answer_turn="player2";

function check(){
answer=document.getElementById("input_check_box").value;



if(answer==actual_answer){

if(answer_turn=="player1"){

p1_score=p1_score+1;
document.getElementById("player1_score").innerHTML=p1_score;
}
else{
    p2_score=p2_score+1;
    document.getElementById("player2_score").innerHTML=p2_score;
}

}

if(answer_turn=="player1"){
answer_turn="player2";
document.getElementById("player_answer").innerHTML="Answer Turn-" + p2_name;
}
else{
answer_turn="player1";
document.getElementById("player_answer").innerHTML="Answer Turn-" + p1_name

}
if(question_turn=="player2"){
    question_turn="player1";
    document.getElementById("player_question").innerHTML="Question Turn-" + p1_name;
}
else{
    question_turn="player2";
    document.getElementById("player_question").innerHTML="Question Turn-" + p2_name;
}
document.getElementById("output").innerHTML="";

}