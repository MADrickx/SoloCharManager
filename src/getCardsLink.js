import getVisuOnTextDesc from './getVisuOnTextDesc.js';
import countChar from './countChar.js';
import typeManagement from './typeManagement.js';

const modalsContainer = document.getElementById('modal-container');
const modalClose = document.getElementById('addChar-close');
const modalModClose = document.getElementById("modChar-close");
const target = document.getElementById('card__target');
const getCardsLink = async () => {
	const btnsModChar = await document.getElementsByClassName('btn-modChar');
	const arrBtnsModChar = await Array.from(btnsModChar);
	for (let i = 0; i < arrBtnsModChar.length; i++) {
		arrBtnsModChar[i].addEventListener('click', async () => {
			document.getElementById('modal-modChar').classList.remove('hidden');
			modalsContainer.classList.remove('hidden');
			//ici, on va recupèrer les données de la cartes pour les afficher dans notre modale
			let response = await fetch('https://character-database.becode.xyz/characters');
			let chars = await response.json(); //tableau objects
			document.getElementById('mod-image').src = `data:image/png;base64, ${chars[i].image}`;
			document.getElementById('mod-name').innerHTML = chars[i].name;
			document.getElementById('mod-shortDescription').innerHTML = chars[i].shortDescription;
			document.getElementById('mod-description').innerHTML = chars[i].description;
			document.getElementById('btn-mod').addEventListener('click', async () => {
				typeManagement();
				let inputs = Array.from(document.getElementsByTagName("input"))
				document.getElementById('modal-modChar').classList.add('hidden');
				inputs[0].value = "";
				preview.src = `data:image/png;base64, ${chars[i].image}`
				inputs[1].value = chars[i].name;
				inputs[2].value = chars[i].shortDescription;
				inputs[3].value = chars[i].description;
				const newImage = await inputs[0].addEventListener("change", async (ev) => {
					const file = ev.target.files[0];
					url = await readURL(file);
					preview.src = url;
				});

				document.getElementById('modal-addChar').classList.remove('hidden');
				countChar('name',20,0);
				countChar('origin',70,1)
				countChar('description',350,2)
				getVisuOnTextDesc();
				document.getElementById("btn-save").addEventListener("click", async () => {
					try {
						let name = inputs[1].value;
						let shortDescription = inputs[2].value;
						let description = inputs[3].value;
						let id = '';
						let image = chars[i].image;
						let preview = document.getElementById('preview').src;
						if (image =! preview) {
							console.log(image, preview.split(",")[1])
							let modCharWithImage = await fetch(`https://character-database.becode.xyz/characters/${chars[i].id}`, {
								method: "PUT",
								headers: {
									"Content-Type": "application/json"
								},
								body: JSON.stringify({
									description,
									shortDescription,
									id,
									name,
									image
								})
							});
						} else {
							image = preview.split(",")[1];
							let modCharWithImage = await fetch(`https://character-database.becode.xyz/characters/${chars[i].id}`, {
								method: "PUT",
								headers: {
									"Content-Type": "application/json"
								},
								body: JSON.stringify({
									description,
									shortDescription,
									id,
									name,
									image
								})
							})
						}
					} catch (error) {
						console.log(error)
					}
				});
				modalClose.addEventListener('click', () => {
					modalsContainer.classList.add('hidden'); // bouton qui ferme, au clique + class hidden
					document.getElementById("modal-addChar").classList.add('hidden');
				})
			})
			document.getElementById('btn-mod-delete').addEventListener('click',async () => {
				let deletedChar = await fetch(`https://character-database.becode.xyz/characters/${chars[i].id}`, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					},
				});
			})
			modalModClose.addEventListener('click', () => {
				modalsContainer.classList.add('hidden'); // bouton qui ferme, au clique + class hiden
				document.getElementById('modal-modChar').classList.add('hidden');
			})
		})
	}
}

export default getCardsLink;