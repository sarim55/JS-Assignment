
var hr = 0;
var min =0;
var sec = 0;
var msec =0 ;
var msecid = document.getElementById("msec")
var secid = document.getElementById("sec")
var minid = document.getElementById("min")
var hrid = document.getElementById("hr")

var interval
function timer(){
    msec++
    msecid.innerHTML  = msec
    secid.innerHTML  = sec
    minid.innerHTML  = min
    hrid.innerHTML  = hr
    if(msec === 100){
        sec++
        msec = 0 
    }
    
    if(sec === 60){
        min++
        sec = 0 
    }
    if(min === 60){
        hr++
        min = 0 
    }
}

function start(){
interval=setInterval(timer,10)
document.getElementById("start").disabled = true
document.getElementById("stop").disabled = false
}

function stop(){
    clearInterval(interval)
    document.getElementById("start").disabled = false
    document.getElementById("stop").disabled = true
    
}
function reset(){
     msec=sec = min = hr = 0
    msecid.innerHTML  = msec
    secid.innerHTML  = sec
    minid.innerHTML  = min
    hrid.innerHTML  = hr
stop()
document.getElementById("start").disabled = false
    document.getElementById("stop").disabled = false
}



function currentTime() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var midday = "AM";
    midday = (hour >= 12) ? "PM" : "AM";
    hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour);
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("clock").innerText = hour + " : " + min + " : " + sec + " " + midday; 
      var t = setTimeout(currentTime, 1000);
  }
  
  function updateTime(k) {
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
  }
  
  currentTime();