import fetch from "node-fetch";
[
  "akash",
  "cosmos",
  "bitcanna",
  "bitsong",
  "Cheqd",
  "Chihuahua",
  "Comdex",
  "Desmos",
  "EMoney",
  "Evmos",
  "Fetch",
  "IXO",
  "Juno",
  "Kava",
  "KiChain",
  "Lum",
  "Medibloc",
  "Microtick",
  "Odin",
  "Omniflix",
  "Osmosis",
  "Persistence",
  "Sentinel",
  "Sifchain",
]
const registerUser = async () => {
  try {
    const response = await fetch(
      "https://www.motobikesworld.com/listing-category/speedboat/",
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

var total = 0;

const fun = async (user) => {
  var totalTime = 0;
  var request = 5;
  for (var i = 0; i < request; i++) {
    var starting = Date.now();
    await registerUser();
    totalTime += Date.now() - starting;
  }
  console.log(user + "\tTake average Time\t" + totalTime / request);
  return totalTime;
};

async function stressingTest() {
  var arr = [];
  for (var i = 0; i < 10; i++) {
    var promis = Promise.resolve(fun(i));
    arr.push(promis);
  }
  Promise.all(arr).then((value) => {
    var calculateTime = 0;
    for (i = 0; i < 10; i++) {
      calculateTime += value[i];
    }
    console.log(calculateTime / 50);
  });
  console.log();
}

//stressingTest();
//fun(0);
registerUser()
