create database messaging;

\c messaging;

CREATE TABLE messages (
   id serial,
   body  varchar(160) not null,
   dateSent varchar(50) not null,
   receiver varchar(20) not null
);

ALTER TABLE messages ADD CONSTRAINT messages_pk PRIMARY KEY(id);

CREATE INDEX messages_dateSent_time_date_idx ON messages (dateSent, id);

INSERT INTO messages (body,dateSent,receiver) values ('Bienvenido a la API', NOW(), '+1222222222');
INSERT INTO messages (body,dateSent,receiver) values ('este mensaje fue enviado gracias a la API de Twilio', NOW(), '+1222222222');