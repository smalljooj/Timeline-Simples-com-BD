const Sequelize = require('Sequelize');

//conexão banco de dados
const sequelize = new Sequelize('postapp', 'root', '12345678', {
		host: "localhost",
		dialect: 'mysql'
	});

module.exports={
	Sequelize: Sequelize,
	sequelize:sequelize
}