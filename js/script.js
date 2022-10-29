const synth = window.speechSynthesis;
let utterance = new SpeechSynthesisUtterance();
let currentCharacter;

document.addEventListener("click", elemento);
document.addEventListener("click", ()=>{
    console.log(utterance);
});
document.addEventListener("keydown", (e) => {
    if (e.code == "Escape") {
        stop();
    }
});
document.addEventListener("keydown", (e) => {
    console.log(e.code);
    if (e.code == "KeyS") {
        synth.pause();
        document.addEventListener("keydown", (e) => {
            if (e.code == "KeyS" && synth.paused) {
                synth.resume();
            }

        })
    }
});

utterance.addEventListener('boundary', e => {
    currentCharacter = e.charIndex
})


function speak(texto) {

    if (synth.speaking) {
        return
    }

    utterance.text = texto;
    utterance.rate = 1;
    utterance.name='Jorge';
    utterance.lang='es-ES';
    synth.speak(utterance);

}


function stop() {
    synth.resume()
    synth.cancel();
}

function elemento(e) {
    let target = e.target;
    let elemento = e.srcElement;
    if (target) {
        tag = target.tagName;
        if (tag != "BODY" && tag != "DIV" && tag != "HEAD" && tag != "HTML") {
            speak(target.innerText);       
        }

    } else if (elemento) {
        tag = elemento.tagName;
        if (tag != "BODY" && tag != "DIV" && tag != "HEAD" && tag != "HTML") {
            speak(elemento.innerText);
        }

    }
}