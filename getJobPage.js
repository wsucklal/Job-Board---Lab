//Get jobs from json file
let jobList = require('./jobs.json');

//Html Library to build pages
let HtmlLibrary = require('./HtmlLibrary')

//sends markup content
function markup(category){

    //If categoty is undfined search with ''
    let categorySrch = category || '';

    //Gets displayed job total count
    function fndJobTtl(){

        var count = 0;
    
        for(let key in jobList){ 
            
            if(jobList[key].categories.includes(categorySrch)){
                count++;
            }
        }
            return count;
    }

    //markup to serve
    let markup =
    `
    ${HtmlLibrary.pgHeader("Job Site")}
    ${HtmlLibrary.navbar("Job Page","Job Site")}
    <div class="container" content="center">
    ${HtmlLibrary.header("Please see job informtation below")}
    <form method="post" action="/getJobPage">
    <div class="input-group mb-3">
        <input name="category" type="text" value="${categorySrch}" class="form-control" placeholder="Langauage..." aria-label="Langauage..." aria-describedby="button-addon2">
        <div class="input-group-append">
            <button class="btn btn-success" type="submit" id="button-addon2">Search for Jobs</button>
            <a href="/jobPage" class="btn btn-outline-secondary" role="button" aria-pressed="true">Clear</a>
        </div>
    </div>
    </form>
    ${HtmlLibrary.tblHeaders("dtBasicExample","Available Jobs","Result: "+ fndJobTtl())}`;


        //Display each job in markup
    for(let key in jobList){ 
            
        //if the categories array of each job contain c
            if(jobList[key].categories.includes(categorySrch)){

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

    markup += `${HtmlLibrary.pgFooter("Job Site")}
    `;
    return markup;
}


module.exports = {
    markup
}