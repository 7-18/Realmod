import { GetData, PostData } from "../helpers/DataCRUD.js";
import { USER } from "../helpers/urls.js";

const form = document.getElementById("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const user = {
    id: crypto.randomUUID(),
    name,
    email,
    password,
  };

  if (name === "" || email === "" || password === "") {
    alert("Please fill all the fields");
  } else {
    await PostData(USER, user);
    window.location = "../index.html";
  }
});
