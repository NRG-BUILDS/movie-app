fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=66ffe7fe1fbf9c25e7766e730cd29fcd')
.then(response => response.json())
.then(response => showTrending(response))
.catch(err => console.error(err));


showTrending = (data) => { 
    const list = data.results;
    let picArray = []
    let trendObj = {
            name: [],
            id: [],
            bg: [],
            overview: [],
            vote: []
        }
    let text = ""
    const display = document.querySelector('.trending');
    display.innerHTML = ""
    
    for(let i = 0; i < data.results.length; i++) { 
         
        let picSrc = "https://image.tmdb.org/t/p/w500" + list[i].poster_path;
        let bgSrc = "https://image.tmdb.org/t/p/w1280" + list[i].backdrop_path
        let name = list[i].original_title;
        let movie_id = list[i].id
        let overview = list[i].overview;
        let vote = list[i].vote_average;
        
        
        trendObj.name[i] = list[i].original_title;
        trendObj.id[i] = movie_id;
        trendObj.bg[i] = bgSrc;
        trendObj.overview[i] = overview;
        trendObj.vote[i] = vote;
        picArray.push(picSrc);
        
        text += `<div>
              <img src="${picArray[i]}" class="movie_pic">
              <div class="slide_info">
                  <span class="title">${name}</span>
                  <span class="genre"><span class="material-icons-outlined">star</span>${vote}</span>
                  <span class="trend_number">Trending #${i+1}</span><button class="trend_div"><a class='trend_link_btn'><span class='material-icons-outlined'>arrow_forward</span></a></button>
                  <span class="brief_synopsis">${overview}</span>
              </div>
          </div>`
        display.innerHTML = text;  
    }
    createTrendButton(trendObj);
}


fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=66ffe7fe1fbf9c25e7766e730cd29fcd')
.then(response => response.json())
.then(response => showNewMovies(response))
.catch(err => console.error(err));

showNewMovies = (data) => { 
    //console.log(data);
    const list = data.results;
    let picArray = []
    let nmovObj = {
        name: [],
        id: [],
        bg: [],
        overview: [],
        vote: []
    }
    let text = ""
    const display = document.querySelector('.new_movies');
    display.innerHTML = ""
    for(let i = 0; i < data.results.length; i++) { 
        let picSrc = "https://image.tmdb.org/t/p/w500" + list[i].poster_path;
        let name = list[i].original_title;
        let vote = list[i].vote_average;
        let bgSrc = "https://image.tmdb.org/t/p/w1280" + list[i].backdrop_path
        let movie_id = list[i].id
        let overview = list[i].overview;
        
        
        nmovObj.name[i] = list[i].original_title;
        nmovObj.id[i] = movie_id;
        nmovObj.bg[i] = bgSrc;
        nmovObj.overview[i] = overview;
        nmovObj.vote[i] = vote;
        
        picArray.push(picSrc);
        text += `<div>
                  <img src="${picArray[i]}" class="movie_pic">
                  <div class="slide_info">
                      <span class="genre">${name}<br>${vote}</span><button class="trend_div"><a class='nwmov_link_btn'><span class='material-icons-outlined'>arrow_forward</span></a></button>
                  </div>
              </div>`
    }
    display.innerHTML += text;
    createNewMoviesButton(nmovObj);
}




fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=66ffe7fe1fbf9c25e7766e730cd29fcd')
.then(response => response.json())
.then(response => showUpcoming(response))
.catch(err => console.error(err));

showUpcoming = (data) => { 
    //console.log(data);
    const list = data.results;
    let picArray = []
    let upcomingObj = {
        name: [],
        id: [],
        bg: [],
        overview: [],
        vote: []
    }
    let text = ""
    const display = document.querySelector('.upcoming');
    display.innerHTML = ""
    for(let i = 0; i < data.results.length; i++) { 
        let picSrc = "https://image.tmdb.org/t/p/w500" + list[i].poster_path;
        let name = list[i].original_title;
        let releaseDate = list[i].release_date;
        let bgSrc = "https://image.tmdb.org/t/p/w1280" + list[i].backdrop_path
        let movie_id = list[i].id
        let overview = list[i].overview;
        let vote = list[i].vote_average;
        
        
        upcomingObj.name[i] = list[i].original_title;
        upcomingObj.id[i] = movie_id;
        upcomingObj.bg[i] = bgSrc;
        upcomingObj.overview[i] = overview;
        upcomingObj.vote[i] = vote;
        
        picArray.push(picSrc);
        text += `<div>
                  <img src="${picArray[i]}" class="movie_pic">
                  <div class="slide_info">
                      <span class="genre">${name}<br>${releaseDate}</span><button class="trend_div"><a class='upcoming_link_btn'><span class='material-icons-outlined'>arrow_forward</span></a></button>
                  </div>
              </div>`
    }
    display.innerHTML += text;
    createUpcomingButton(upcomingObj);
}



fetch('https://api.themoviedb.org/3/tv/popular?api_key=66ffe7fe1fbf9c25e7766e730cd29fcd')
.then(response => response.json())
.then(response => showTopSeries(response))
.catch(err => console.error(err));

