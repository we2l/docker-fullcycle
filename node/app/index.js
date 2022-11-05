const express = require('express')
const app = express()
const mysql = require("mysql2");

const port = 8080
const config = {
    host: 'mysql',
    user: 'root',
    password: 'root',
    database: 'node_app'
};



app.get('/', (req, resp) => {
    const conn = mysql.createConnection(config)
    
    const queryInsert = `INSERT INTO people(name) values('Weslley, João, Vinicius, Maria, Marcela')`
    const querySelect = `SELECT * FROM people`
    console.log("query>>", queryInsert)
    conn.query(
        queryInsert,
        (err, results) => {
            if (err) {
                return resp.send(`Ooops.. houve um erro. ${err.message}`);
            }
            conn.query(
                querySelect,
                function (err, results, fields) {
                    if (err) {
                        return resp.send(`Ooops.. houve um erro. ${err.message}`);
                    }
                    return resp.send(`
                        <h1>Full Cycle Rocks!</h1>
                        <ul>
                            ${results.reduce((agg, cur) => `<li>${cur.name}</li>`, "")}
                        </ul>`
                    );
                }
            );
        }
    );
    
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})