//Get jobs from json file
let jobList = require('./jobs.json');


//Html Library to build pages
let HtmlLibrary = require('./HtmlLibrary')

//markup to serve
let markup =
`
${HtmlLibrary.pgHeader("Job Site")}
${HtmlLibrary.navbar("Job Categories","Job Site")}
<div class="container" content="center">
${HtmlLibrary.header("Please see category informtation below ")}
<form method="post" action="/getCategoriesPage">

<div class="input-group mb-3">
  <input name="category" type="text" class="form-control" placeholder="Langauage..." aria-label="Langauage..." aria-describedby="button-addon2">
  <div class="input-group-append">
    <button class="btn btn-success" type="submit" id="button-addon2">Search Categories</button>
    <a href="/categoriesPage" class="btn btn-outline-secondary" role="button" aria-pressed="true">Clear</a>
    </div>
</div>
</form>
${HtmlLibrary.tblHeaders("dtBasicExample","Job Categories")}
`;

//Holds Categories already iterated through
let storedCtgry =  [];

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
for(let key in jobList){ 
    
    for( let c of jobList[key].categories){
        
        //If c is found in categories array
        if(!(storedCtgry.includes(c))){

            markup += `
            <tr>
                <td>
                    <a  name="slctCtgry+${c}" value="${c}" onClick=CtgryToJob(${c}) type="button" class="btn btn-primary">
                    ${c} <span class="badge badge-light">${fndCtgryTtl(c)}</span></span>
                    <span class="sr-only">unread messages</span>
                    </a>
                <td>
            <tr>
           `;

           //add to stored Categrory array
           storedCtgry.push(c);
        }
        else{

            //add to stored Categrory array
            storedCtgry.push(c);
        }

    } 

}

markup += `
    </table>
    </div>

    <script>
    function CtgryToJob(category){

        let xReq = new XMLHttpRequest();
        xReq.open('POST','/getJobPage',true);

        xReq.onreadystatechange = function() {
            console.log("readyState = " + this.readyState + ", status = " + this.status);
            console.log(this.responseText);
    
            if (this.readyState == 4 && this.status == 200) {

            }
        }
        xReq.send(category);
    }
    </script>
    ${HtmlLibrary.pgFooter("Job Site")}
`;

module.exports = {
    markup
}