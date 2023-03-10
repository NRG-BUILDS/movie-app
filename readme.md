# NRG Movieroom
**An online movie information app**
### Live link: [nrg-builds.github.io/movie-app] (https://nrg-builds.github.io/movie-app)

![Different Pages Of Movie App](/movie-app.jpg)

## Technologies employed in this website:
-HTML 5
-CSS 3
-Bootstrap icons
-Javascript
-TMDb API

## Data Gotten From API
The API used was TMDb. It was used to retrieve various movie data used throughout the app. Some of the displayed data includes:
1. Trending Movies (data changes every 7 hours)
   - Movie image path
   - Movie title
   - Movie genre
   - Movie vote average
   - Movie overview(plot)
   - Movie release date
   - Movie runtime
   - Movie trailer link
   - Movie cast (up to 8 members)
2. Movies gotten from <sub>Search</sub>
   - Movie image path
   - Movie title
   - Movie genre
   - Movie vote average
   - Movie overview(plot)
   - Movie release date
   - Movie runtime
   - Movie trailer link
   - Movie cast (up to 8 members)
3. New Movies 
   - Movie image path
   - Movie title
   - Movie genre
   - Movie vote average
   - Movie overview(plot)
   - Movie release date
   - Movie runtime
   - Movie trailer link
   - Movie cast (up to 8 members)
4. Upcoming movies
   - Movie image path
   - Movie title
   - Movie genre
   - Movie vote average
   - Movie overview(plot)
   - Movie release date
   - Movie runtime
   - Movie trailer link
   - Movie cast (up to 8 members)
5. Top series
   - Series image path
   - Series title
   - Series genre
   - Series vote average
   - Series overview(plot)
   - Series first air date
   - Series episode number
   - Series cast (up to 2 members)

## Javascript Concepts Used

### Javascript fetch API
This was used to fetch movie data from the TMDb. Data (which is receive in JSON format) is parsed and fed into respective functions.

### Javascript loops and maps
Loops and in some cases maps were used to loop through the array gotten from the fetch API as well as arrays used to hold processed data.

### Javascript sessionStorage API
sessionStorage is used to send data between the home page and movie details page.
