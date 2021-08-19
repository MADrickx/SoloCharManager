const countChar = (id,maxChar,pos) =>{
	let inputCount = document.getElementById(id);
	console.log(inputCount)
	let inputLength = inputCount.value.length;
	let targetS = document.querySelectorAll('.input-char-count');
	targetS[pos].innerHTML = `${inputLength} on max ${maxChar} char.`
	inputCount.addEventListener('input', () => {
		let inputCount = document.getElementById(id);
		let inputLength = inputCount.value.length;
		inputCount.maxLength = maxChar;
		console.log(inputLength,inputCount)
		let targetS = document.querySelectorAll('.input-char-count');
		targetS[pos].innerHTML = `${inputLength} on max ${maxChar} char.`
	})
}

export default countChar;