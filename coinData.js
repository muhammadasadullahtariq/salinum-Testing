import fetch from "node-fetch";

const registerUser = async () => {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/fantom",
      {
        method: "GET",
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log("asad", error);
    console.log("now returning");
    return "User not found";
  }
};

//"id"
//"symbol"
//description"->en
//"links"
//"tickers"->[0]->"usd"
//market_data"->price_change_percentage_24h"
//9885.73777;
//monthly earning=((annual reward/100)/12)*coins
registerUser();
