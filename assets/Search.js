import { doctorList } from "../main.js"
const searchInput = document.getElementById("search");
const startSearch = document.querySelector(".find-doctor__search__button");


export default class Search {
    static searchByName() {
      let searchString = "";
      searchInput.addEventListener("input", () => {
        searchString = searchInput.value;
        console.log(searchString);
      });
  
      // IF THE NAME OF ONE OF THE DOCTOR IS SEARCHED -> RENDER THE VIEW WITH ONLY THE SEARCHED DOCTOR(COULD IMPLEMENT REGEX IN THE INCLUDES)
  
      startSearch.addEventListener("click", () => {
        let list = Object.values(doctorList)[0];
        const doctorHook = document.getElementById(
          "find-doctor-topdoctor__container"
        );
        let doctArray = [];
        for (let i = 0; i < list.length; i++) {
          const doct = list[i];
          if (
            Array.from(doct.name.toLowerCase())
              .join("")
              .split(" ")
              .includes(searchString)
          ) {
            doctArray.push(doct);
          }
        }
        if (doctArray.length == 0) {
          doctorHook.removeChild(doctorHook.firstChild);
          const noResult = document.createElement("div");
          noResult.className = "find-doctor-categories__text--light";
          noResult.innerHTML = "Sorry, your search didn't find any result";
          doctorHook.appendChild(noResult);
        } else {
          doctorHook.removeChild(doctorHook.firstChild);
          return doctorList.render(doctArray);
        }
      });
    }
  
    static searchByCategory() {
      let searchCategory = "";
      let heart = document.querySelector(".heart");
      let eye = document.querySelector(".eye");
      let tooth = document.querySelector(".tooth");
  
      // IF THE NAME OF ONE OF THE DOCTOR IS SEARCHED -> RENDER THE VIEW WITH ONLY THE SEARCHED DOCTOR(COULD IMPLEMENT REGEX IN THE INCLUDES)
  
      heart.addEventListener("click", () => {
        filterByCategory("heart");
      });
      eye.addEventListener("click", () => {
        filterByCategory("eye");
      });
      tooth.addEventListener("click", () => {
        filterByCategory("dental");
      });
  
    const filterByCategory = (spec) => {
        searchCategory = spec;
        let doctArray = [];
        let list = Object.values(doctorList)[0];
        const doctorHook = document.getElementById(
          "find-doctor-topdoctor__container"
        );
        for (let i = 0; i < list.length; i++) {
          const doct = list[i];
          if (
            Array.from(doct.specialization.toLowerCase())
              .join("")
              .split(" ")
              .includes(searchCategory)
          ) {
            doctArray.push(doct);
          }
        }
        doctorHook.removeChild(doctorHook.firstChild);
        return doctorList.render(doctArray);
      };
    }
  }