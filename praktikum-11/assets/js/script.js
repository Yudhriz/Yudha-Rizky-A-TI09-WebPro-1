// isi logic gamemu disini

// menangkap semua elemet a dengan looping
document.querySelectorAll("#option a").forEach((anchor) => {
    anchor.addEventListener("click", (element) => {
        computerChoice(element);
    })
})

function computerChoice(element){
    // menangkap pilihan user
    let pilihanUser = element.target.innerText;

    //  menangkap pilihan computer pada result dengan queryselector
    let pilihanComputer = document.querySelector("#result");

    let hasil = document.querySelector("#result2");

    // membuat array pilihan untuk computer
    let choices = ['Rock', 'Paper', 'Scissors'];

    // membuat pilihan computer random
    pilihanComputer.innerHTML = choices[Math.floor(Math.random() * choices.length)];
    pilihanComputer = pilihanComputer.innerHTML;

    // Jika User Menang
    if(pilihanUser == 'Rock' && pilihanComputer == 'Scissors'){
        hasil.innerHTML = "You Win";
    }

    if(pilihanUser == 'Paper' && pilihanComputer == 'Rock'){
        hasil.innerHTML = "You Win";
    }

    if(pilihanUser == 'Scissors' && pilihanComputer == 'Paper'){
        hasil.innerHTML = "You Win";
    }

    // Jika Komputer Menang
    if(pilihanUser == 'Rock' && pilihanComputer == 'Paper'){
        hasil.innerHTML = "You Lose";
    }

    if(pilihanUser == 'Paper' && pilihanComputer == 'Scissors'){
        hasil.innerHTML = "You Lose";
    }

    if(pilihanUser == 'Scissors' && pilihanComputer == 'Rock'){
        hasil.innerHTML = "You Lose";
    }

    // Jika Draw
    if(pilihanUser == pilihanComputer){
        hasil.innerHTML = "You Draw";
    }
}