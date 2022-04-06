const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "sribu",
  password: "rahasia",
  port: 5432,
});

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
  getAllLinks
};
