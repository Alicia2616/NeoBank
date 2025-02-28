CREATE DATABASE IF NOT EXISTS neobank;

USE neobank;

CREATE TABLE IF NOT EXISTS utilisateur (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    prenom VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    telephone VARCHAR(20) NOT NULL,
    adresse VARCHAR(255) NOT NULL,
    code_postal VARCHAR(10) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role_utilisateur ENUM('CLIENT', 'CONSEILLER', 'ADMIN') NOT NULL
);

CREATE TABLE IF NOT EXISTS compte (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    type_compte ENUM('COURANT', 'EPARGNE', 'PRO', 'JEUNE') NOT NULL,
    solde DOUBLE NOT NULL DEFAULT 0.0,
    utilisateur_id BIGINT NOT NULL,
    compte_status ENUM('INSTRUCTION', 'VALIDE') NOT NULL DEFAULT 'INSTRUCTION',
    FOREIGN KEY (utilisateur_id) REFERENCES utilisateur(id) ON DELETE CASCADE
);

--INSERT INTO utilisateur (nom, prenom, email, telephone, adresse, code_postal, password, role_utilisateur)
--VALUES
--     ('Belkalem', 'Alicia', 'aliciabelkalem@gmail.com', '0123456789',
--      '27 Rue de la gare, Houilles', '78800',
--      '$2a$10$FD58FsdQnE5lwEwCYZ/xXuUsQIe.NKVxj31c7FcfpM1aXWBCW/15q', 'CONSEILLER');

--INSERT INTO utilisateur (nom, prenom, email, telephone, adresse, code_postal, password, role_utilisateur)
--VALUES
--     ('admin', 'alicia', 'bealicia@etudiant-esic.fr', '0123456788',
--      '27 Rue de la gare, Houilles', '78800',
--     '$2a$10$FD58FsdQnE5lwEwCYZ/xXuUsQIe.NKVxj31c7FcfpM1aXWBCW/15q', 'ADMIN');

