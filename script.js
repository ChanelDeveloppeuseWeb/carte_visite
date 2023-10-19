// declaration de ma variable etudiants

let etudiants = {
  nom: "",
  proffesion: "",
  date: "",
  age: "",
  photo: "",
};

function validateForm() {
  // je recupere les donnees du formulaire
  etudiants.nom = document.getElementById("Nom").value;
  etudiants.proffesion = document.getElementById("Proffession").value;
  etudiants.date = document.getElementById("Date").value;
  etudiants.age = document.getElementById("Age").value;
  etudiants.photo = document.getElementById("Photo").value;
  

  let image = document.getElementById("Photo").files[0];
  let render = new FileReader();

  document.querySelector(".content").style.display = "none";
  document.querySelector("#content").style.display = "block";

  // j affiche mes donnees
  document.querySelector("#nom").innerHTML = "nom: " + etudiants.nom;
  document.querySelector("#proffesion").innerHTML =
    "proffesion: " + etudiants.proffesion;
  document.querySelector("#date").innerHTML = "date: " + etudiants.date;
  document.querySelector("#age").innerHTML = "age: " + etudiants.age;
  document.querySelector("#image").innerHTML = "photo:" + etudiants.photo;
  console.log(
    etudiants.nom,
    etudiants.proffesion,
    etudiants.age,
    etudiants.photo,
    etudiants.date
  );
  render.onload = function () {
    // console.log("htud")

    document.getElementById("image").src = render.result;
  }
  
  render.readAsDataURL(image);
 
  // console.log("1 htud")
}

function resetForm() {
  document.getElementById("Nom").value = "";
  document.getElementById("Proffession").value = "";
  document.getElementById("Date").value = "";
  document.getElementById("Age").value = "";
  document.getElementById("Photo").value = "";
  document.querySelector(".content").style.display = "block";
  document.querySelector("#content").style.display = "none";
}

let btn = document.querySelector("#button");
btn.addEventListener('submit',validateForm);


let btnReset = document.querySelector("#reset");
btnReset.addEventListener("click",resetForm);
