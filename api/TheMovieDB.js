
export default class TheMovieDB {

    constructor() {
        this.APIkey = "api_key=2641812e3572593aac4d4628069de88e";
        this.header = "https://api.themoviedb.org/3/";
        this.searchHeader = "search/movie?";
        this.langage = "&language=en-US"
        this.optionsForSearch = this.langage+"&page=1&include_adult=false&";
        this.query = "query=";
        this.movie = "movie/";
    }

    // This function returns the list of results corresponding to the character string entered by the user.
    // Input : String
    // Output : Object 
    async findMovies(userInput) {
        this.query = "query=" + userInput;
        var request = this.header + this.searchHeader + this.APIkey + this.optionsForSearch + this.query;
        try{
            let response = await fetch(request);
            responseJson = await response.json();
        } catch(e){
            console.error(e);
        }
        return responseJson.results;
    }

    // This function returns details related to a movie by its ID
    // Input : Integer
    // Output: Object
    async getMovieFromItsID(id) {
        var request = this.header + this.movie + id + "?" + this.APIkey + this.optionsForSearch + this.query;
        try{
            let response = await fetch(request);
            responseJson = await response.json();
        } catch(e){
            console.error(e);
        }
        return responseJson;
    }




}