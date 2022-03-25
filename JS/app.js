const database = [
    {
        id:1,
        name:'Naruto Uzumaki',
        power:'Nine tails',
        village:'Konoha',
        level:'7th Hokage',
        clan:'Uzumaki',
        element:'Wind',
        image:'https://pa1.narvii.com/7422/b16cfd8029b2e6a4ec1764b3644e9396fa8d209dr1-480-270_hq.gif'
    },
    {   
        id:2,
        name:'Sasuke Uchiha',
        power:'Rinnegan + MS',
        village:'Konoha',
        level:'Shadow Hokage',
        clan:'Uchiha',
        element:'Lightning + Fire',
        image:'https://i.pinimg.com/originals/71/48/c8/7148c82838437c6d8ad478848e68d482.gif '
    },
    {
        id:3,
        name:'Kakashi Hatake',
        power:'Purple Chidori + MS',
        village:'Konoha',
        level:'6th Hokage',
        clan:'White Claw',
        element:'Stone + lightning + fire',
        image:'https://thumbs.gfycat.com/TotalOptimalAmericantoad-size_restricted.gif'
    },
    {
        id:4,
        name:'Minato Namikaze',
        power:'Rasengan + Yellow flash Fuuijin',
        village:'Konoha',
        level:'4th Hokage',
        clan:'Namikaze',
        element:'Lightning',
        image:'https://thumbs.gfycat.com/SaltyLateBasil-size_restricted.gif'
    },
    {
        id:5,
        name:'Itachi Uchiha',
        power:'MS + Genjutsu',
        village:'Konoha',
        level:'Unlimited',
        clan:'Akatsuki',
        element:'Fire',
        image:'https://media0.giphy.com/media/CchzkJJ6UrQmQ/giphy.gif'
    },
    {
        id:6,
        name:'Madara Uchiha',
        power:'MS + Six Path',
        village:'Konoha',
        level:'Destroyer',
        clan:'Akatsuki',
        element:'Fire',
        image:'https://media1.tenor.com/images/fe60d20d14d53b4e0929b0a0b17c0781/tenor.gif?itemid=17049380'
    },
    {
        id:7,
        name:'Hashirama Senju',
        power:'1000 hands of truth + Regeneration',
        village:'Konoha',
        level:'God of War',
        clan:'Senju',
        element:'Wood',
        image:'https://i.makeagif.com/media/7-28-2016/_eMaFk.gif'
    },
    {
        id:8,
        name:'Pain (Tendo)',
        power:'Six path',
        village:'Hidden Rain',
        level:'God',
        clan:'Akatsuki',
        element:'null',
        image:'https://thumbs.gfycat.com/JampackedExcitableHydra-size_restricted.gif'
    },
    {
        id:9,
        name:'Commando A',
        power:'Light shield',
        village:'Hidden Cloud',
        level:'4th Hokage',
        clan:'Lighter',
        element:'Lightning',
        image:'https://i.pinimg.com/originals/93/85/90/938590c23c6565490f49b7f4646f7601.gif'
    },
    {
        id:10,
        name:'Gaara',
        power:'Shukakus Sand',
        village:'Hidden Sand',
        level:'5th Kazekage',
        clan:'Land',
        element:'Sand',
        image:'https://i.gifer.com/C393.gif'
    },
    {
        id:11,
        name:'Kisame Hoshikage',
        power:'White Shark + Samehada sword',
        village:'Hidden Rain',
        level:'Untail bijuu',
        clan:'Akatsuki',
        element:'Water',
        image:'https://steamuserimages-a.akamaihd.net/ugc/941711796106927460/EDA08FFEF3AFDFFCD5241FD00926BCB4DAF47C09/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
    },
    {
        id:12,
        name:'Killer B',
        power:'Eight Tail + Katana',
        village:'Hidden Cloud',
        level:'Rap God',
        clan:'Lighter',
        element:'Lightning',
        image:'https://qph.fs.quoracdn.net/main-qimg-8380be95c048107f587b8a5ebf70fd9f'
    },    
]

// DOM-ELEMENTS
const $container = document.querySelector('.row')
const $search = document.querySelector('.search')
const $select = document.querySelector('.select')
const $shuriken = document.querySelector('.shuriken')
const $adaptive = document.querySelector('.adaptive-header')
const $addCard = document.querySelector('.addCard')
const $signOut = document.querySelector('.signOut')
const $bgInput = document.querySelector('.backgroundInput')
const $bgSelect = document.querySelector('.backgroundSelect')
// DOM-ELEMENTS


