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
    words += title.split(" ");
}
console.log('Found ' + words.length + ' words.');
    /*
            words = f.read().replace("\"", "").split()
        index = 1
        self.chain = {}
        for word in words[index:]:
            key = words[index - 1]
            if key in self.chain:
                self.chain[key].append(word)
            else:
                self.chain[key] = [word]
            index += 1

    def response(self, query, message):
        word = random.choice(list(self.chain.keys()))
        message = word.capitalize()
        for _ in range(random.randint(4, 10)):
            word = random.choice(self.chain[word])
            message += " " + word

        return message
*/
