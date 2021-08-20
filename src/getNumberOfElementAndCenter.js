const getNumberOfElementAndCenter = (props) => {
    const target = document.getElementById('card__target')
    const targetlength = props.length
    if (targetlength < 4) {
        target.style.justifyContent = 'center'
    } else {
        target.style.justifyContent = 'space-between'
    }
}

export default getNumberOfElementAndCenter
