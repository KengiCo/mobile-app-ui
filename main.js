import Search from "./assets/Search.js";
import DoctorList from "./assets/DoctorList.js";
import DoctorBox from "./assets/DoctorBox.js";


const start = document.querySelector(".welcome-page__button");
const welcome = document.querySelector(".tab__welcome-page");
const findDoctor = document.querySelector(".tab__find-doctor");

if (window.innerWidth > 412) {
  alert("This app is optimized for mobile view only");
}

// BUTTON START - JUST CHANGE DISPLAY PROPERTY TO SHOW NEXT PAGE
start.addEventListener("click", () => {
  welcome.style.display = "none";
  findDoctor.style.display = "block";
});

const doctorList = new DoctorList();
doctorList.render(doctorList.doctors);
Search.searchByName();
Search.searchByCategory();

export { doctorList }
