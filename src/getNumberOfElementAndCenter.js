const getNumberOfElementAndCenter = (props) => {
	const target = document.getElementById('card__target');
	length = props.length
	if(length<4){
		target.style.justifyContent = 'center';
	} else {
		target.style.justifyContent = 'space-between';
	}
}

export default getNumberOfElementAndCenter;