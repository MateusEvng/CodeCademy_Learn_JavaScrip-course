//LEARN JAVASCRIPT

//Race Day

let raceNumber = Math.floor(Math.random() * 1000);
let isEarly = false;
let runnerAge = 18;

if((runnerAge > 18) && (isEarly)){
  raceNumber +=1000;
}
if((runnerAge > 18) && (isEarly)){
  console.log(`You gonna race at 9:30am. Your Race Number: ${raceNumber}`);
}
else if((runnerAge > 18) && (!isEarly)){
  console.log(`You gonna race at 11:00am. Your Race Number: ${raceNumber}`)
}
else if(runnerAge < 18){
  console.log(`Youth registrants run at 12:30 pm (regardless of registration) Your Race Number: ${raceNumber}`)
}
else{
  console.log('You should see the Registration Desk')
}