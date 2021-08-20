/* eslint-disable no-console */
/* eslint-disable no-shadow */
const countChar = (id, maxChar, pos) => {
    const inputCount = document.getElementById(id)
    console.log(inputCount)
    const inputLength = inputCount.value.length
    const targetS = document.querySelectorAll('.input-char-count')
    targetS[pos].innerHTML = `${inputLength} on max ${maxChar} char.`
    inputCount.addEventListener('input', () => {
        // eslint-disable-next-line no-shadow
        const inputCount = document.getElementById(id)
        const inputLength = inputCount.value.length
        inputCount.maxLength = maxChar
        console.log(inputLength, inputCount)
        const targetS = document.querySelectorAll('.input-char-count')
        targetS[pos].innerHTML = `${inputLength} on max ${maxChar} char.`
    })
}

export default countChar
