let popularLink = 'https://moviesminidatabase.p.rapidapi.com/movie/order/byPopularity/';
let options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd0c5124ac2msh3130335c1ba0125p173f1cjsndb5f395a12b9',
		'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
	}
};

async function getPopulardata(){
    try{
        const response = await fetch(popularLink, options);
        const result = await response.json();
        var {results} = result

        for(i in results){
            // console.log(id.imdb_id)
            getMovieById(results[i].imdb_id)
        }

    }
    catch(er){
        console.log(er)
    }
}
	
getPopulardata()


async function getMovieById(id){
    const movieIdURL = 'https://moviesminidatabase.p.rapidapi.com/movie/id/'+id+'/';
    
    try {
        const response = await fetch(movieIdURL, options);
        const result = await response.json();
        var {results} = result;
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
        setData(results)
        for(i in allMovies){
            // console.log(i)
        }
    } catch (error) {
        console.error(error);
    }

}
var popularMovies = document.getElementById("popular-movies");
var allMovies = document.getElementsByClassName("movies");


function setData(data){
        popularMovies.innerHTML += `
            <li  class="movies m-1 col-xs-12 col-sm-4 col-md-3 col-lg-3  d-flex justify-content-start align-items-center flex-column">
                <div  class="movies-poster">
                <img onClick="navigate" src="${data.banner}" alt="${data.imdb_id}">

                </div>
                <div class="popover p-1 ">
                    <h2 class="text-warning">${data.title.slice(0,10)+"..."}</h2>
                    <div class="ratings">
                        <p>Rating : ${data.rating} | Type : ${data.type}</p>
                    </div> 
                    <div>
                        <p>
                            ${data.description.slice(0,100)+"..."}
                        </p>
                    </div>
                </div>
            <p >${data.title}</p>
            </li>
        `

        // for(let item of popularMovies){
        //     console.log(item)
        //     item.addEventListener("click",(e)=>{
        
        //         window.location.assign("/pages/movie/movie.html?name="+e.target["alt"])
        //     })
        // }
}


function navigate(e) {
    const targetElement = e.target;
    const imdbId = targetElement.alt;
  
    // Navigate to the movie page for the given IMDb ID.
    window.location.assign("/pages/movie/movie.html?name=" + imdbId);
  }
