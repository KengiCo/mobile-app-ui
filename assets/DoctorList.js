// CLASS FOR THE LIST OF DOCTORS, RENDER() DISPLAYS A DOCTOR ELEMENT FOR EACH DOCTOR CREATED
import DoctorBox from "./DoctorBox.js"
import Doctor from "./Doctor.js"
export default class DoctorList {
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

  // WITH PARAMETER

  render(doctors) {
    console.log(doctors);
    let listOfDoctors = doctors;
    const doctorHook = document.getElementById(
      "find-doctor-topdoctor__container"
    );
    const docList = document.createElement("div");
    docList.className = "find-doctor_list";
    for (let i = 0; i < listOfDoctors.length; i++) {
      const doc = listOfDoctors[i];
      const docDetail = new DoctorBox(doc);
      const docBox = docDetail.render();
      docList.appendChild(docBox);
    }
    doctorHook.appendChild(docList);
  }
}
