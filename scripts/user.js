import { DeleteData, PutData } from "../helpers/DataCRUD.js";
import { USER } from "../helpers/urls.js";

const form = document.querySelector("form");
let inputName = document.getElementById("name");
let inputEmail = document.getElementById("email");
let inputPassword = document.getElementById("password");
let btnEdit = document.getElementById("edit");
let btnSave = document.getElementById("save");
let btnDelete = document.getElementById("delete");
let infoUser;

document.addEventListener("DOMContentLoaded", () => {
  infoUser = JSON.parse(sessionStorage.getItem("infoUser"));
  const { id, name, email, password } = infoUser;
  inputName.value = name;
  inputEmail.value = email;
  inputPassword.value = password;

  btnDelete.setAttribute("id", id);
});

btnEdit.addEventListener("click", (e) => {
  e.preventDefault();
  inputName.removeAttribute("disabled");
  inputEmail.removeAttribute("disabled");
  inputPassword.removeAttribute("disabled");

  btnSave.classList.remove("d-none");
  btnEdit.classList.add("d-none");
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const { id } = infoUser;

  let newInfoUser = {
    name: inputName.value,
    email: inputEmail.value,
    password: inputPassword.value,
  };

  newInfoUser.id = id;

  sessionStorage.setItem("infoUser", JSON.stringify(newInfoUser));

  let url = `${USER}/${id}`;

  await PutData(url, newInfoUser);
});

btnDelete.addEventListener("dblclick", async (e) => {
  let id = e.target.id;

  let url = `${USER}/${id}`;

  await DeleteData(url);
});
