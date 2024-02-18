let eyeon=document.getElementById('eyeicon')
let pass=document.getElementById('pass')

function jibu(){
      if(pass.type=="password")
        {pass.type="text"
        eyeon.src="eyeoff.png"}

        else{
          pass.type="password";
          eyeon.src="eyeon.png"
        }

}

dark=document.getElementById('body')
frame=document.getElementById('frame')
img=document.getElementById('darkmode')
 var duck= setInterval(time, 1000);
function on(){
   if(dark.style.background=="white")
     {dark.style.background=" rgb(32, 34, 36)"; img.src="darkmode/ngt.png"}                     
                      
else{dark.style.background="white" ;img.src="darkmode/day.png"}
     
     
 }
function login() {
   frame.src='on.html' 
}
function logout(){
 frame.src="create new.html"
}
function price(){
frame.src="price.html"

}
function shoes(){
 frame.src="shoesprice.html"
}


   
  function time() {
    
        time=new Date()
    document.getElementById('check').innerHTML = time.toLocaleTimeString();
       } 