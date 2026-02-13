create table usuarios (
	id serial primary key,
	nome varchar(100) not null,
	idade varchar(10) not null,
	email varchar(100) unique not null
)