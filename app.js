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
                  <span class="genre">Action</span>
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
        //console.log(data.results[i].image.url)
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
showDetails = (trendObj, id_key) => { 
    console.log(trendObj)
    console.log(trendObj.id[0])
    const homeScreen = document.querySelector('.home')
    const detailsScreen = document.querySelector('.details_page')
    const bgDisplay = document.querySelector('.backdrop_pic')
    const ttDisplay = document.querySelector('.detail_title')
    const detDisplay = document.querySelector('.details_container')
    for (let i = 0; i < trendObj.id.length; i++) { 
        if (trendObj.id[i] == id_key) { 
        fetch(`https://api.themoviedb.org/3/movie/${trendObj.id[i]}/credits?api_key=66ffe7fe1fbf9c25e7766e730cd29fcd`)
        .then(response => response.json())
        .then(data => showCast(data))
        .catch(err => console.error(err));
        fetch(`https://api.themoviedb.org/3/movie/${trendObj.id[i]}?api_key=66ffe7fe1fbf9c25e7766e730cd29fcd`)
        .then(response => response.json())
        .then(data => { 
            detDisplay.innerHTML = `<div class="details_container">
              <p>•${data.genres[0].name}-${data.genres[1].name}•${getTime(data.runtime)}</p>
              <p>${gradeVote(trendObj.vote[i])}</p>
              <p>${trendObj.overview[i]}</p>
          </div>`
        })
        .catch(err => console.error(err));
        
        
        bgDisplay.src = trendObj.bg[i];
        ttDisplay.innerHTML = `<span class="title">${trendObj.name[i]}</span>`
        
        homeScreen.style.display = "none";
        detailsScreen.style.display ="block"
        }
    
    } 
    
}
showCast = (data) => { 
    const list = data.cast;
    const display = document.querySelector('.actor_tray')
    
    let text = `<div>
                  <div>
                      <img src="${"https://image.tmdb.org/t/p/w500"+list[0].profile_path}" class="actor_pic">
                      <span>${list[0].name}</span>
                  </div>
                  <div>
                      <img src="${"https://image.tmdb.org/t/p/w185"+list[1].profile_path}" class="actor_pic">
                      <span>${list[1].name}</span>
                  </div>
              </div>
              <div>
                  <div>
                      <img src="${"https://image.tmdb.org/t/p/w185"+list[2].profile_path}" class="actor_pic">
                      <span>${list[2].name}</span>
                  </div>
                  <div>
                      <img src="${"https://image.tmdb.org/t/p/w185"+list[3].profile_path}" class="actor_pic">
                      <span>${list[3].name}</span>
                  </div>
              </div>
              <div>
                  <div>
                      <img src="${"https://image.tmdb.org/t/p/w185"+list[4].profile_path}" class="actor_pic">
                      <span>${list[4].name}</span>
                  </div>
                  <div>
                      <img src="${"https://image.tmdb.org/t/p/w185"+list[5].profile_path}" class="actor_pic">
                      <span>${list[5].name}</span>
                  </div>
              </div>`
    display.innerHTML = text
}
gradeVote = (num) =>  { 
    let stars = Math.floor(num / 2)
    let halfStar = num % 2;
    let text = ""
    for (let i = 0; i < stars; i++) { 
        text +=`<span class="material-icons-outlined">star</span>`
    }
    if (halfStar >= 0.5) { 
        text += `<span class="material-icons-outlined">star_half</span>`
    }
    text += `(${num})`
    return text
}
getTime = (time) => { 
    let hr = Math.floor(time / 60);
    let min = time % 60
    let text = `${hr}h${min}m`
    
    return text
}

createTrendButton = (trendObj) => { 
    console.log(trendObj)
    let btn = document.querySelectorAll('.trend_link_btn');
    for (let i = 0; i < 20; i++) { 
        btn[i].href = "movie.html"
        btn[i].addEventListener("click", 
        function() { 
            sessionStorage.setItem("trendObj", JSON.stringify(trendObj));
        sessionStorage.setItem("id_key", trendObj.id[i]) }
        )
    }
}
createNewMoviesButton = (trendObj) => { 
     console.log(trendObj)
    let btn = document.querySelectorAll('.nwmov_link_btn');
    for (let i = 0; i < 20; i++) { 
        btn[i].href = "movie.html"
        btn[i].addEventListener("click", 
        function() { 
            sessionStorage.setItem("trendObj", JSON.stringify(trendObj));
        sessionStorage.setItem("id_key", trendObj.id[i]) }
        )
    }
}
createUpcomingButton = (trendObj) => { 
     console.log(trendObj)
    let btn = document.querySelectorAll('.upcoming_link_btn');
    for (let i = 0; i < 20; i++) { 
        btn[i].href = "movie.html"
        btn[i].addEventListener("click", 
        function() { 
            sessionStorage.setItem("trendObj", JSON.stringify(trendObj));
        sessionStorage.setItem("id_key", trendObj.id[i]) }
        )
    }
}

