use agriarea;


INSERT INTO CodigoPostal(idCodigoPostal, CodigoPostal, Localidade, Pais) values (1, "11111", "seixal", "Portugal");
INSERT INTO CodigoPostal(idCodigoPostal, CodigoPostal, Localidade, Pais) values (2, "22222", "Almada", "Portugal");
INSERT INTO CodigoPostal(idCodigoPostal, CodigoPostal, Localidade, Pais) values (3, "33333", "Lisboa", "Portugal");
INSERt INTO CodigoPostal(idCodigoPostal, CodigoPostal, Localidade, Pais) values (4, "44444", "Oeiras", "Portugal");
INSERT INTO CodigoPostal(idCodigoPostal, CodigoPostal, Localidade, Pais) values (5, "55555", "Linda-Velha", "portugal");

INSERT INTO Produto(idProduto, Nome, qtProduto, prProduto, Informacao, Cliente_idCliente) values (1, "Gigazyme", "3kg", "40€", "Adubo universal KB", 1);
INSERT INTO Produto(idProduto, Nome, qtProduto, prProduto, Informacao, Cliente_idCliente) values (2, "COMPO BLAUKORN 5KG", "5kg", "5€", "Adubo universal",2);
INSERT INTO Produto(idProduto, Nome, qtProduto, prProduto, Informacao, Cliente_idCliente) values (3, "DENTASEPT ULTRA INSTRUMENTOS 5l. - Anios", "5l", "13.77€", "Fabricante: ANIOS", 3);
INSERT INTO Produto(idProduto, Nome, qtProduto, prProduto, Informacao, Cliente_idCliente) values (4, "DURR ID 212", "5kg", "34.79€", "Fab: DURR Ref.: CDI212", 4);
INSERT INTO Produto(idProduto, Nome, qtProduto, prProduto, Informacao, Cliente_idCliente) values (5, "Adubo Premium Azul", "2kg", "39.95€", "Tipo - Adubo sólido universal", 5);

INSERT INTO Servico(idServico, Nome) values (1, "Desinfecção");    
INSERt INTO Servico(idServico, Nome) values (2, "Desinfecção");
INSERT INTO Servico(idServico, Nome) values (3, "Aplicação Adubo");
INSERT INTO Servico(idServico, Nome) values (4, "Aplicação Adubo");
INSERT INTO Servico(idServico, Nome) values (5, "Aplicação Adubo");


INSERT INTO Cliente(idCliente, Nome, Morada, email, NomeUtilizador, Senha, codigopostal_idCodigoPostal)
		    values (1, "Jose Matos", "Rua Mario Nº122, 2ºEsq", "jose@hotmail.com", "jose", "11111", 1);
INSERt INTO Cliente(idCliente, Nome, Morada, email, NomeUtilizador, Senha, codigopostal_idCodigoPostal)
            values (2, "Mario Mendes", "Praceta Quinta Uvas Nº110, 3ºEsq", "mario@gmail.com", "mario", "22222", 2);
INSERt INTO Cliente(idCliente, Nome, Morada, email, NomeUtilizador, Senha, codigopostal_idCodigoPostal)
            values (3, "Joana Gomes", "Avenida 1 de Maio, Nº3 1ºFr", "joana@gmail.com", "joana", "33333", 3);
INSERT INTO Cliente(idCliente, Nome, Morada, email, NomeUtilizador, Senha, codigopostal_idCodigoPostal)
            values (4, "Ana Gomes Pires", "Avenida de Portugal Nº2 A", "anagomes@homtail.com", "ana", "44444",4);
INSERT INTO Cliente(idCliente, Nome, Morada, email, NomeUtilizador, Senha, codigopostal_idCodigoPostal)
            values (5, "Mafalda Abreu", "Rua Jose Mendes nº3 C", "mafada@gmail.com", "mafalda", "55555", 5); 
            
            
INSERT INTO ClienteServico(idClienteServico, Cliente_idCliente, Servico_idServico) values (1,1,1);
INSERT INTO ClienteServico(idClienteServico, Cliente_idCliente, Servico_idServico) values (2,2,2);
INSERT INTO ClienteServico(idClienteServico, Cliente_idCliente, Servico_idServico) values (3,3,3);
INSERT INTO ClienteServico(idClienteServico, Cliente_idCliente, Servico_idServico) values (4,4,4);
INSERt INTO ClienteServico(idClienteServico, Cliente_idCliente, Servico_idServico) values (5,5,5);



                     
          



