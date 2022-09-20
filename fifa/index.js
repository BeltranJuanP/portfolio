function getLeagueData() {
    var myHeaders = new Headers();
    myHeaders.append("X-AUTH-TOKEN", "e050c1c2-555c-4965-a39c-aaf6755a9285");
    myHeaders.append("Accept", "application/json")
    myHeaders.append("Content-Type", "application/json")

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };

    const url = "https://futdb.app/api/leagues"
    const query_string = "?page="

    const data = []

    for (let i = 1; i < 4; i++) {
        // const response = await fetch(url, requestOptions)
        // const data = await response.json();
        const RETRIES = 5
        let count = 0
        console.log(url + query_string + i)

        while (count < RETRIES) {
            fetch(url + query_string + i, requestOptions)
                .then(response => response.json())
                .then(result => {
                    console.log(result.items)
                    count = RETRIES
                })
                .catch(error => {
                    if (error == 500) {
                        count += 1
                    }
                    count = RETRIES
                })
        }
    }
    
    return data
}

console.log(getLeagueData())