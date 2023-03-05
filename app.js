const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '693844bab5msh01c0a96d3111ac8p13869ajsn656d8e45f937',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};
const options2 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '693844bab5msh01c0a96d3111ac8p13869ajsn656d8e45f937',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
};
const searchOption = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9291656858mshef3c555eb2e1bf1p18be2bjsnde3c88b7d459',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};
fetch('https://online-movie-database.p.rapidapi.com/title/get-most-popular-movies?currentCountry=US&purchaseCountry=US&homeCountry=US', options)
	.then(response => response.json())
	.then(response => getKeys(response))
	.catch(err => console.error(err));
fetch('https://online-movie-database.p.rapidapi.com/title/get-coming-soon-movies?currentCountry=US&purchaseCountry=US&homeCountry=US', options)
	.then(response => response.json())
	.then(response => getUpcomingKeys(response))
	.catch(err => console.error(err));	

let trendKeysArray = []	
getKeys = (response) => { 
    
    for (i = 0; i < 10; i++) { 
        let lastLetter = response[i].length - 1;
        trendKeysArray[i] = response[i].slice(7, lastLetter);
    }
    getTrendingData();
}

getTrendingData = () => { 
    let key =trendKeysArray.join("%2C")
    fetch(`https://moviesdatabase.p.rapidapi.com/titles/x/titles-by-ids?idsList=${key}`, options2)
	.then(response => response.json())
	.then(data => showTrending(data))
	.catch(err => console.error(err));
}
showTrending = (data) => { 
    trend = 1;
    const list = data.results
    let picArray = [];
    let i = 0
    for(let i = 0; i < 5; i++) { 
        if ( data.results[i].primaryImage === null) { 
            console.log(data)
        } else { 
            console.log(data.results[i].primaryImage.url)
            picArray.push(data.results[i].primaryImage.url)
        }
        
    }
    list.map((item) => {
        name = item.titleText.text;
        let picArray = [];
        
        text = `<div>
              <img src="${picArray[i]}" class="movie_pic">
              <div class="slide_info">
                  <span class="title">${name}</span>
                  <span class="genre">Action</span>
                  <span class="trend_number">Trending #${trend}</span>
                  <span class="brief_synopsis">Read More...</span>
              </div></div>`
        display = document.querySelector('.trending');
        display.innerHTML += text;
        trend++;
        i++;
        })
};

let upcomingKeysArray = []	
getUpcomingKeys = (response) => { 
    
    for (i = 0; i < 10; i++) { 
        let lastLetter = response[i].id.length - 1;
       upcomingKeysArray[i] = response[i].id.slice(7, lastLetter);
    }
    getUpcomingData();
}
getUpcomingData = () => { 
    let key = upcomingKeysArray.join("%2C")
    fetch(`https://moviesdatabase.p.rapidapi.com/titles/x/titles-by-ids?idsList=${key}`, options2)
	.then(response => response.json())
	.then(data => showUpcoming(data))
	.catch(err => console.error(err));
    
}
showUpcoming = (data) => { 
    const list = data.results
    
    let picArray = [];
        let i = 0
        for (let i = 0; i < 5; i++) {
            if ( data.results[i].primaryImage === null) { 
            console.log(data)
        } else { 
            console.log(data.results[i].primaryImage.url)
            picArray.push(data.results[i].primaryImage.url)
        }
        
        }    
    list.map((item) => {
        //console.log(item)
        name = item.titleText.text;
        date = item.releaseDate.day + '-' +item.releaseDate.month + '-' +item.releaseDate.year
        text = `<div>
                  <img src="${picArray[i]}" class="movie_pic">
                  <div class="slide_info">
                      <span class="genre">${name}:<br>${date}</span>
                  </div>
              </div>>`
        display = document.querySelector('.upcoming');
        display.innerHTML += text
        })
};
searchMovies = () => { 
    let query = document.querySelector('#search_bar').value;
    fetch(`https://imdb8.p.rapidapi.com/title/find?q=${query}`, searchOption)
        .then(response => response.json())
        .then(data => showResults(data))
        .catch(err => console.error(err));
}
showResults = (data) => { 
    const list = data.results
    let displayContainer = document.querySelector('.search_results_container');
    let display = document.querySelector('.search_results')
    let otherDisplay = document.querySelector('.main_sections');
    let picArray = [];
    let i = 0
    for(let i = 0; i < 5; i++) { 
        console.log(data.results[i].image.url)
        picArray.push(data.results[i].image.url)
    }
    console.log(picArray)
    list.map((items) => { 
        name = items.title;
        pic = items.image.url;
        years = items.year;
        text = `<div>
                  <img src="${picArray[i]}" class="movie_pic">
                  <div class="slide_info">
                      <span class="title-sm">${name}</span>
                      <span class="genre">${years}</span>
                  </div>
              </div>`
        displayContainer.style.display = "block";
        otherDisplay.style.display = "none";
        display.innerHTML += text;
        i++;
    })
}
