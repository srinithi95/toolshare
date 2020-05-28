
const mysql = require ('mysql');

const con = mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"tool-share"
})

const getReservations = (req, res) => {
    console.log("get reservations server", req.body.userdata);

    let user_id = req.body.userdata.userId.userId;
    
    let query = `select t.*,tr.start_date, tr.end_date,ti.image_url from tool t, tool_reservation tr, users u, tool_images ti where t.tool_id=tr.tool_id && tr.tool_id=ti.tool_id && u.users_id=tr.user_id && tr.user_id=?;`;
    con.query(query, [user_id], (error, result, field) => {
        if(error)
            console.log(error)
        else{
            console.log("result is", result);
            res.send(result);
        }
    });
}

module.exports = getReservations;