create database agriarea;

use agriarea;

create table Cliente(idCliente int not null auto_increment,
						Nome varchar(60) not null,
                        Morada varchar(60) not null,
                        Email varchar(20),
                        NomeUtilizador varchar(10),
                        Senha varchar(10),
                        CodigoPostal_idCodigoPostal int,
                        primary key (idCliente));
                        
create table Produto(idProduto int not null auto_increment,
					   Nome varchar(45),
                       qtProduto varchar(20),
                       prProduto varchar(45),
                       Informacao varchar(45),
                       Cliente_idCliente int,
                       primary key (idProduto));
                       
create table CodigoPostal(idCodigoPostal int not null auto_increment,
					  CodigoPostal int,
                      Localidade varchar(45),
                      Pais varchar(15),
                      primary key (idCodigoPostal));
                      
create table ClienteServico(idClienteServico int not null auto_increment,
                      Cliente_idCliente int,
                      Servico_idServico int,
                      primary key (idClienteServico));
                      
create table Servico(idServico int not null auto_increment,
                     Nome varchar(15),
                     primary key (idServico));
                     
                     
alter table Produto add constraint produto_fk_cliente foreign key (cliente_idCliente) references Produto (idProduto);
alter table Cliente add constraint cliente_fk_codigopostal foreign key (codigopostal_idCodigoPostal) references CodigoPostal (idCodigoPostal);
alter table ClienteServico add constraint clienteservico_fk_servico foreign key (servico_idServico) references Servico (idServico);
alter table ClienteServico add constraint clienteservico_fk_cliente foreign key (cliente_idCliente) references Cliente (idCliente);
