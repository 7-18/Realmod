import { GetData } from "../helpers/DataCRUD.js";
import { PROPERTY } from "../helpers/urls.js";
import { ShowProperties } from "../modules/showProperties.js";

const container_properties = document.getElementById("container-properties");
const property_options = document.getElementById("property-options");
const properties = document.getElementById("properties");

document.addEventListener("DOMContentLoaded", async () => {
  const properties = await GetData(PROPERTY);
  const parking_speace = properties.filter(
    (property) => property.parking === true
  );
  ShowProperties(container_properties, parking_speace);
});

property_options.addEventListener("click", async (e) => {
  const category = e.target;

  const addDisable = () => {
    const options = document.querySelectorAll(".card-categories");
    options.forEach((option) => {
      option.classList.contains("disable") === false
        ? option.classList.add("disable")
        : null;
    });
  };

  if (category.tagName === "DIV") {
    addDisable();
    let active = category.classList.contains("disable");
    if (active) category.classList.remove("disable");
    const properties = await GetData(PROPERTY);

    if (category.id === "parking") {
      const parking_speace = properties.filter(
        (property) => property.parking === true
      );
      ShowProperties(container_properties, parking_speace);
    }
    if (category.id === "pool") {
      const pool = properties.filter((property) => property.pool === true);
      ShowProperties(container_properties, pool);
    }
    if (category.id === "security") {
      const security = properties.filter(
        (property) => property.security === true
      );
      ShowProperties(container_properties, security);
    }
    if (category.id === "medical-center") {
      const medical_center = properties.filter(
        (property) => property.medical_center === true
      );
      ShowProperties(container_properties, medical_center);
    }
    if (category.id === "library-area") {
      const library_area = properties.filter(
        (property) => property.library_area === true
      );
      ShowProperties(container_properties, library_area);
    }
    if (category.id === "king-size-beds") {
      const king_size_beds = properties.filter(
        (property) => property.king_size_beds === true
      );
      ShowProperties(container_properties, king_size_beds);
    }
    if (category.id === "smart-home") {
      const smart_home = properties.filter(
        (property) => property.smart_home === true
      );
      ShowProperties(container_properties, smart_home);
    }
    if (category.id === "kids-playland") {
      const kids_playland = properties.filter(
        (property) => property.kids_playland === true
      );
      ShowProperties(container_properties, kids_playland);
    }
  }
});

properties.addEventListener("click", async (e) => {
  const data = await GetData(PROPERTY);
  const btnClass = e.target.classList.contains("property");
  if (btnClass) {
    const id = e.target.id;
    const property = data.find((property) => property.id == id);
    localStorage.setItem("property", JSON.stringify(property));
    window.location.href = "./details.html";
  }
});
