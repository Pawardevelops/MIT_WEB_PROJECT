var popularMovieCards = document.getElementsByClassName("popularMovieCard")
var popularListCompHolder = document.getElementById("popular_list");
var genreListCompHolder =document.getElementById("genre_list");
var ratingListCompHolder = document.getElementById("rating_list")
var seeMore = document.getElementById("seemore")

let options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd0c5124ac2msh3130335c1ba0125p173f1cjsndb5f395a12b9',
		'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
	}
};


async function getMovieByRating(){
    const url = 'https://moviesminidatabase.p.rapidapi.com/movie/order/byRating/';

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        let {results } = result;
        for(let i=0;i<10;i++){
            getMovieById(results[i].imdb_id,"rating")
        }
    } catch (error) {
        console.error(error);
    }

}

async function getPopulardata(){
    let popularLink = 'https://moviesminidatabase.p.rapidapi.com/movie/order/byPopularity/';
    try{
        const response = await fetch(popularLink, options);
        const result = await response.json();
        var {results} = result

        for(let i=0;i<10;i++){
            getMovieById(results[i].imdb_id,"popular")
        }

    }
    catch(er){
        console.log(er)
    }
}


async function getMovieById(id,select){
    const movieIdURL = 'https://moviesminidatabase.p.rapidapi.com/movie/id/'+id+'/';
    
    try {
        const response = await fetch(movieIdURL, options);
        const result = await response.json();
        /*
        {"results":{"imdb_id":"tt10767168","title":"La llorona","year":2019,
        "popularity":4996,"description":"An aging paranoid war criminal, 
        protected by his faithful wife, faces death while being haunted by 
        the ghosts of his past.","content_rating":"Not Rated",
        "movie_length":97,"rating":6.6,"created_at":"2021-04-29T11:29:06.545145+03:00",
        "trailer":"https://www.youtube.com/embed/uOV-xMYQ7sk",
        "image_url":"https://m.media-amazon.com/images/M/MV5BNjE5NDM4OWEtOTEyMy00MmM0LTkxYzEtMDFhYjk3M2FlMzQzXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_UX182_CR0,0,182,268_AL_.jpg",
        "release":"2020-01-22","plot":"An aging paranoid war criminal, 
        protected by his faithful wife, faces death while being haunted 
        by the ghosts of his past.",
        "banner":"https://m.media-amazon.com/images/M/MV5BNjE5NDM4OWEtOTEyMy00MmM0LTkxYzEtMDFhYjk3M2FlMzQzXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_.jpg",
        "type":"movie","more_like_this":{},
        "gen":[{"id":7,"genre":"Crime"},{"id":8,"genre":"Drama"},
        {"id":14,"genre":"Thriller"},{"id":28,"genre":"Horror"},
        {"id":29,"genre":"War"}],"keywords":[{"id":132,"keyword":"written by director"},
        {"id":3860,"keyword":"servant"},{"id":9908,"keyword":"candle"},
        {"id":11510,"keyword":"la llorona"},
        {"id":11511,"keyword":"guatemala"}]}}
        */
        // console.log(results[0])
        if(select == "popular"){
            setPupularMovies(result)
        }
        else if (select == "rating"){
            setRatingMovies(result)
        }
    } catch (error) {
        console.error(error);
    }

}


function setPupularMovies(result){
    // for(var i=0;i<5;i++){
        popularListCompHolder.innerHTML += `
        <li class="mx-1 popularMovieCard">
        <div class="card" >
            <img src=${result.results?.banner} class="card-img-top text-center" alt="${result?.results?.imdb_id}">
        </div>
    </li>`;
    // }

    for(let item of popularMovieCards){
        item.addEventListener("click",(e)=>{
    
            window.location.assign("/pages/movie/movie.html?name="+e.target["alt"])
        })
    }

    seeMore.addEventListener("click",()=>{
        window.location.assign("/pages/more/moremovies.html?page=popularmovies");
    })
    
}



function setRatingMovies(result){
    genreListCompHolder.innerHTML += `
    <li class="mx-1 popularMovieCard">
    <div class="card" >
        <img src=${result.results?.banner} class="card-img-top text-center" alt="${result?.results?.imdb_id}">
    </div>
</li>`;


for(let item of genreListCompHolder){
    item.addEventListener("click",(e)=>{
        window.location.assign("/pages/movie/movie.html?name="+e.target["alt"])
    })
}
}

getMovieByRating();
	
getPopulardata()


setPupularMovies()




function navigateToMovie(){
    window.location.replace("/movie.html")
}





for(var i=0;i<5;i++){
    ratingListCompHolder.innerHTML += `<li class="mx-1">
    <div class="card d-flex justify-content-center align-items-center px-1">
        <p class="text-center ">${movieByRating[i]["title"]}</p>
  </div>
</li>`;
}
ratingListCompHolder.innerHTML += `<a href="#" class="text-white text-outline-none">see more...</a>`
