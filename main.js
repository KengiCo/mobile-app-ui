const start = document.querySelector(".welcome-page__button");

const welcome = document.querySelector(".tab__welcome-page");
const findDoctor = document.querySelector(".tab__find-doctor");
const searchInput = document.getElementById("search");
const startSearch = document.querySelector(".find-doctor__search__button");

// BUTTON START - JUST CHANGE DISPLAY PROPERTY TO SHOW NEXT PAGE
start.addEventListener("click", () => {
  welcome.style.display = "none";
  findDoctor.style.display = "block";
});





// CLASS FOR THE DOCTOR BLUEPRINT

class Doctor {
  constructor(
    name,
    specialization,
    hospital,
    desc,
    iconURL,
    backgroundColor,
    id
  ) {
    this.name = name;
    this.specialization = specialization;
    this.hospital = hospital;
    this.desc = desc;
    this.iconURL = iconURL;
    this.backgroundColor = backgroundColor;
    this.id = name.toLowerCase().split(" ").join("");
  }
}


const doctorList = new DoctorList();
doctorList.render(doctorList.doctors);
Search.searchByName();
Search.searchByCategory();
