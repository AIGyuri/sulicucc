const legnepszerubbElem = document.querySelector(".legnepszerubb");


fetch("/api/legnepszerubb")
  .then((response) => response.json())
  .then((data) => {
    if (data.etelNev) {
      legnepszerubbElem.textContent = data.etelNev;
    } else {
      legnepszerubbElem.textContent = "LECSÓ KOLBÁSZCSIPSSZEL";
    }
  })
  .catch((error) => {
    console.error(error);
    legnepszerubbElem.textContent = "LECSÓ KOLBÁSZCSIPSSZEL";
  });