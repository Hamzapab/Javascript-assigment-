let day = window.prompt("Enter When you want take an appointement: ");
//  Remove Spaces And Make First Letter Capital => Friday
    day = day.trim().toLowerCase();
    day = day[0].toUpperCase() + day.substring(1);

switch (day){
  case "Friday":
  case "Saturday":
  case "Sunday":
    console.log("There is no appointment available in these days");
  break; 
  case "Monday":
  case "Thursday":
    console.log("You can get an appointment from 10:00 AM to 5:00 PM");
  break;
  case "Tuesday":
    console.log("You can get an appointment from 10:00 AM To 6:00 PM");
  break;
  case "Wednesday":
    console.log("You can get an appointment from 10:00 AM To 7:00 PM");
  break;
  default:
    console.log("You have selected wrong day")
}