showTopSeries = (data) => { 
    //console.log(data);
    const list = data.results;
    let picArray = []
    let topSeriesObj = {
        name: [],
        id: [],
        bg: [],
        overview: [],
        vote: []
    }
    let text = ""
    const display = document.querySelector('.top_series');
    display.innerHTML = ""
    for(let i = 0; i < data.results.length; i++) { 
        let picSrc = "https://image.tmdb.org/t/p/w500" + list[i].poster_path;
        let name = list[i].name;
        let vote = list[i].vote_average;
        let bgSrc = "https://image.tmdb.org/t/p/w1280" + list[i].backdrop_path
        let movie_id = list[i].id
        let overview = list[i].overview;
        
        
        topSeriesObj.name[i] = name;
        topSeriesObj.id[i] = movie_id;
        topSeriesObj.bg[i] = bgSrc;
        topSeriesObj.overview[i] = overview;
        topSeriesObj.vote[i] = vote;
        
        picArray.push(picSrc);
        text += `<div>
                  <img src="${picArray[i]}" class="movie_pic">
                  <div class="slide_info">
                      <span class="genre">${name}<br>${vote}</span><button class="trend_div"><a class='series_link_btn'><span class='material-icons-outlined'>arrow_forward</span></a></button>
                  </div>
              </div>`
    }
    display.innerHTML += text;
    createTopSeriesButton(topSeriesObj);
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
    fetch(`https://api.themoviedb.org/3/search/multi?api_key=66ffe7fe1fbf9c25e7766e730cd29fcd&language=en-US&query=${query}&page=1&include_adult=true`)
        .then(response => response.json())
        .then(data => showResults(data, query))
        .catch(err => console.error(err));
}
showResults = (data, query) => { 
    const list = data.results
    let displayContainer = document.querySelector('.search_results_container');
    let display = document.querySelector('.search_results')
    document.querySelector(`#query_display`).innerHTML = query;
    let otherDisplay = document.querySelector('.main_sections');
    let picArray = [];
    let searchResObj = {
        name: [],
        id: [],
        bg: [],
        overview: [],
        vote: [],
        type: []
    }
    let i = 0;
    let text = ""
    for(let i = 0; i < 5; i++) { 
        let name;
        let pic = "https://image.tmdb.org/t/p/w500" + list[i].poster_path;
        let movie_id = list[i].id
        let overview = list[i].overview
        let vote = list[i].vote_average
        let bgSrc = "https://image.tmdb.org/t/p/w500" + list[i].backdrop_path
        picArray.push(pic)
        let years 
        if(list[i].media_type == "movie") { 
            years = list[i].release_date.slice(0, 4);
            name = list[i].title
        } else {
            years = list[i].first_air_date.slice(0, 4);
            name = list[i].name
        }
        let media_type = list[i].media_type
        
        searchResObj.name[i] = name;
        searchResObj.id[i] = movie_id;
        searchResObj.bg[i] = bgSrc;
        searchResObj.overview[i] = overview;
        searchResObj.vote[i] = vote;
        searchResObj.type[i] = media_type
        
        text += `<div>
                  <img src="${picArray[i]}" class="movie_pic">
                  <div class="slide_info">
                      <span class="title-sm">${name}</span>
                      <span class="genre">${years}</span><button class="trend_div"><a class='search_link_btn'><span class='material-icons-outlined'>arrow_forward</span></a></button>
                  </div>
              </div>`
    }
    displayContainer.style.display = "block";
    otherDisplay.style.display = "none";
    display.innerHTML = text;
    i++;
    createSearchResButton(searchResObj)
}
closeSearch = () => { 
    let displayContainer = document.querySelector('.search_results_container');
    let otherDisplay = document.querySelector('.main_sections');
    otherDisplay.style.display = "block"
    displayContainer.style.display = "none"
}
createTrendButton = (trendObj) => { 
    
    let btn = document.querySelectorAll('.trend_link_btn');
    for (let i = 0; i < 20; i++) { 
        btn[i].href = "movie.html"
        btn[i].addEventListener("click", 
        function() { 
            let type = "movie"
            sessionStorage.setItem("trendObj", JSON.stringify(trendObj));
            sessionStorage.setItem("id_key", trendObj.id[i]) 
            sessionStorage.setItem("item_type", type)
        }
            
        )
    }
}
createNewMoviesButton = (trendObj) => { 
     
    let btn = document.querySelectorAll('.nwmov_link_btn');
    for (let i = 0; i < 20; i++) { 
        btn[i].href = "movie.html"
        btn[i].addEventListener("click", 
        function() { 
            let type = "movie"
            sessionStorage.setItem("trendObj", JSON.stringify(trendObj));
            sessionStorage.setItem("id_key", trendObj.id[i]) 
            sessionStorage.setItem("item_type", type)
        }
        
        )
    }
}
createUpcomingButton = (trendObj) => { 
     
    let btn = document.querySelectorAll('.upcoming_link_btn');
    for (let i = 0; i < 20; i++) { 
        btn[i].href = "movie.html"
        btn[i].addEventListener("click", 
        function() { 
            let type = "movie"
            sessionStorage.setItem("trendObj", JSON.stringify(trendObj));
            sessionStorage.setItem("item_type", type);
            sessionStorage.setItem("id_key", trendObj.id[i]) 
            
        }
        )
    }
}
createTopSeriesButton = (trendObj) => { 
    
    let btn = document.querySelectorAll('.series_link_btn');
    for (let i = 0; i < 20; i++) { 
        btn[i].href = "movie.html"
        btn[i].addEventListener("click", 
        function() { 
            let type = "tv"
            sessionStorage.setItem("trendObj", JSON.stringify(trendObj));
            sessionStorage.setItem("id_key", trendObj.id[i]) 
            sessionStorage.setItem("item_type", type)
        }
        )
    }
}
createSearchResButton = (trendObj) => { 
     
    let btn = document.querySelectorAll('.search_link_btn');
    for (let i = 0; i < 20; i++) { 
        btn[i].href = "movie.html"
        btn[i].addEventListener("click", 
        function() { 
            sessionStorage.setItem("trendObj", JSON.stringify(trendObj));
            sessionStorage.setItem("item_type", trendObj.media_type[i]);
            sessionStorage.setItem("id_key", trendObj.id[i]) 
            
        }
        )
    }
}