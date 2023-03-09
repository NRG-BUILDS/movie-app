let trendObj = JSON.parse(sessionStorage.getItem("trendObj"))
let id_key = sessionStorage.getItem("id_key")
let item_type = sessionStorage.getItem("item_type")
console.log(item_type)
checkItemType = () => { 
    if (item_type == "movie") { 
        showMovieDetails(trendObj, id_key, item_type)
    } else { 
        showSeriesDetails(trendObj, id_key, item_type)

    }
}
checkItemType()
function showMovieDetails(trendObj, id_key, item_type) {
    const detailsScreen = document.querySelector('.details_page')
    const bgDisplay = document.querySelector('.backdrop_pic')
    const ttDisplay = document.querySelector('.detail_title')
    const detDisplay = document.querySelector('.details_container')
    for (let i = 0; i < trendObj.id.length; i++) {
        if (trendObj.id[i] == id_key) {
            fetch(`https://api.themoviedb.org/3/${item_type}/${trendObj.id[i]}/credits?api_key=66ffe7fe1fbf9c25e7766e730cd29fcd`)
                .then(response => response.json())
                .then(data => showMovieCast(data))
                .catch(err => console.error(err));
            fetch(`https://api.themoviedb.org/3/movie/${trendObj.id[i]}?api_key=66ffe7fe1fbf9c25e7766e730cd29fcd`)
                .then(response => response.json())
                .then(data => {
                    detDisplay.innerHTML = `<div class="details_container">
              <p>${data.release_date.slice(0, 4)}•${getGenre(data.genres)}•${getTime(data.runtime)}</p>
              <p>${gradeVote(trendObj.vote[i])}</p>
              <p>${trendObj.overview[i]}</p>
              </div>`
                })
                .catch(err => console.error(err));
            fetch(`https://api.themoviedb.org/3/${item_type}/${trendObj.id[i]}/videos?api_key=66ffe7fe1fbf9c25e7766e730cd29fcd`)    
            .then(response => response.json())
            .then(data => { 
                console. log(data)
                const display = document.querySelector('.youtube_container')
                const video = data.results[1].key;
                display.src = `https://www.youtube.com/embed/${video}`
            })
            bgDisplay.src = trendObj.bg[i];
            ttDisplay.innerHTML = `<span class="title">${trendObj.name[i]}</span>`
        }

    }

}

function showSeriesDetails(trendObj, id_key, item_type) {
    const detailsScreen = document.querySelector('.details_page')
    const bgDisplay = document.querySelector('.backdrop_pic')
    const ttDisplay = document.querySelector('.detail_title')
    const detDisplay = document.querySelector('.details_container')
    for (let i = 0; i < trendObj.id.length; i++) {
        if (trendObj.id[i] == id_key) {
            fetch(`https://api.themoviedb.org/3/${item_type}/${trendObj.id[i]}/credits?api_key=66ffe7fe1fbf9c25e7766e730cd29fcd`)
                .then(response => response.json())
                .then(data => showTVCast(data))
                .catch(err => console.error(err));
            fetch(`https://api.themoviedb.org/3/${item_type}/${trendObj.id[i]}?api_key=66ffe7fe1fbf9c25e7766e730cd29fcd`)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    detDisplay.innerHTML = `<div class="details_container">
              <p>${data.first_air_date.slice(0, 4)}•${getGenre(data.genres)}•${data.number_of_episodes} episodes</p>
              <p>${gradeVote(data.vote_average)}</p>
              <p>${data.overview}</p>
              </div>`
                })
                .catch(err => console.error(err));
            fetch(`https://api.themoviedb.org/3/${item_type}/${trendObj.id[i]}/videos?api_key=66ffe7fe1fbf9c25e7766e730cd29fcd`)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    const display = document.querySelector('.youtube_container')
                    const video = data.results[1].key;
                    display.src = `https://www.youtube.com/embed/${video}`
                })
            bgDisplay.src = trendObj.bg[i];
            ttDisplay.innerHTML = `<span class="title">${trendObj.name[i]}</span>`
        }
    }
}
showTVCast = (data) => {
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
              
              </div>`
    display.innerHTML = text
}
showMovieCast = (data) => {
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
                      <img src="${"https://image.tmdb.org/t/p/w500"+list[2].profile_path}" class="actor_pic">
                      <span>${list[2].name}</span>
                  </div>
                  <div>
                      <img src="${"https://image.tmdb.org/t/p/w185"+list[3].profile_path}" class="actor_pic">
                      <span>${list[3].name}</span>
                  </div>
              </div>
              <div>
                                    <img src="${"https://image.tmdb.org/t/p/w500"+list[4].profile_path}" class="actor_pic">
                                    <span>${list[4].name}</span>
                                </div> <
              div >
                  <img src="${"https://image.tmdb.org/t/p/w185"+list[5].profile_path}" class="actor_pic">
                                    <span>${list[5].name}</span> <
                  /div> <
                  /div>
                  <div>
                                        <img src="${"https://image.tmdb.org/t/p/w500"+list[6].profile_path}" class="actor_pic">
                                        <span>${list[6].name}</span>
                                    </div> <
                  div >
                      <img src="${"https://image.tmdb.org/t/p/w185"+list[7].profile_path}" class="actor_pic">
                                        <span>${list[7].name}</span> <
                      /div> <
                      /div>

              </div>`
    display.innerHTML = text
}
gradeVote = (num) => {
    let stars = Math.floor(num / 2)
    let halfStar = num % 2;
    let text = ""
    for (let i = 0; i < stars; i++) {
        text += `<span class="material-icons-outlined">star</span>`
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
getGenre = (array) => { 
    let text = ""
    if (array.length === 0) { text = ""} else { 
        for (i = 0; i < array.length; i++) { 
            text += `${array[i].name}-`
        }
    }
    
    return text
}
