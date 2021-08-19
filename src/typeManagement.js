const typeManagement = () =>{
	const arrayOfbuttons = document.querySelectorAll('.description-btn');
	for (let i=0;i<arrayOfbuttons.length;i++){
		arrayOfbuttons[i].addEventListener('click',()=>{
		if (arrayOfbuttons[i].id == 'btn-bold'){
			arrayOfbuttons[i].classList.toggle('active');
			if(arrayOfbuttons[i].matches('.active')){
				document.getElementById('description').value = document.getElementById('description').value + '<strong>';
			} else {
				document.getElementById('description').value = document.getElementById('description').value + '</strong>';
			}
		} else if (arrayOfbuttons[i].id == 'btn-italic'){
			arrayOfbuttons[i].classList.toggle('active');
			if(arrayOfbuttons[i].matches('.active')){
				document.getElementById('description').value = document.getElementById('description').value + '<em>';
			} else {
				document.getElementById('description').value = document.getElementById('description').value + '</em>';
			}
		} else if (arrayOfbuttons[i].id == 'btn-strike'){
			arrayOfbuttons[i].classList.toggle('active');
			if(arrayOfbuttons[i].matches('.active')){
				document.getElementById('description').value = document.getElementById('description').value + '<strike>';
			} else {
				document.getElementById('description').value = document.getElementById('description').value + '</strike>';
			}
		} else if (arrayOfbuttons[i].id == 'btn-ul'){
			arrayOfbuttons[i].classList.toggle('active');
			if(arrayOfbuttons[i].matches('.active')){
				document.getElementById('description').value = document.getElementById('description').value + '<ul><li>';
			} else {
				document.getElementById('description').value = document.getElementById('description').value + '</li></ul>';
			}
		} else if (arrayOfbuttons[i].id == 'btn-ol'){
			arrayOfbuttons[i].classList.toggle('active');
			if(arrayOfbuttons[i].matches('.active')){
				document.getElementById('description').value = document.getElementById('description').value + '<ol><li>';
			} else {
				document.getElementById('description').value = document.getElementById('description').value + '</li></ol>';
			}
		} else if (arrayOfbuttons[i].id == 'btn-quote'){
			arrayOfbuttons[i].classList.toggle('active');
			if(arrayOfbuttons[i].matches('.active')){
				document.getElementById('description').value = document.getElementById('description').value + '<q>';
			} else {
				document.getElementById('description').value = document.getElementById('description').value + '</q>';
			}
		} else {
			getVisuOnTextDesc();
		}
		})
	}
}

export default typeManagement;