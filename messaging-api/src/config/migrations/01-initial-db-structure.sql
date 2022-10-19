create database messaging;

\c messaging;

CREATE TABLE messages (
   id serial primary key,
   body  varchar(160) not null,
   dateSent varchar(50) not null,
   receiver varchar(20) not null
);

INSERT INTO messages (body,dateSent,receiver) values ('hola este es un mensaje', '14/10/2022 14:21:50', '+1222222222');
INSERT INTO messages (body,dateSent,receiver) values ('Haga la tarea', '14/10/2022 14:22:30', '+1222222222');