
const url = 'https://moviesminidatabase.p.rapidapi.com/movie/id/'+window.location["search"].split("=")[1]+'/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd0c5124ac2msh3130335c1ba0125p173f1cjsndb5f395a12b9',
		'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
	}
};
async function getdata(){
try {
	const response = await fetch(url, options);
	const result = await response.json();
  var {results} = result;
	setData(results)
} catch (error) {
	console.error(error);
}
}

	
getdata()




let moviePoster = document.getElementById("movie-poster");
let postersection = document.getElementById("poster-section");
let movieNameElement = document.getElementById("movieName");
let playBtnElement = document.getElementById("playbtn");
//
let movieTitle = document.getElementById("movie-title");
let contentType = document.getElementById("type");
let description = document.getElementById("Description");
let movieLength = document.getElementById("movie-length");
let dateAired = document.getElementById("date-aired");
let genre = document.getElementById("genre");
let rating = document.getElementById("rating");
let movieDuration = document.getElementById("movie-duration");
let movieType = document.getElementById("movie-type");
let contentRating = document.getElementById("content-rating");









function posterComponent(posterLink,movieName){
    return `<figure class="poster-img d-flex justify-content-center align-items-center">
                <img  src=${posterLink} alt=${movieName} >
            </figure>`
}

function setData(data){
    moviePoster.innerHTML = posterComponent(data.banner,data.title);
    // moviePoster.style =`background:url("${data[0]["#IMG_POSTER"]}")`;
    postersection.style =`background:url("${data.banner}")`
    // movieDetailPosterElement.innerHTML = `<<div class="more-detail-img"><img  src="${data[0]["#IMG_POSTER"]}"></div>>`
    // movieDetailElement.innerHTML+=`<div class="blur-img"><img  src="${data[0]["#IMG_POSTER"]}"></div>`
    /**
     let movieTitle = document.getElementById("movie-title");
let contentType = document.getElementById("type");
let description = document.getElementById("Description");
let movieLength = document.getElementById("movie-length");
let dateAired = document.getElementById("date-aired");
let genre = document.getElementById("genre");
let rating = document.getElementById("rating");
let movieDuration = document.getElementById("movie-duration");
let movieType = document.getElementById("movie-type");
let contentRating = document.getElementById("content-rating");

     */
    movieTitle.innerHTML=data.title;
    contentType.innerHTML=data.type;
    description.innerHTML=data.description;
    movieLength.innerHTML=data.movie_length+" min";
    dateAired.innerHTML="Release data : "+data.release;
    var gen = {...data.gen}
    genre.innerHTML = "Genre : ";
    for (const i in gen) {
      genre.innerHTML += gen[i].genre+ ", ";
    }
    rating.innerHTML="Rating : "+ data.rating;
    movieDuration.innerHTML = "Movie length : "+data.movie_length+" min";
    movieType.innerHTML ="Type : "+ data.type;
    contentRating.innerHTML="Content rating : "+data.content_rating;
    playBtnElement.addEventListener("click",()=>{
      window.open(data.trailer,"_blank") ;
    })
 }
 