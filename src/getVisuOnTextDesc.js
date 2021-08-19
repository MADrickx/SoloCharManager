const getVisuOnTextDesc = () =>{
	let button = document.getElementById('description-visu')
	let target = document.getElementById('description-div-visu');
	button.addEventListener('click', () => {
		let inputValue = document.getElementById('description').value;
		target.classList.toggle('hidden');
		button.classList.toggle('active');
		if (button.classList.contains('active')){
			target.innerHTML = inputValue;
			button.addEventListener('click', () => {
				target.classList.toggle('hidden');
				button.classList.toggle('active');
			})
		}
	})
}

export default getVisuOnTextDesc;