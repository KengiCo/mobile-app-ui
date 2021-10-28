const start = document.querySelector(".welcome-page__button");

const welcome = document.querySelector(".tab__welcome-page");
const findDoctor = document.querySelector(".tab__find-doctor");
const searchInput = document.getElementById("search");
const startSearch = document.querySelector(".find-doctor__search__button");

// BUTTON START - JUST CHANGE DISPLAY PROPERTY TO SHOW NEXT PAGE
start.addEventListener("click", () => {
  welcome.style.display = "none";
  findDoctor.style.display = "block";
  console.log(doctorList);
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

// CLASS FOR THE DOCTOR DETAIL (SHOWS THE BOX AND ON CLICK OPEN DETAIL PAGE)

class DoctorBox {
  constructor(doctor) {
    this.doctor = doctor;
  }

  showDoctor() {
    const doctorDetailHook = document.getElementById("tab_doctor-detail");
    findDoctor.style.display = "none";
    doctorDetailHook.style.display = "block";
    doctorDetailHook.innerHTML = `
        <nav class="doctor-detail__nav">
        <div class="find-doctor__back-arrow">
          <img src="./img/back-arrow.svg" type="" />
        </div>
        <div class="find-doctor__profile">
          <img src="./img/threedots.svg" type="" />
        </div>
      </nav>
      <div class="doctor-detail__container">
        <div class="doctor-detail__the-doctor">
          <img src="./img/doc-detail-profile.svg" alt="" />
          <div class="doctor-detail__the-doctor__container">
            <div class="doctor-detail__text--bold">Dr. Stella Kane</div>
            <div class="doctor-detail__text--light">Heart Surgeon - Flower Hospital</div>
            <div class="doctor-detail__contact-icons">
              <img src="/img/doc-detail-phone.png" alt="" />
              <img src="/img/doc-detail-message.png" alt="" />
              <img src="/img/doc-detail-cam.png" alt="" />
            </div>
          </div>
          
        </div>
        <div class="doctor-detail__about">
          <div class="doctor-detail__about-title">About Doctor</div>
          <div class="doctor-detail__about-text">Dr. Stella is the top most heart surgeon in Flower 
            Hospital. She has done over 100 successful sugeries 
            within past 3 years. She has achieved several
            awards for her wonderful contribution in her own 
            field. She’s available for private consultation for
            given schedules.</div>

      </div>
      </div>
        `;
  }

  render() {
    const docBox = document.createElement("div");
    docBox.className = "find-doctor_doctor-box";
    docBox.innerHTML = `
        <div style="background-color: ${this.doctor.backgroundColor}" class="boxes">
        <div class="doc_image">
          <img src="${this.doctor.iconURL}" alt="doctor_icon">
        </div>
        <div class="doc_title">
          <p class="find-doctor-topdoctor__text">${this.doctor.name}</p> 
          <p class="find-doctor-categories__text--light">${this.doctor.specialization} - ${this.doctor.hospital}</p>
        </div>
    </div>
        `;
    const docDetails = docBox.querySelector("div");
    docDetails.addEventListener("click", this.showDoctor.bind(this));
    return docBox;
  }
}

// CLASS FOR THE LIST OF DOCTORS, RENDER() DISPLAYS A DOCTOR ELEMENT FOR EACH DOCTOR CREATED

class DoctorList {
  doctors = [
    new Doctor(
      "Stella Kane",
      "Heart Surgeon",
      "Flower Hospitals",
      "Dr. Stella is the top most heart surgeon in Flower Hospital. She has done over 100 successful sugeries within past 3 years. She has achieved several awards for her wonderful contribution in her own field. She’s available for private consultation for given schedules.",
      "./img/doc-stella.svg",
      "EDF1FA"
    ),
    new Doctor(
      "Joseph Cart",
      "Dental Surgeon",
      "Flower Hospitals",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque ipsum modi, pariatur at doloribus quia exercitationem obcaecati velit incidunt. Vero aliquam nihil reiciendis exercitationem dolores. Voluptate reiciendis eligendi unde recusandae!",
      "./img/doc-joseph.svg",
      "FAF2EA"
    ),
    new Doctor(
      "Stefani Albert",
      "Eye Specialist",
      "Flower Hospitals",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque ipsum modi, pariatur at doloribus quia exercitationem obcaecati velit incidunt. Vero aliquam nihil reiciendis exercitationem dolores. Voluptate reiciendis eligendi unde recusandae!",
      "./img/doc-stefani.svg",
      "F9EDEB"
    ),
  ];
  constructor() {}

  render() {
    const doctorHook = document.getElementById(
      "find-doctor-topdoctor__container"
    );
    const docList = document.createElement("div");
    docList.className = "find-doctor_list";
    for (const doc of this.doctors) {
      const docDetail = new DoctorBox(doc);
      const docBox = docDetail.render();
      docList.appendChild(docBox);
    }
    doctorHook.appendChild(docList);
    this.searchByName();
    console.log(this.doctors)
  }
  searchByName() {
    let searchString = "";
    searchInput.addEventListener("input", () => {
      searchString = searchInput.value;
      console.log(searchString);
    });

// IF THE NAME OF ONE OF THE DOCTOR IS SEARCHED -> RENDER THE VIEW WITH ONLY THE SEARCHED DOCTOR(COULD IMPLEMENT REGEX IN THE INCLUDES)

    startSearch.addEventListener("click", () => {
      let list = Object.values(doctorList)[0];
      list.forEach((doct) => {
        console.log()
        if (
          Array.from(doct.name.toLowerCase())
            .join("")
            .split(" ")
            .includes(searchString)
        ) {
          console.log(doct.id);
        }
      });
    });
  }
}

const doctorList = new DoctorList();
doctorList.render();

