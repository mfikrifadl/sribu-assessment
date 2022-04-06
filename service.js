const axios = require("axios");
const db = require("./queries");

const getCount = async function (request, response) {
  const arrays = await db.getAllLinks();
  const result = await getResult(arrays);
  console.log(result)
};

function getResult(arrays) {
  return new Promise((resolve) => {
    var promises = [];
    var result = [];
    result['status 200'] = 0;
    result['status 404'] = 0;
    arrays.map((value) => {
      newUrl = value.url.replace(
        "https://sribulancer.com/",
        "https://www.sribulancer.com/id/"
      )
      promises.push(
        getRequest(newUrl).then(response => {
          if(response == 'https://www.sribulancer.com/id/error/404'){
            result['status 404']++
          }else{
            result['status 200']++
          }
        })
      )
    })
    Promise.all(promises).then(() => resolve(result));
  })
}

function getRequest(url) {
  return new Promise((resolve, reject) => {
    axios
    .get(url)
    .then((data) => {
      resolve(data.request.res.responseUrl)
    })
    .catch((error) => {
      reject(error)
    })
  })
}

module.exports = {
  getCount,
};
