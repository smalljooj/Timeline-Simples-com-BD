const Sequelize = require('Sequelize');

const sequelize = new Sequelize('teste', 'root', '12345678', {
	host: "localhost",
	dialect: 'mysql'
});
const Postagem =sequelize.define('postagens', {
	titulo: {
		type: Sequelize.STRING
	},
	conteudo: {
		type: Sequelize.TEXT
	}

});
const Usuario =sequelize.define('usuarios', {
	nome: {
		type: Sequelize.STRING
	},
	Sobrenome: {
		type: Sequelize.STRING
	},
	idade: {
		type: Sequelize.INTEGER
	},
	email: {
		type: Sequelize.STRING
	}

});

/*Postagem.create({
	titulo: "jose dos carro",
	conteudo: "ashdakshgdgasjdas"
});

Usuario.create({
	nome: "jose",
	Sobrenome: "dos carro",
	idade: 23,
	email: "asdasdsa"
});
/*


//Postagem.sync({force: true});
//Usuario.sync({force: true});



/*
sequelize.authenticate().then(()=>{
	console.log("Conectado com sucesso");
}).catch((erro)=>{
	console.log("Falha ao se conectar: "+ erro);
});*/