//Get jobs from json file
let jobList = require('./jobs.json');

//Html Library to build pages
let HtmlLibrary = require('./HtmlLibrary')


//markup to serve
function markup (city) {

    //If city is undfined search with ''
    let citySrch = city || '';
    
    //Gets Count of job total
    function fndJobTtl(){

        var count = 0;
    
        for(let key in jobList){ 
            
            if(jobList[key].title.includes(citySrch)){
                count++;
            }
        }
            return count;
    }

    let markup =
    `
    ${HtmlLibrary.pgHeader("Job Site")}
    ${HtmlLibrary.navbar("Job Page","Job Site")}
    <div class="container" content="center">
    ${HtmlLibrary.header("Please see job informtation below ")}
    <form method="get" action="/cityPage">
    <div class="input-group mb-3">
      <input name="city" type="text" value="${citySrch}" class="form-control" placeholder="City..." aria-label="City..." aria-describedby="button-addon2">
      <div class="input-group-append">
        <button class="btn btn-success" type="submit" id="button-addon2">Search Jobs</button>
        <a href="/categoriesPage" class="btn btn-outline-secondary" role="button" aria-pressed="true">Clear</a>
        </div>
    </div>
    </form>
    ${HtmlLibrary.tblHeaders("dtBasicExample","Available Jobs","Result: "+ fndJobTtl())}`;
    
        //Display each job in markup
        for(let key in jobList){ 
        
            if(jobList[key].title.includes(citySrch)){

                markup += `
                <tr>
                    <td>
                        ${jobList[key].title}
                    <td>
                <tr>
            `;
            }
            else{

            }
        }
    
    markup += `</div>
    ${HtmlLibrary.pgFooter("Job Site")}
    `;
    
    return markup;
}


module.exports = {
    markup
}