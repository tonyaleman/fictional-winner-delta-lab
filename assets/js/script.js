console.log("Loading script.js");

document
  .querySelector("#button-profile")
  .addEventListener("click", createUserProfile);

function createUserProfile(e) {
  e.preventDefault();

  const nameInput = document.querySelector("#name").value;
  const favoriteInput = document.querySelector("#favorite").value;
  const commentInput = document.querySelector("#comment").value;

  const userData = {
    name: nameInput,
    favorite: favoriteInput,
    comment: commentInput,
  };

  console.log('User Data:', userData);
}

async function loadOptions() {
  const response = await fetch("assets/data/data.json");

  if (!response.ok) {
    throw new Error("Could not load local JSON");
  }

  const data = await response.json();

  console.log(data);

  const favorite = document.querySelector("#favorite");
  let newOption;

  data.forEach((choice) => {
    newOption = new Option(choice.name, choice.value);
    favorite.appendChild(newOption);
  });
}

loadOptions();
