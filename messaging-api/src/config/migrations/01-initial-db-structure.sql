create database messaging;

\c messaging;

CREATE TABLE messages (
   id serial primary key,
   body  varchar(160) not null,
   dateSent varchar(50) not null,
   receiver varchar(20) not null,
   CONSTRAINT messages_pk PRIMARY KEY (id)
);
CREATE INDEX messages_dateSent_time_date_idx ON event ((dateSent::VARCHAR));

INSERT INTO messages (body,dateSent,receiver) values ('Bienvenido a la API', NOW(), '+1222222222');
INSERT INTO messages (body,dateSent,receiver) values ('este mensaje fue enviado gracias a la API de Twilio', NOW(), '+1222222222');