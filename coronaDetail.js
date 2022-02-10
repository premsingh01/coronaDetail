const request = require('request')
const cheerio = require('cheerio')
const { first } = require('cheerio/lib/api/traversing')



console.log('Before')

request('https://www.worldometers.info/coronavirus/', cb) 

function cb(error, response, html) {
    
    if(error){
        console.log(error)

    }
    else{
       // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        handleHTML(html)

    }
  
}

function handleHTML(html){

    let selTool = cheerio.load(html)

    //console.log(selTool);

    let contentArr = selTool('.maincounter-number span')
    // console.log(contentArr)

    // for(let i=0; i<contentArr.length; i++){

    //     let data = selTool(contentArr[i]).text()
    //     console.log(data)
    // }
    
    let cases = selTool(contentArr[0]).text()
    let deaths = selTool(contentArr[1]).text()
    let recovered = selTool(contentArr[2]).text()

    console.log("Cases -> " + cases)
    console.log("Deaths -> " + deaths)
    console.log("Recovered -> " + recovered)

}




console.log('After')