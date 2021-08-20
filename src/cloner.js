const template = document.getElementById('tpl-char')
const cloner = ({ description, shortDescription, name, image }) => {
    const targetCon = document.getElementById('card__target')
    const templateClone = template.content.cloneNode(true)
    templateClone.querySelector('.card__name').innerHTML = name
    templateClone.querySelector(
        '.card__img'
    ).src = `data:image/png;base64, ${image}`
    templateClone.querySelector('.card__desc').innerHTML = description
    templateClone.querySelector('.card__shortDesc').innerHTML = shortDescription
    targetCon.append(templateClone)
}

export default cloner
