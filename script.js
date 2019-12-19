function getTitles() {
    let req = new XMLHttpRequest();
    req.open('GET', 'titles.txt', false);
    req.send();
    let response = req.response;
    return response.split("\n");
}

let titles = getTitles();
console.log('Loaded ' + titles.length + ' titles.');

let words = [];
for (let title of titles) {
    words = words.concat(title.split(" "));
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
console.log(chain);

    /*
    def response(self, query, message):
        word = random.choice(list(self.chain.keys()))
        message = word.capitalize()
        for _ in range(random.randint(4, 10)):
            word = random.choice(self.chain[word])
            message += " " + word

        return message
*/
