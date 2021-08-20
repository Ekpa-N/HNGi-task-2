const nameHolder = document.getElementById('name-holder');
const theButton = document.getElementsByTagName('button');

theButton[0].addEventListener('click', ()=> {
    nameHolder.innerText = 'EKPA';
    console.log("EKPA")
})

const namePrinter = (name) => {
    console.log(name);
}

namePrinter("Ekpa Ntan")
