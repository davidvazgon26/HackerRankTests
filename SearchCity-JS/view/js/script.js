const boton = document.getElementById("button");

boton.addEventListener("click", async () => {
  const input = document.getElementById("input");
  const inputValue = input.value.trim();
  if (!inputValue) {
    alert("Please provide the valid input");
  } else {
    const isValid = inputValue
      .split("")
      .some((element) => !isNaN(element) || /\s/.test(element));

    if (isValid) {
      alert("'Please provide the valid input'");
    }
    console.log("no entro");
  }
});
