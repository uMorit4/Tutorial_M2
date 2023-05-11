const express = require('express'); 
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const sqlite3 = require('sqlite3').verbose();
const DBPATH = 'data/CurriculoPedroMorita.db';

const hostname = '127.0.0.1';
const port = 3000;
const app = express();

/* Colocar toda a parte estática no frontend */
app.use(express.static("frontend/"));

/* Definição dos endpoints */
/******** CRUD ************/
app.use(express.json());

// Retorna todos registros (é o R do CRUD - Read)
app.get('/persons', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	var sql = 'SELECT * FROM person ORDER BY idp COLLATE NOCASE';
		db.all(sql, [],  (err, rows ) => {
			if (err) {
				throw err;
			}
			res.json(rows);
		});
		db.close(); // Fecha o banco
});

// Insere um registro (é o C do CRUD - Create)
app.post('/insertPerson', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	sql = "INSERT INTO person (name, photo, role) VALUES ('" + req.body.name + "', '" + req.body.photo + "', '" + req.body.role + "')";
	console.log(sql);
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}	
	});
	res.write('<p>USER INSERTED SUCCESSIFULLY!</p><a href="/">HOME</a>');
	db.close(); // Fecha o banco
	res.end();
});

// Monta o formulário para o update (é o U do CRUD - Update)
app.get('/personUpdate', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = "SELECT * FROM person WHERE idp="+ req.query.idp;
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.all(sql, [],  (err, rows ) => {
		if (err) {
			throw err;
		}
		res.json(rows);
	});
	db.close(); // Fecha o banco
});

// Atualiza um registro (é o U do CRUD - Update)
app.post('/personUpdate', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = "UPDATE person SET name='" + req.body.name + "', photo = '" + req.body.photo + "' , role='" + req.body.role + "' WHERE idp='" + req.body.idp + "'";
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	res.write('<p>USER UPDATED SUCCESSIFULLY!</p><a href="/">HOME</a>');
	db.close(); // Fecha o banco
});

// Exclui um registro (é o D do CRUD - Delete)
app.get('/personRemove', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = "DELETE FROM person WHERE idp='" + req.query.idp + "'";
	console.log(sql);
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.write('<p>USER REMOVED SUCCESSIFULLY!</p><a href="/">HOME</a>');
		res.end();
	});
	db.close(); // Fecha o banco
});

    app.get('/about/View', (req, res) => {
        res.statusCode = 200;
        res.setHeader('Access-Control-Allow-Origin', '*'); 
        var db = new sqlite3.Database(DBPATH); // Abre o banco
        var sql = 'SELECT adress, telephone, email, description_about, about.idp FROM about, person WHERE person.idp = about.idp ';
		console.log(sql);
        db.all(sql, [],  (err, rows ) => {
            if (err) {
                throw err;
            }
            res.json(rows);
			res.end();
        });
        db.close(); // Fecha o banco
    });

	app.get('/accomplishments/View', (req, res) => {
        res.statusCode = 200;
        res.setHeader('Access-Control-Allow-Origin', '*'); 
        var db = new sqlite3.Database(DBPATH); // Abre o banco
        var sql = 'SELECT idac, name_accomplishments, date_accomplishments, accomplishments.idp FROM accomplishments, person WHERE person.idp = accomplishments.idp ';
		console.log(sql);
        db.all(sql, [],  (err, rows ) => {
            if (err) {
                throw err;
            }
            res.json(rows);
			res.end();
        });
        db.close(); // Fecha o banco
    });

	app.get('/training/View', (req, res) => {
        res.statusCode = 200;
        res.setHeader('Access-Control-Allow-Origin', '*'); 
        var db = new sqlite3.Database(DBPATH); // Abre o banco
        var sql = 'SELECT idt, date_init_training, date_end_training, description_training, training.idp FROM training, person WHERE person.idp = training.idp ';
		console.log(sql);
        db.all(sql, [],  (err, rows ) => {
            if (err) {
                throw err;
            }
            res.json(rows);
			res.end();
        });
        db.close(); // Fecha o banco
    });
	
	app.get('/expirience/View', (req, res) => {
        res.statusCode = 200;
        res.setHeader('Access-Control-Allow-Origin', '*'); 
        var db = new sqlite3.Database(DBPATH); // Abre o banco
        var sql = 'SELECT ide, enterprise_name, expirience.role, date_init_work, date_end_work, expirience.idp FROM expirience, person WHERE person.idp = expirience.idp ';
		console.log(sql);
        db.all(sql, [],  (err, rows ) => {
            if (err) {
                throw err;
            }
            res.json(rows);
			res.end();
        });
        db.close(); // Fecha o banco
    });
	
	app.get('/skills/View', (req, res) => {
        res.statusCode = 200;
        res.setHeader('Access-Control-Allow-Origin', '*'); 
        var db = new sqlite3.Database(DBPATH); // Abre o banco
        var sql = 'SELECT ids, name_skill, skills.idp, level_skill FROM skills, person WHERE person.idp = skills.idp ';
		console.log(sql);
        db.all(sql, [],  (err, rows ) => {
            if (err) {
                throw err;
            }
            res.json(rows);
			res.end();
        });
        db.close(); // Fecha o banco
    });
	
	app.get('/personality/View', (req, res) => {
        res.statusCode = 200;
        res.setHeader('Access-Control-Allow-Origin', '*'); 
        var db = new sqlite3.Database(DBPATH); // Abre o banco
        var sql = 'SELECT idper, name_trait, personality.idp, level_trait FROM personality, person WHERE person.idp = personality.idp ';
		console.log(sql);
        db.all(sql, [],  (err, rows ) => {
            if (err) {
                throw err;
            }
            res.json(rows);
			res.end();
        });
        db.close(); // Fecha o banco
    });
	
app.listen(port, hostname, () => {
  console.log(`Servidor rodando em http://${hostname}:${port}/`);
});