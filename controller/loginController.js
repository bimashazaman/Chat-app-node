
//get login page
function getLogin(req, res, next){
    res.render('index.ejs', {
        title: 'Login'
    })
}


module.exports = {
    getLogin
}