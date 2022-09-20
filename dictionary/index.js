async function getWordData(word) {
    const url = "https://api.dictionaryapi.dev/api/v2/entries/en/"

    data = []
    await fetch(url + word)
        .then(response => {
            if (response.status === 404) {
                failed(response)
            } else {
                return response.json()
            }
        })
        .then(result => {
            data = result
        })
        .catch(error => {
            data = []
        });

    return data
}

function renderWordData(word, data) {
    const searchResultElement = document.getElementById("search_result")
    searchResultElement.textContent = ""

    const wordTitle = document.createElement("h2")
    wordTitle.className = "word"
    wordTitle.textContent = word

    searchResultElement.appendChild(wordTitle)

    console.log(data)

    const wordTypes = document.createElement("div")
    wordTypes.className = "word_types"

    let partOfSpeechSeen = new Set()
    for (let i = 0; i < data.length; i++) {
        const wordTypeSection = document.createElement("div")
        wordTypeSection.className = "word_type_section"

        dataSection = data[i]

        const wordType = document.createElement("h3")
        wordType.className = "word_type"
        wordType.textContent = dataSection.partOfSpeech

        if (partOfSpeechSeen.has(dataSection.partOfSpeech)) {
            continue;
        }

        partOfSpeechSeen.add(dataSection.partOfSpeech)
    
        wordTypeSection.appendChild(wordType)

        const meanings = document.createElement("ul")
        meanings.className = "meanings"

        let defSize = Math.min(dataSection.definitions.length, 3)
        for (let i = 0; i < defSize; i++) {
            const meaning = document.createElement("li")
            meaning.className = "meaning"
            meaning.textContent = dataSection.definitions[i].definition

            meanings.appendChild(meaning)
        }

        wordTypeSection.appendChild(meanings)
        wordTypes.appendChild(wordTypeSection)
    }
    console.log(partOfSpeechSeen)
    searchResultElement.appendChild(wordTypes)
}

function renderError() {
    const searchResultElement = document.getElementById("search_result")
    searchResultElement.textContent = ""

    const wordTitle = document.createElement("h2")
    wordTitle.className = "word"
    wordTitle.textContent = "Couldn't find defintion"

    searchResultElement.appendChild(wordTitle)

}

async function searchWord(event) {
    event.preventDefault();

    const word = document.getElementById("search_text").value

    const wordData = await getWordData(word)

    if (wordData.length !== 0) {
        renderWordData(word, wordData[0].meanings)
    } else {
        renderError()
    }
}