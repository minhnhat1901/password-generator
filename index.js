const characters = [
    "A","B","C","D","E","F","G","H","I","J","K","L",
    "M","N","O","P","Q","R","S","T","U","V","W","X",
    "Y","Z","a","b","c","d","e","f","g","h","i","j",
    "k","l","m","n","o","p","q","r","s","t","u","v",
    "w","x","y","z", "0", "1", "2", "3", "4", "5",
    "6", "7", "8", "9","~","`","!","@","#","$","%","^",
    "&","*","(",")","_","-","+","=","{","[","}","]",",",
    "|",":",";","<",">",".","?","/"
];

const generatePassBtn = document.getElementById("pass-gen-btn");
const pass1El = document.getElementById("pass-option1");
const pass2El = document.getElementById("pass-option2");
const passLengthRequestEl = document.getElementById("pass-length-request");
const userInputEl = document.getElementById("user-input");
// const passwordLength = 15;

function generatePassword(length) {
    let password1 = ""
    let password2 = ""

    for (let i = 0; i < length; i++) {
        index1 = Math.floor(Math.random() * characters.length);
        index2 = Math.floor(Math.random() * characters.length);

        password1 += characters[index1];
        password2 += characters[index2];
    }

    pass1El.textContent = password1;
    pass2El.textContent = password2;
}

generatePassBtn.addEventListener("click", function() {
    passLengthRequestEl.hidden = false;
    generatePassBtn.textContent = "Generate Password";
    generatePassword(userInputEl.value);
});

function copyToClipboard(password) {
    navigator.clipboard.writeText(password)
        .then(() => alert("Copied: " + password))
        .catch(err => alert("Failed to copy!"));
}

pass1El.addEventListener("click", function() {
    copyToClipboard(this.textContent);
});

pass2El.addEventListener("click", function() {
    copyToClipboard(this.textContent);
});
