/*------------전체----------------------------*/
var pwd_res_index_1=[0, 0, 0, 0];
var try_count_1 = 0;
var try_count_2 = 1;
var try_count_3 = 2;



//------------------page1-----------------------------------

function startgame(){
    window.open("sogra_2.html","_self");
}
function endgame(){
  window.close();
}
//------------------page2---------------------------------
function bagae(){
  document.getElementById("questionBox1").style.display="";
}

function sink(){
    document.getElementById("questionBox2").style.display="";
}

function byungi(){
document.getElementById("HintBox1").style.display="";
}

function bed(){
  document.getElementById("HintBox2").style.display="";
}

function pwd() {
  document.getElementById('enter_pwd2').style.display="block";
}

function close_enter_pwd(event){

  event.target.parentNode.style.display="none";
}

function closequestion(event){
  event.target.parentNode.parentNode.style.display="none";
  event.stopPropagation;
}

function closeHint(event){
    event.target.parentNode.parentNode.style.display="none";
    event.stopPropagation;
}

$(document).ready(function(){
    $("#firstNext").click(function(){
      $('#firsttalk').slideUp("fast","swing");
      $("#lion").css("transform" , "rotate(90deg)");
      $("#lion").animate({
            left: '550px',
            top: '300px',
            height: '300px',
            width: '350px',
        });
        var audio = new Audio('6.wav');
      audio.play();
    setTimeout( function(){ $("#secondtalk").slideDown("fast") } , 700);
    setTimeout( function(){ $("#secondtalk").slideUp("fast") } , 3000);
})
});



function pwd() {
  document.getElementById('pwd_1_button').innerHTML = pwd_res_index_1[0];
  document.getElementById('pwd_2_button').innerHTML = pwd_res_index_1[1];
  document.getElementById('pwd_3_button').innerHTML = pwd_res_index_1[2];
  document.getElementById('pwd_4_button').innerHTML = pwd_res_index_1[3];
  document.getElementById('enter_pwd2').style.display = "block";
}

function change_pwd_text() {
  document.getElementById('pwd_1_button').innerHTML = pwd_res_index_1[0];
  document.getElementById('pwd_2_button').innerHTML = pwd_res_index_1[1];
  document.getElementById('pwd_3_button').innerHTML = pwd_res_index_1[2];
  document.getElementById('pwd_4_button').innerHTML = pwd_res_index_1[3];
}

function pwd_1_change() {
  pwd_res_index_1[0] = (pwd_res_index_1[0] + 1) % 10;
  change_pwd_text();
}

function pwd_2_change() {
  pwd_res_index_1[1] = (pwd_res_index_1[1] + 1) % 10;
  change_pwd_text();
}

function pwd_3_change() {
  pwd_res_index_1[2] = (pwd_res_index_1[2] + 1) % 10;
  change_pwd_text();
}

function pwd_4_change() {
  pwd_res_index_1[3] = (pwd_res_index_1[3] + 1) % 10;
  change_pwd_text();
}

function submit_pwd2() {
  try_count_1++;
  var p_1 = document.getElementById('pwd_1_button').innerHTML;
  var p_2 = document.getElementById('pwd_2_button').innerHTML;
  var p_3 = document.getElementById('pwd_3_button').innerHTML;
  var p_4 = document.getElementById('pwd_4_button').innerHTML;

  if (p_1 == 3 && p_2 == 9 && p_3 == 0 && p_4 == 0) {
    window.open("sogra_3.html", "_self");

  } else {
    if ((try_count_1) % 3 == 1) {
      document.getElementById('horror1_box').style.display="block";
      setTimeout( function(){ $("#horror1_box").slideUp("fast") } , 1500);

      var audio = new Audio('10.wav');

    } else if ((try_count_1) % 3 == 2) {
      document.getElementById('horror2_box').style.display="block";
      setTimeout( function(){ $("#horror2_box").slideUp("fast") } , 1500);
      var audio = new Audio('9.wav');

    } else {
       document.getElementById('horror3_box').style.display="block";
      setTimeout( function(){ $("#horror3_box").slideUp("fast") } , 1500);

      var audio = new Audio('8.wav');

    }
    audio.play();
  }
}

