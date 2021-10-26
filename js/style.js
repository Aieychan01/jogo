const buger = document.querySelector('.ham');
const back = document.querySelector('.background');
let naoPulando = false;
let position = 0;

function eventos01(event) {
    if (event.keyCode === 32) {
        if (!naoPulando) {
            pulo();
        }
    }
}

function pulo() {
    
    naoPulando = true;

    let intervalo = setInterval(() => {
        if (position >= 150) {
            clearInterval(intervalo);
            //descendo
            let novoIntervalo = setInterval(() => {
                if (position <= 0) {
                    clearInterval(novoIntervalo);
                    naoPulando = false;
                } else {
                    position -= 20;
                    buger.style.bottom = position + 'px';
                }
            }, 20);

        }
        else {
            //subindo
            position += 20;
            buger.style.bottom = position + 'px';
        }
    }, 20);
}


function desafio() {
    const casa = document.createElement('div');
    let casaPosition = 1000;
    let novaCasa = Math.random() * 6000;

    casa.classList.add('casa');
    casa.style.left = 1000 + 'px';
    back.appendChild(casa);

    let inter = setInterval(() => {
        if (casaPosition < -60 ) {
            clearInterval(inter);
            back.removeChild(casa);

        }else if ((casaPosition > 0) && (casaPosition < 60) && (position < 60)) {
            clearInterval(inter);
             document.body.innerHTML = '<h1>Fim de jogo</h1>' 
        }
        else {
            casaPosition -= 10;
            casa.style.left = casaPosition + 'px';
        }

    }, 20);

    setTimeout(desafio, novaCasa);
}

desafio();
document.addEventListener('keyup', eventos01);