window.addEventListener('load', () => {
    if(!localStorage.getItem('ninjas')){
        localStorage.setItem('ninjas', JSON.stringify(database))
    }else{
        const ninja = JSON.parse(localStorage.getItem('ninjas')) 
        const ninjaWithID = ninja.map((item, index) => {
            return {...item, id:index}
        })
        localStorage.setItem('ninjas', JSON.stringify(ninjaWithID))
    }
})
window.addEventListener('load', cardTemplate(JSON.parse(localStorage.getItem('ninjas'))))

$shuriken.addEventListener('click', e => {
    e.preventDefault()
    $adaptive.classList.toggle('active')
    $shuriken.classList.toggle('active')
})


$addCard.addEventListener('click' , e => {
    e.preventDefault()
    window.open('./admin.html', '_self')
})

function cardTemplate(base) {
    const card = base.map(({id,image,name}) => {
        return `
            <div class='col-12 col-sm6 col-md-6 col-xl-4 mt-4'>
                <div class='card-header text-center text-light bg-dark'>
                    <h3>${name}</h3>
                </div>
                <div class='card-image'>
                    <img src=${image} style="height:300px" class="w-100"/>
                </div>
                <div class="card-footer bg-dark">
                    <button class="btn btn-outline-warning w-100"onclick="More(${id})">More</button>
                    <button class="btn btn-outline-danger w-100 mt-2"onclick="deleteCards(${id})">Delete</button>
                </div>
            </div>
        `
    }).join('')
    $container.innerHTML = card
}

$bgSelect.addEventListener('change', e =>{
    e.preventDefault()
    let selectedValue = e.target.value
    if(selectedValue === "Color"){
        $bgInput.setAttribute('placeholder', 'Select by Color:')
        $bgInput.addEventListener('input', e =>{
            let value = e.target.value.toUpperCase()
            document.body.style.background = value;
        })
    }
    if(selectedValue === "URL"){
        $bgInput.setAttribute('placeholder', 'Select by URL:')
        $bgInput.addEventListener('input', e =>{
            let imgValue = e.target.value
            document.body.style.backgroundImage = `url(${imgValue})`;
            console.log(imgValue);
        })
    }
})

$search.addEventListener('input', e => {
    let value = e.target.value.toUpperCase()
    let selectedValue = $select.value
    const ninjas = JSON.parse(localStorage.getItem('ninjas'))
    if($select.value === 'Name'){
        const filtered = ninjas.filter(item => item.name.toUpperCase().includes(value))
        cardTemplate(filtered)
    }else if($select.value === 'Clan'){
        const filtered = ninjas.filter(item => item.clan.toUpperCase().includes(value))
        cardTemplate(filtered)
    }else if($select.value === 'Power'){
        const filtered = ninjas.filter(item => item.power.toUpperCase().includes(value))
        cardTemplate(filtered)
    }else if($select.value === 'Element'){
        const filtered = ninjas.filter(item => item.element.toUpperCase().includes(value))
        cardTemplate(filtered)
    }else if($select.value === 'Village'){
        const filtered = ninjas.filter(item => item.village.toUpperCase().includes(value))
        cardTemplate(filtered)
    }

})

$select.addEventListener('change', e => {
    e.preventDefault()
    let selectedValue = e.target.value
    if(e.target.value === 'Clan'){
        $search.setAttribute('placeholder', 'Search by Clan:')
    }else if(e.target.value === 'Power'){
        $search.setAttribute('placeholder', 'Search by Power:')
    }else if(e.target.value === 'Element'){
        $search.setAttribute('placeholder', 'Search by Element:')
    }else if(e.target.value === 'Village'){
        $search.setAttribute('placeholder', 'Search by Village:')
    }else if(e.target.value === 'Name'){
        $search.setAttribute('placeholder', 'Search by Name:')
    }
})

function More(id) {
    const ninja = JSON.parse(localStorage.getItem('ninjas'))
    localStorage.setItem('more', JSON.stringify([ninja[id]]))
    window.location.reload()
    window.open('./more.html' , '_self')
}

function deleteCards(id) {
    const ninjas = JSON.parse(localStorage.getItem('ninjas'))
    const filtered = ninjas.filter(item => item.id !== id)
    localStorage.setItem('ninjas', JSON.stringify(filtered))
    window.location.reload()
}

$signOut.addEventListener('click', e => {
    e.preventDefault()
    localStorage.setItem('auth', false)
    window.open('./auth.html', '_self')
})

window.addEventListener('load', () => {
    const $auth = localStorage.getItem('auth')
    if($auth === 'false'){
        window.open('./auth.html', '_self')
    }
})