//---------------------page3-----------------------------------
$(document).ready(function(){
      $('#firsttalk2').slideDown("fast","swing");
      $('#firstNext2').click(function(){
          $('#firsttalk2').slideUp("fast","swing");
          $('#lion2').css("display","none");
      })
});

function box(){
    document.getElementById("box").style.display="";
    document.getElementById("page").style.display="";
}
function page(){
  document.getElementById("questionBox3").style.display="";
}
function door(){
  document.getElementById("HintBox3").style.display="";
}
function shoe(){
  document.getElementById("HintBox4").style.display="";
}
function wall(){
  document.getElementById("questionBox4").style.display="";
}
function prison(){
  document.getElementById("enter_pwd3").style.display="";
}


function submit_pwd3() {
  try_count_2++;
  var p_1 = document.getElementById('pwd_1_button').innerHTML;
  var p_2 = document.getElementById('pwd_2_button').innerHTML;
  var p_3 = document.getElementById('pwd_3_button').innerHTML;
  var p_4 = document.getElementById('pwd_4_button').innerHTML;

  if (p_1 == 2 && p_2 == 4 && p_3 == 3 && p_4 == 4) {
    window.open("sogra_4.html", "_self");

  } else {
    if ((try_count_2) % 3 == 1) {
      document.getElementById('horror1_box').style.display="block";
      setTimeout( function(){ $("#horror1_box").slideUp("fast") } , 1500);

      var audio = new Audio('10.wav');

    } else if ((try_count_2) % 3 == 2) {
      document.getElementById('horror2_box').style.display="block";
      setTimeout( function(){ $("#horror2_box").slideUp("fast") } , 1500);
      var audio = new Audio('9.wav');

    } else {
       document.getElementById('horror3_box').style.display="block";
      setTimeout( function(){ $("#horror3_box").slideUp("fast") } , 1500);

      var audio = new Audio('8.wav');

    }
    audio.play();
  }
}

/*------------page4-------------------------*/

$(document).ready(function(){
  setTimeout( function(){ $('#stair_lion').animate({
    width:'100px',
    height: '100px',
    left:'650px',
    top:'260px'}, 4000)} , 900 );
});

function nextpage() {
  window.open("sogra_5.html" , "_self")
}



/*-------------------page5---------------------*/
function fake(){
  document.getElementById("questionBox5").style.display="";
}
function clue(){
  document.getElementById("questionBox6").style.display="";
}
function clue2(){
  document.getElementById("HintBox5").style.display="";
}
function prison2(){
  document.getElementById("enter_pwd5").style.display="";
}

$(document).ready(function(){
      $('#firsttalk3').slideDown("fast","swing");
      $('#firstNext3').click(function(){
          $('#firsttalk3').slideUp("fast","swing");
          $('#lion3').css("display","none");
      })
});

function submit_pwd5() {
  try_count_3++;
  var p_1 = document.getElementById('pwd_1_button').innerHTML;
  var p_2 = document.getElementById('pwd_2_button').innerHTML;
  var p_3 = document.getElementById('pwd_3_button').innerHTML;
  var p_4 = document.getElementById('pwd_4_button').innerHTML;

  if (p_1 == 9 && p_2 == 7 && p_3 == 1 && p_4 == 7) {
    window.open("sogra_6.html", "_self");

  } else {
    if ((try_count_3) % 3 == 1) {
      document.getElementById('horror1_box').style.display="block";
      setTimeout( function(){ $("#horror1_box").slideUp("fast") } , 1500);

      var audio = new Audio('10.wav');

    } else if ((try_count_3) % 3 == 2) {
      document.getElementById('horror2_box').style.display="block";
      setTimeout( function(){ $("#horror2_box").slideUp("fast") } , 1500);
      var audio = new Audio('9.wav');

    } else {
       document.getElementById('horror3_box').style.display="block";
      setTimeout( function(){ $("#horror3_box").slideUp("fast") } , 1500);

      var audio = new Audio('8.wav');

    }
    audio.play();
  }
}

/*-------------------last-------------------*/
$(document).ready( function() {
  setTimeout( function(){ $("#lasttalk").slideUp("fast")} , 2000);
    setTimeout( function(){ $('#last_stand_lion').animate( {
      width :'300px',
      height :'300px',
      left: '250px',
      top:'400px'
    },4000) } ,2500);
  });

  function ending(){
     window.open("sogra_7.html","_self");
  }
