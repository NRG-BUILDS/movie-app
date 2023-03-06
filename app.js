fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=66ffe7fe1fbf9c25e7766e730cd29fcd')
.then(response => response.json())
.then(response => showTrending(response))
.catch(err => console.error(err));

showTrending = (data) => { 
    console.log(data);
    const list = data.results;
    let picArray = []
    let text = ""
    const display = document.querySelector('.trending');
    display.innerHTML = ""
    for(let i = 0; i < data.results.length; i++) { 
        let picSrc = "https://image.tmdb.org/t/p/w500" + list[i].poster_path;
        let name = list[i].original_title;
        let overview = list[i].overview;
        
        picArray.push(picSrc);
        text += `<div>
              <img src="${picArray[i]}" class="movie_pic">
              <div class="slide_info">
                  <span class="title">${name}</span>
                  <span class="genre">Action</span>
                  <span class="trend_number">Trending #${i+1}</span>
                  <span class="brief_synopsis">${overview}</span>
              </div>
          </div>`
    }
    display.innerHTML += text;
}


fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=66ffe7fe1fbf9c25e7766e730cd29fcd')
.then(response => response.json())
.then(response => showNewMovies(response))
.catch(err => console.error(err));

showNewMovies = (data) => { 
    console.log(data);
    const list = data.results;
    let picArray = []
    let text = ""
    const display = document.querySelector('.new_movies');
    display.innerHTML = ""
    for(let i = 0; i < data.results.length; i++) { 
        let picSrc = "https://image.tmdb.org/t/p/w500" + list[i].poster_path;
        let name = list[i].original_title;
        let vote = list[i].vote_average;
        
        picArray.push(picSrc);
        text += `<div>
                  <img src="${picArray[i]}" class="movie_pic">
                  <div class="slide_info">
                      <span class="genre">${name}<br>${vote}</span>
                  </div>
              </div>`
    }
    display.innerHTML += text;
}




fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=66ffe7fe1fbf9c25e7766e730cd29fcd')
.then(response => response.json())
.then(response => showUpcoming(response))
.catch(err => console.error(err));

showUpcoming = (data) => { 
    console.log(data);
    const list = data.results;
    let picArray = []
    let text = ""
    const display = document.querySelector('.upcoming');
    display.innerHTML = ""
    for(let i = 0; i < data.results.length; i++) { 
        let picSrc = "https://image.tmdb.org/t/p/w500" + list[i].poster_path;
        let name = list[i].original_title;
        let releaseDate = list[i].release_date;
        
        picArray.push(picSrc);
        text += `<div>
                  <img src="${picArray[i]}" class="movie_pic">
                  <div class="slide_info">
                      <span class="genre">${name}<br>${releaseDate}</span>
                  </div>
              </div>`
    }
    display.innerHTML += text;
}



const searchOption = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9291656858mshef3c555eb2e1bf1p18be2bjsnde3c88b7d459',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
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
