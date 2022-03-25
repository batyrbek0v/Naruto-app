const identification = JSON.parse(localStorage.getItem('more'))
const back = document.querySelector('.arrow')

document.querySelector('.row').innerHTML = identification.map(({image,name,power,level,clan,village,element}) => {
    document.querySelector('.title').innerHTML = name
    document.querySelector('.titleDoc').innerHTML = name
    return `
        <div class="col-12 col-sm-12 col-md-12 col-xl-12">
            <div class="card-image text-center">
                <img src=${image} class="w-100" style="height:400px;object-fit:cover"/>
            </div>
            <div class="card-body bg-dark text-light text-center">
                <h3>Name: ${name}</h3>
                <h3>Clan: ${clan}</h3>
                <h3>Power: ${power}</h3>
                <h3>Element: ${element}</h3>
                <h3>Level: ${level}</h3>
                <h3>Village: ${village}</h3>
            </div>
        </div>
    `
})
back.addEventListener('click', e => {
    e.preventDefault()
    window.open('./index.html', '_self')
})