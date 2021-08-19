//imports
import cloner from './cloner.js'
import readURL from './readURL.js'
import typeManagement from './typeManagement.js';
import getNumberOfElementAndCenter from './getNumberOfElementAndCenter.js';
import getCardsLink from './getCardsLink.js';
//variables 

const modalsContainer = document.getElementById('modal-container');
const modalClose = document.getElementById('addChar-close');
const modalModClose = document.getElementById("modChar-close");
const target = document.getElementById('card__target');
let searchWord = document.getElementById('search');
var url = "";

//func

document.getElementById('search-form').addEventListener('submit',(ev)=>{
	ev.preventDefault()
})

window.onload = async function getChar() {
	let chars ='';
	try {
		let response = await fetch('https://character-database.becode.xyz/characters');
		chars = await response.json(); //tableau objects
		if (searchWord.value == ""){
			chars.forEach(({
				description,
				shortDescription,
				id,
				name,
				image
			}) => {
				cloner({description,shortDescription,id,name,image});
			})
		} 
	} catch(error) {
		console.log(error)
	}
	searchWord.addEventListener('input', async () =>{
		let filteredChar = chars.filter(element => {
			console.log(element.name.toLowerCase().includes(searchWord.value.toLowerCase()))
			return element.name.toLowerCase().includes(searchWord.value.toLowerCase())
		});
		console.log(filteredChar)
		getNumberOfElementAndCenter(filteredChar);
		target.innerHTML = "";
		filteredChar.forEach(({
			description,
			shortDescription,
			id,
			name,
			image
		}) => {
			cloner({description,shortDescription,id,name,image});
		})
	})

	setTimeout(() => {
		getCardsLink()
	}, 500);
}

document.getElementById("addChar").addEventListener("click", async () => {
	modalsContainer.classList.remove('hidden');
	document.getElementById("modal-addChar").classList.remove('hidden');
	typeManagement();
	let img = document.getElementById('image');
	let preview = document.getElementById('preview');
	let inputs = Array.from(document.getElementsByTagName("input"));
	const test = await inputs[0].addEventListener("change", async (ev) => {
		const file = ev.target.files[0];
		url = await readURL(file);
		preview.src = url;
	})
	document.getElementById("btn-save").addEventListener("click", async () => {
		try {
			let name = inputs[1].value;
			let shortDescription = inputs[2].value;
			let description = inputs[3].value;
			let id = "";
			let image = url.split(",")[1];
			let response = await fetch('https://character-database.becode.xyz/characters', {
				method: "POST",
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
		} catch (error) {
			console.log(error)
		}
	});

	document.getElementById("btn-delete").addEventListener("click", () => {
		inputs[0].value = ""
		inputs[1].value = ""
		inputs[2].value = ""
		inputs[3].value = ""
		let preview = document.getElementById('preview');
		preview.src = "a"
	});

	modalClose.addEventListener('click', () => {
		modalsContainer.classList.add('hidden'); // bouton qui ferme, au clique + class hidden
		document.getElementById("modal-addChar").classList.add('hidden');
	})
})