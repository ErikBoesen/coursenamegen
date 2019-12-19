function getTitles() {
    let req = new XMLHttpRequest();
    req.open('GET', 'titles.txt', false);
    req.send();
    let response = req.response;
    return response.split("\n");
}

let titles = getTitles();
console.log('Loaded ' + titles.length + ' titles.');

const END = 0;
let words = [];
for (let title of titles) {
    words = words.concat(title.split(" "));
    // Add separator
    words.push(END);
}
console.log('Found ' + words.length + ' words.');

// Build chain
let index = 1;
let chain = {};
for (let word of words.slice(index)) {
    key = words[index - 1];
    if (key in chain) {
        chain[key].push(word)
    } else {
        chain[key] = [word];
    }
    index += 1;
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function response() {
    let keys = Object.keys(chain);
    let word = keys[keys.length * Math.random() << 0];
    let message = capitalize(word);
    let maxLength = 30;
    for (let i = 0; i < maxLength; i++) {
        word = chain[word][chain[word].length * Math.random() << 0];
        if (word == END) {
            break;
        }
        message += " " + word;
    }
    return message;
}

let elements = {
    output: document.getElementById('output'),
    generate: document.getElementById('generate'),
}

function setOutput() {
    // InnerHTML used intentionally here, because italics are sometimes used.
    output.innerHTML = response();
}
setOutput();
generate.onclick = setOutput;
