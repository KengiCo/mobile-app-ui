const findDoctor = document.querySelector(".tab__find-doctor");


// CLASS FOR THE DOCTOR DETAIL (SHOWS THE BOX AND ON CLICK OPEN DETAIL PAGE)

export default class DoctorBox {
  constructor(doctor) {
    this.doctor = doctor;
  }

  showDoctor() {
    const doctorDetailHook = document.getElementById("tab_doctor-detail");
    findDoctor.style.display = "none";
    doctorDetailHook.style.display = "block";
    doctorDetailHook.innerHTML = `
          <nav class="doctor-detail__nav">

            <img class="doctor-detail__back-arrow" src="./img/back-arrow.svg" type="" />


            <img class="doctor-detail__threedots" src="./img/threedots.svg" type="" />

        </nav>
        <div class="doctor-detail__container">
          <div class="doctor-detail__the-doctor">
            <img src="${this.doctor.iconURL}" width="88" height="107" alt="" />
            <div class="doctor-detail__the-doctor__container">
              <div class="doctor-detail__text--bold">${this.doctor.name}</div>
              <div class="doctor-detail__text--light">${this.doctor.specialization} - ${this.doctor.hospital}</div>
              <div class="doctor-detail__contact-icons">
                <img src="/img/doc-detail-phone.png" alt="" />
                <img src="/img/doc-detail-message.png" alt="" />
                <img src="/img/doc-detail-cam.png" alt="" />
              </div>
            </div>
            
          </div>
          <div class="doctor-detail__about">
            <div class="doctor-detail__about-title">About Doctor</div>
            <div class="doctor-detail__about-text">${this.doctor.desc}</div>
  
        </div>
        </div>
          `;
    scroll(0,0)
    const backArrow = document.querySelector(".doctor-detail__back-arrow");
    backArrow.addEventListener("click", () => {
      findDoctor.style.display = "block";
      doctorDetailHook.style.display = "none";
    });
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
