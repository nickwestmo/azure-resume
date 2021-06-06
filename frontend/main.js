window.addEventListener('DOMContentLoaded', (event) =>{
    getVistCount();
})

const functionApiUrl = 'https://getresumecounter1.azurewebsites.net/api/GetResumeCounter?code=nOjxwsJKWvGd1wZjraQDNnHA6yvIDzTgiepq7z708zbmczfmDoF5Zg=='
const localFunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVistCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(Response => {
        return Response.json()

    }).then(response =>{
        console.log("Website called function API.")
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);

    });
    return count;
}