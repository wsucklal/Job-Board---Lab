//Get jobs from json file
let jobList = require('./jobs.json');


//Html Library to build pages
let HtmlLibrary = require('./HtmlLibrary')

function markup(category){

    //markup to serve
    let markup =
`
${HtmlLibrary.pgHeader("Job Site")}
${HtmlLibrary.navbar("Job Categories","Job Site")}
<div class="container" content="center">
${HtmlLibrary.header("Please see category informtation below ")}
<form method="post" action="/getCategoriesPage">

<div class="input-group mb-3">
  <input name="category" value="${category}" type="text" class="form-control" placeholder="Langauage..." aria-label="Langauage..." aria-describedby="button-addon2">
  <div class="input-group-append">
    <button class="btn btn-success" type="submit" id="button-addon2">Search Categories</button>
    <a href="/categoriesPage" class="btn btn-outline-secondary" role="button" aria-pressed="true">Clear</a>
    </div>
</div>
</form>

${HtmlLibrary.tblHeaders("dtBasicExample","Job Categories")}
`;

//Gets Count of each category
function fndCtgryTtl(category){

    var count = 0;

    for(let key in jobList){ 
    
        for( let c of jobList[key].categories){
            if(c == category){
                count ++;
            }
        }
    }
        return count;
}

//Display each category in markup
            markup += `
            <tr>
                <td>
                    <a href="/${category}" name="slctCtgry" value="${category}"  type="submit" class="btn btn-primary">
                    ${category} <span class="badge badge-light">${fndCtgryTtl(category)}</span></span>
                    <span class="sr-only">unread messages</span>
                    </a>
                <td>
            <tr>
           `;


markup += `
    </table>

    </div>
    ${HtmlLibrary.pgFooter("Job Site")}
`;

    return markup;
}

module.exports = {
    markup
}