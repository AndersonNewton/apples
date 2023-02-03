x = 0;
y = 0;
circle_stat = "";
rando_num = Math.floor(Math.random() * 1000)
function circle_tin(){ =  radius = Math.floor(Math.random() * 300);
    circle(x,y,radius) * rando_num;
    circle_stat = "";
}


var SpeechRecognition = window.webkitSpeechRecognition;
var agent = new SpeechRecognition();

function setup() {

    canvas = createCanvas(900, 650);


}


function draw(){
    if( circle_stat == "set"){
      
        circle_tin() 

    }
   
    

}
function start_listen() {

    document.getElementById("status").innerHTML = "Please Speak";
    agent.start();

}

agent.onresult = function (event) {
    //console.log(event);
    user_content = event.results[0][0].transcript;
    //console.log(user_content);
    document.getElementById("status").innerHTML = "Speech Recognised Is : " + user_content;
    if ((user_content == "circle") || (user_content == "Circle") || (user_content == "circle.") || (user_content == "Circle.")){

        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 650);
        circle_stat = "set";
        document.getElementById("status").innerHTML = "Circle is drawn";
    }
    
    
}
