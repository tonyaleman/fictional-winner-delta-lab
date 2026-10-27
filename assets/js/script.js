console.log("Loading script.js");

async function loadOptions() {

  const response = await fetch("assets/data/data.json");

  if (!response.ok) {
    throw new Error("Could not load local JSON");
  }

  const data = await response.json();

  console.log(data);

  const favorite = document.getElementById("#favorite");
  let newOption;

  data.forEach((choice) => {
    newOption = new Option(choice.name, choice.value);
    favorite.appendChild(newOption);
  });


}

loadOptions();
