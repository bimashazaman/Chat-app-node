
//get Inbox page
function getInbox(req, res, next){
    res.render('inbox.ejs', {
        title: 'Inbox'
    })
}


module.exports = {
    getInbox
}