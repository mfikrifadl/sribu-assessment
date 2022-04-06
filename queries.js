const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "sribu",
  password: "rahasia",
  port: 5432,
});

const getLinks = async function () {
  try {
    arrays = [];
    pool.query("SELECT * FROM links", (error, results) => {
      if (error) {
        throw error;
      }
      arrays = results.rows;
      console.log(results.rows)
      return arrays;
    });
  } catch (e) {
    console.log(e);
  }
};

function getAllLinks(){
  return new Promise(resolve => {
      var query = 'SELECT * FROM links';
      pool.query(query,
            function (error, rows, fields){
          if(error){
              console.log(error)
          } else{
              resolve(rows['rows']);
          }
      });
  });
}

module.exports = {
  getLinks,
  getAllLinks
};
