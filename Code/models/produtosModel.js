var pool = require("./connection");

module.exports.getAll = async function() {
    try {
        let sql = "SELECT * FROM Produto";
        let produto = await pool.query(sql);
        return {status:200, data: produto};
    } catch(err) {
        console.log(err);
        return {status:500, data: err};
    }
}