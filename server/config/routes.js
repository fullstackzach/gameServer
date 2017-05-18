module.exports = function(app){

    app.get('/',function(req,res){
        res.render('login')
    });

    app.post('/login',function(req,res){
        console.log(req.body);
        if(req.body.game == 'pacman'){
            if (req.body.player == 'ghost'){
                // play as ghost
                res.render('ghost-player');
            } else if (req.body.player == 'pacman') {
                res.render('pacman-player');
            } else {
                res.render('board',req.body);
            }

        }else if(req.body.game == 'tetris'){
            res.render('tetris',req.body);
        }
    });

}