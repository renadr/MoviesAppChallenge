
export default class TheMovieDB {

    constructor() {
        this.APIkey = "2641812e3572593aac4d4628069de88e";
        // this.request = "https://api.themoviedb.org/3/search/movie?api_key=2641812e3572593aac4d4628069de88e&language=en-US&page=1&include_adult=false&query=the"
        this.header = "https://api.themoviedb.org/";
        this.searchHeader = "3/search/movie?api_key=";
        this.optionsForSearch = "&language=en-US&page=1&include_adult=false&";
        this.query = "query=";

    }

    async findMovies(userInput) {
        this.query = "query=" + userInput;
        var request = this.header + this.searchHeader + this.APIkey + this.optionsForSearch + this.query;
        try{
            let response = await fetch(request);
            responseJson = await response.json();
        } catch(e){
            console.error(e);
        }
        // console.log(responseJson);
        return responseJson.results;
    }




}