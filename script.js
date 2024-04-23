// let textDiv = document.getElementById("text")
// let newTxt = "Mersad is the Best :)"
// let txtCounter = 0

// function typeWriter() {
//     let timeZone = setInterval(() => {
//         if(txtCounter < newTxt.length) {
//             textDiv.innerHTML += newTxt[txtCounter]
//             txtCounter++
//         } else {
//             clearInterval(timeZone)
//         }
//     }, 100)
// }

// typeWriter()

/////////////////////////////////////////////////////////////////

let textDiv = document.getElementById("text");
let newTxt = "Mersad is the Best :)"
let txtCounter = 0;
let isTyping = true;
let isDeleting = false;

function typeWriter() {
    setInterval(() => {
        if (isTyping) {
            if (txtCounter < newTxt.length) {
                textDiv.innerHTML += newTxt[txtCounter];
                txtCounter++;
            } else {
                isTyping = false;
                isDeleting = true;
            }
        } else if (isDeleting) {
            if (txtCounter >= 0) {
                textDiv.innerHTML = newTxt.slice(0, txtCounter);
                txtCounter--;
            } else {
                isTyping = true;
                isDeleting = false;
                txtCounter = 0;
            }
        }
    }, 80);
}

typeWriter();