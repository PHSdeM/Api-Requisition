var baseUrl = "https://api.coinranking.com/v2/coins"
var proxyUrl = "https://cors-anywhere.herokuapp.com/"
var apiKey = "d1654c7e-9cba-4d7c-8faf-0665bbe5270c"

//GET Fetch Requisition
fetch(`${proxyUrl}${baseUrl}`, {
method: "GET",
    headers: {
        'Content-Type' : 'application/json',
        'x-acess-tolen' : `${apiKey}`,
        'Acess-Control-Allow-Origin' : '*'
    }
}).then((response) => {
    if(response.ok){
        response.json().then((json) => {
         console.log(json.data.coins)  
         
         let coinsData = json.data.coins
         
         if(coinsData.length > 0) {
             var cryptoCoins = ""
         }

         coinsData.forEach((coin) => {
             cryptoCoins += "<tr>"
             cryptoCoins += `<td> ${coin.uuid} </td>`; 
             cryptoCoins += `<td> ${coin.btcPrice} </td>`;
             cryptoCoins += `<td> ${coin.rank} </td>`;
             cryptoCoins += `<td> ${coin.tier} </td>`;
             cryptoCoins += `<td> ${coin.name} </td>`;
             cryptoCoins += `<td>$${Math.round(coin.price)} Billion </td>`;
             cryptoCoins += `<td> ${coin.symbol} </td>`; 
             cryptoCoins += `<td> ${coin.change} </td>`; "<tr>";
           })
            document.getElementById("data").innerHTML = cryptoCoins
        })
    }
   
}).catch((error) => {
    console.log(error)
})