window.addEventListener('DOMContentLoaded', (event) =>{
    getVistCount();
})

const functionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVistCount = () => {
    let count = 30;
    fetch(functionApi).then(Response => {
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