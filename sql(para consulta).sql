--Arquivo apenas para consulta de comandos sql
--Arquivo não funcional

CREATE TABLE usuarios(
	nome VARCHAR(50),
	email VARCHAR(100),
	idade INT

);

INSERT INTO usuarios(nome, email, idade) VALUES(
	"katarinas",
	"katarinas@hmail.com",
	30
);

SELECT * FROM usuarios;
--select <colunas> from <tabela>
SELECT * FROM usuarios WHERE nome = "maria";
--select <colunas> from <tabela> where <parametro>
SELECT * FROM usuarios WHERE idade =126;

DELETE FROM usuarios WHERE nome = "katarinas";
--delete  from <tabela> whre <parametro>

UPDATE usuarios SET nome = "jooj" WHERE nome = "kaka";
--update <tabela> set <informacao que sera setada> where <parametro>