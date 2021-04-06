// from data.js
var tableData = data;

// YOUR CODE HERE!
//logging table data
//console.log(typeof (tableData[0].datetime))

let table = d3.select("#ufo-table").select("tbody")

//console.log(table)


//function to return just the date
function returnDate(ufoSighting){
    return ufoSighting.datetime
}


//populating table
tableData.forEach(ufoSighting=>{
    //console.log(ufoSighting)

    let row = table.append('tr');
    Object.entries(ufoSighting).forEach(([key,value])=>{
        //console.log(`Key: ${key} Value: ${value}`)
        let cell = row.append("td");
        cell.text(value)
    })
})

//handling searches

//search button
let button = d3.select("#filter-btn")
//overall search form
let form = d3.select("form")

//running search function for either button click or form submission
button.on('click', search)
form.on('submit', search)


//function to filter results based on date entered in form
function search(){
    d3.event.preventDefault();
    let input = d3.select('#datetime');
    let inputText = input.property('value');
    

    console.log(`search terms: ${inputText}`)

    let results = []
    
    //populating new table
    tableData.forEach(ufoSighting=>{
        if (ufoSighting.datetime == inputText){
            results.push(ufoSighting)
        }
    })

    //console.log(results)
    if (results.length == 0){
        results = "No results found for the date entered"
        console.log(results)
    }
    else{
        d3.select("#ufo-table")
                .select("tbody")
                .text("")
        results.forEach(result=>{
            console.log(result)
            
            let row = table.append('tr');
            Object.entries(result).forEach(([key,value])=>{
                //console.log(`Key: ${key} Value: ${value}`)
                let cell = row.append("td");
                cell.text(value)
            })
        })
    }

}