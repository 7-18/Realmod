import { GetData } from "../helpers/DataCRUD.js";
import { USER } from "../helpers/urls.js";

const form = document.getElementById("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const data = await GetData(USER);

  data.forEach((user) => {
    const { email: email_USER, password: password_USER } = user;
    if (email === email_USER && password === password_USER) {
      let loginUser = data.find((user) => user.email === email);
      if (loginUser) {
        sessionStorage.setItem("infoUser", JSON.stringify(loginUser));
        window.location = "./pages/home.html";
      } else {
      alert("User not found");
    }
    } 
  });
});
