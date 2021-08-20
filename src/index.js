/* eslint-disable prettier/prettier */
/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */

/* imports */
import cloner from "./cloner.js";
import readURL from "./readURL.js";
import typeManagement from "./typeManagement.js";
import getNumberOfElementAndCenter from "./getNumberOfElementAndCenter.js";
import getCardsLink from "./getCardsLink.js";
import "../sass/screen.scss";
// variables

const modalsContainer = document.getElementById("modal-container");
const modalClose = document.getElementById("addChar-close");
// eslint-disable-next-line no-unused-vars
const modalModClose = document.getElementById("modChar-close");
const target = document.getElementById("card__target");
const searchWord = document.getElementById("search");
let url = "";

// func

document.getElementById("search-form").addEventListener("submit", (ev) => {
  ev.preventDefault();
});

window.onload = async function getChar() {
  let chars = "";
  try {
    const response = await fetch(
      "https://character-database.becode.xyz/characters"
    );
    chars = await response.json(); // tableau objects
    // eslint-disable-next-line eqeqeq
    if (searchWord.value == "") {
      chars.forEach(({ description, shortDescription, id, name, image }) => {
        cloner({
          description,
          shortDescription,
          id,
          name,
          image,
        });
      });
    }
  } catch (error) {
    console.log(error);
  }
  searchWord.addEventListener("input", async () => {
    const filteredChar = chars.filter((element) => {
      console.log(
        element.name.toLowerCase().includes(searchWord.value.toLowerCase())
      );
      return element.name
        .toLowerCase()
        .includes(searchWord.value.toLowerCase());
    });
    console.log(filteredChar);
    getNumberOfElementAndCenter(filteredChar);
    target.innerHTML = "";
    filteredChar.forEach(
      ({ description, shortDescription, id, name, image }) => {
        cloner({
          description,
          shortDescription,
          id,
          name,
          image,
        });
      }
    );
  });

  setTimeout(() => {
    getCardsLink();
  }, 500);
};

document.getElementById("addChar").addEventListener("click", async () => {
  modalsContainer.classList.remove("hidden");
  document.getElementById("modal-addChar").classList.remove("hidden");
  typeManagement();
  // eslint-disable-next-line no-unused-vars
  const img = document.getElementById("image");
  const preview = document.getElementById("preview");
  const inputs = Array.from(document.getElementsByTagName("input"));
  // eslint-disable-next-line no-unused-vars
  const test = await inputs[0].addEventListener("change", async (ev) => {
    const file = ev.target.files[0];
    url = await readURL(file);
    preview.src = url;
  });
  document.getElementById("btn-save").addEventListener("click", async () => {
    try {
      const name = inputs[1].value;
      const shortDescription = inputs[2].value;
      const description = inputs[3].value;
      const id = "";
      const image = url.split(",")[1];
      // eslint-disable-next-line no-unused-vars
      const response = await fetch(
        "https://character-database.becode.xyz/characters",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            description,
            shortDescription,
            id,
            name,
            image,
          }),
        }
      );
    } catch (error) {
      console.log(error);
    }
  });

  document.getElementById("btn-delete").addEventListener("click", () => {
    inputs[0].value = "";
    inputs[1].value = "";
    inputs[2].value = "";
    inputs[3].value = "";
    preview.src = "a";
  });

  modalClose.addEventListener("click", () => {
    modalsContainer.classList.add("hidden"); // bouton qui ferme, au clique + class hidden
    document.getElementById("modal-addChar").classList.add("hidden");
  });
});
