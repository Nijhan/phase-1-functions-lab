function distanceFromHqInBlocks(pickupLocation){
    const headquaters = 42;
    return Math.abs(pickupLocation - 42);
}
function distanceFromHqInFeet(pickupLocation){
    return distanceFromHqInBlocks(pickupLocation) *264;
}
function distanceTravelledInFeet(start, destination){
    return Math.abs(destination - tsart) *264;
}
function calculatesFarePrice(start, destination){
    const distance =distanceTravelledInFeet(start, destination);

  if(distance<=400){
    return 0;
   } else if (distance>400&&distance<=2000){
    return (distance -400)*0.02;
   }else if(distance>2000 && distance<=2500){
    return 25;
   }else{
return 'cannot travel that far';
   }
  }

console.log(distanceFromHqInBlocks(50))
console.log(distanceFromHqInFeet(50))
console.log(distanceTravelledInFeet(34, 38));
console.log(distanceTravelledInFeet(38, 34));