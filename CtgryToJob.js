

function CtgryToJob(category){

        let xReq = new XMLHttpRequest();

        xReq.onreadystatechange = function() {
            console.log("readyState = " + this.readyState + ", status = " + this.status);
            console.log(this.responseText);
    
            if (this.readyState == 4 && this.status == 200) {
            xReq.open('POST','/getJobPage',true);
            }
        }
        xReq.send(category);
}

module.exports = {
    CategoryToJob
}
