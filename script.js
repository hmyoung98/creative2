const url = "http://openlibrary.org/books/OL24619744M.json"
fetch(url)
	.then(function(response) { 
		return response.json(); 
	})
	.then(function(json) {
		let results = "";
		results += "<h3>" + json.title + "</h3>"
		results += "<p>by <em>" + json.by_statement + "</em></p>"
		results += "<p>" + json.description.value + "</p><br/>"

	 	document.getElementById("airborn").innerHTML = results;
	})

const url2 = "http://openlibrary.org/books/OL24742927M.json"
fetch(url2)
	.then(function(response) {
		return response.json();
	})
	.then(function(json) {
		let results = "";
		results += "<h3>" + json.title + "</h3>"
                results += "<p><em>" + json.by_statement + "</em></p>"
                results += "<p>" + json.description.value + "</p><br/>"

                document.getElementById("peter").innerHTML = results;

	})

const url3 = "http://openlibrary.org/books/OL7515687M.json"
fetch(url3)
        .then(function(response) {
                return response.json();
        })
        .then(function(json) {
                let results = "";
		results += "<h3>" + json.title + "</h3>"
                results += "<p><em>" + json.by_statement + "</em></p>"
                results += "<p>" + json.description.value + "</p>"

                document.getElementById("hugo").innerHTML = results;

        })

