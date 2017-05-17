module.exports = function(app){

    app.get('/',function(req,res){
        res.render('login')
    });

    app.post('/login',function(req,res){
        console.log(req.body);
        if(req.body.game == 'pacman'){
            res.render('pacman',req.body);
        }else if(req.body.game == 'tetris'){
            res.render('tetris',req.body);
        }
    });

    app.get('/pacman',function(req,res){
        res.render('pacman');
    });


}