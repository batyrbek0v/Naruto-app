

// DOM-ELEMENTS
    const $back = document.querySelector('.arrow')
const $name = document.querySelector('.name')
const $clan = document.querySelector('.clan')
const $power = document.querySelector('.power')
const $element = document.querySelector('.element')
const $level = document.querySelector('.level')
const $village = document.querySelector('.village')
const $URL = document.querySelector('.URL')
const $add = document.querySelector('.add')
const $fill = document.querySelector('.fill')
// DOM-ELEMENTS


$back.addEventListener('click', e => {
    e.preventDefault()
    window.open('./index.html', '_self')
})

$add.addEventListener('click', e => {
    e.preventDefault()
    if
    (
        $name.value.length === 0 ||
        $clan.value.length === 0 ||
        $power.value.length === 0 ||
        $element.value.length === 0 ||
        $level.value.length === 0 ||
        $village.value.length === 0
    ){
        if($name.value.length === 0){
            $name.style.borderColor = 'red'
            $fill.innerHTML = 'FILL THE !'
            $fill.style.color = 'red'
        }
        if($clan.value.length === 0){
            $clan.style.borderColor ='red'
            $fill.innerHTML = 'FILL THE AREA !'
            $fill.style.color = 'red'
        }
        if($power.value.length === 0){
            $power.style.borderColor = 'red'
            $fill.innerHTML = 'FILL THE AREA !'
            $fill.style.color = 'red'
        }
        if($element.value.length === 0){
            $element.style.borderColor = 'red'
            $fill.innerHTML = 'FILL THE AREA !'
            $fill.style.color = 'red'
        }
        if($level.value.length === 0){
            $level.style.borderColor = 'red'
            $fill.innerHTML = 'FILL THE AREA !'
            $fill.style.color = 'red'
        }
        if($village.value.length === 0){
            $village.style.borderColor = 'red'
            $fill.innerHTML = 'FILL THE AREA !'
            $fill.style.color = 'red'
        }
        if($URL.value.length === 0){
            $URL.style.borderColor = 'red'
            $fill.innerHTML = 'FILL THE AREA !'
            $fill.style.color = 'red'
        }
    }else{
        const base = JSON.parse(localStorage.getItem('ninjas'))
        localStorage.setItem('ninjas', JSON.stringify(
            [...base, 
            {
                id:12,
                name:$name.value,
                clan:$clan.value,
                power:$power.value,
                element:$element.value,
                level:$level.value,
                village:$village.value,
                image:$URL.value,
            }]
        ))
        window.open('./index.html', '_self')
    }
})