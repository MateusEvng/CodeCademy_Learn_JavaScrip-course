//LEARN JAVASCRIPT

//Sleep Debt Calculator

/*
In this project, we’re going to practice functions in JavaScript so you can hone your skills
and feel confident taking them to the real world. Why? Functions help us build separation of concerns so our
code isn’t one long function.
*/

// Function to get the sleep hours for a specific day
const getSleepHours = day => {
  switch (day.toLowerCase()) {
    case 'monday':
      return 8;
    case 'tuesday':
      return 7;
    case 'wednesday':
      return 6;
    case 'thursday':
      return 8;
    case 'friday':
      return 7;
    case 'saturday':
      return 9;
    case 'sunday':
      return 8;
    default:
      return 'Invalid day';
  }
};

// Function to get the total actual sleep hours for the week
const getActualSleepHours = () => {
  const daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  let totalSleepHours = 0;
  for (const day of daysOfWeek) {
    totalSleepHours += getSleepHours(day);
  }
  return totalSleepHours;
};

// Function to get the ideal sleep hours for the week
const getIdealSleepHours = () => {
  const idealHoursPerNight = 8; // Ideal hours per night
  return idealHoursPerNight * 7; // Total hours preferred per week
};

// Function to calculate sleep debt and output result to console
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log("You got the perfect amount of sleep!");
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`You got more sleep than needed by ${actualSleepHours - idealSleepHours} hours.`);
  } else {
    console.log(`You should get some rest. You're ${idealSleepHours - actualSleepHours} hours short of your ideal sleep.`);
  }
};

// Start the program by calling the calculateSleepDebt function
calculateSleepDebt();
