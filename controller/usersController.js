
//get User page
function getUsers(req, res, next){
    res.render('users.ejs', {
        title: 'Users'
    })
}


module.exports = {
    getUsers
}