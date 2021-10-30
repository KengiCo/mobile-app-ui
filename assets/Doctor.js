 // CLASS FOR THE DOCTOR BLUEPRINT

 export default class Doctor {
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