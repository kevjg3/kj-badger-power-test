function power(time) {
    
    let inputtedTime = document.getElementById("timeInput").value;
    let timelist = inputtedTime.split(',');
    let lbs = document.getElementById("lbsInput").value;
    let kgs = lbs * 0.453592;
    

    let distance = [4.572, 9.144, 13.716, 18.288, 22.86]
    let count = 0;
    let strvelo = "Velocity in 5yd intervals: ";
    let strpower = "Power Output in 5yd increments: ";
    let straccel = "Acceleration in 5yd increments: ";
    
    while (count < 5) {
        let velo = distance[count] / timelist[count];
    let accel = velo / timelist[count];
    let force = kgs * accel;
    let work = force * distance[count];
    let power = work / timelist[count];
    power = Math.round(power*100)/100;
    if (count == 4){
        strpower += power + " Watts"
        strvelo += Math.round(velo*100)/100 + " m/s";
        straccel += Math.round(accel*100)/100 + " m/s^2";
    }    
    else{
        strpower += power + " Watts, ";
        strvelo += Math.round(velo*100)/100 + " m/s, ";
        straccel += Math.round(accel*100)/100 + " m/s^2, ";
    }
        document.getElementById("power").innerHTML = strpower;
      count++;
    }
    document.getElementById("velo").innerHTML = strvelo;
    document.getElementById("accel").innerHTML = straccel;
  }
