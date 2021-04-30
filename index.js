const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require(__dirname+'/models/Post');

const app = express();

//configuração 
	// template engine
		app.engine('handlebars', handlebars({defaultLayout: 'main'}));
		app.set('view engine', 'handlebars');
	//body parser
	app.use(bodyParser.urlencoded({extended: false}));
	app.use(bodyParser.json());

//rotas
	app.get('/', (req, res)=>{
		Post.findAll({order:[['id','DESC']]}).then((posts)=>{
			res.render('home', {posts :posts});
		});
		
	})

	app.post('/add', (req, res)=>{
		Post.create({
			titulo: req.body.titulo,
			conteudo: req.body.conteudo
		}).then(()=>{
			res.redirect('/');

		}).catch((erro)=>{
			res.send("erro"+ erro);
		});

	})


	app.get('/cad', (req, res)=>{
		res.render('form');
	})


app.listen((process.env.port|| 3000), ()=>{
	console.log("rodando");
});
