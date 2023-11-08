function calculateYearsOfExperience() {
  console.log("You're seeing to the best developer you ever seen!");
  
  var myFirstAdmission = new Date(2021, 8, 8);
  var today = new Date();

  const diffInMs = new Date() - myFirstAdmission;
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
  
  const myInput = document.querySelector("#experience-years-input");
  myInput.value = (diffInDays / 365).toFixed(2);
  // After complete a full year in a current year, comment the line bellow a allow the above line. This make look as more experience. Remember ever adjust input width
  // myInput.value = today.getFullYear() - myFirstAdmission.getFullYear();
}
