const getVisuOnTextDesc = () => {
    const button = document.getElementById('description-visu')
    const target = document.getElementById('description-div-visu')
    button.addEventListener('click', () => {
        const inputValue = document.getElementById('description').value
        target.classList.toggle('hidden')
        button.classList.toggle('active')
        if (button.classList.contains('active')) {
            target.innerHTML = inputValue
            button.addEventListener('click', () => {
                target.classList.toggle('hidden')

                button.classList.toggle('active')
            })
        }
    })
}

export default getVisuOnTextDesc
