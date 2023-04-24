CREATE DATABASE eventsDB;
USE eventsDB;

CREATE TABLE Type(
    idType INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    libelleType VARCHAR(255) NOT NULL
);

CREATE TABLE Evenement(
    idEvenement INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nomEvenement VARCHAR(255) NOT NULL,
    descriptionEvenement VARCHAR(255),
    idType INTEGER NOT NULL,
    dateDebut DATE,
    dateFin DATE,
    heureDebut TIME,
    heureFin TIME,
    lieuEvenement VARCHAR(255) NOT NULL,
    CONSTRAINT fk_type FOREIGN KEY (idType) REFERENCES Type(idType)
);

CREATE TABLE Ticket(
    idTicket INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    idEvenement INTEGER NOT NULL,
    prixTicket INTEGER NOT NULL,
    nbreDispos INTEGER NOT NULL,
    nbreVendus INTEGER NOT NULL,
    CONSTRAINT fk_evenement FOREIGN KEY (idEvenement) REFERENCES Evenement(idEvenement)
);

CREATE TABLE Utilisateur (
    idUtilisateur INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nomUtilisateur VARCHAR(255),
    prenomUtilisateur VARCHAR(255),
    ageUtilisateur INTEGER,
    emailUtilisateur VARCHAR(255),
    telephoneUtilisateur VARCHAR(255),
    villeUtilisateur VARCHAR(255)
);

CREATE TABLE Paiement (
    dataAchat DATE,
    nombreAchetes INTEGER,
    prixUnit INTEGER,
    prixTotal INTEGER
);

CREATE TABLE Avis(
    idAvis INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    libelleAvis VARCHAR(255) NOT NULL,
    idUtilisateur INTEGER NOT NULL,
    CONSTRAINT fk_utilisateur FOREIGN KEY (idUtilisateur) REFERENCES Utilisateur (idUtilisateur)
);

CREATE TABLE Administrateur (
    idAdmin INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nomAdmin VARCHAR(255),
    prenomAdmin VARCHAR(255),
    ageAdmin INTEGER,
    emailAdmin VARCHAR(255),
    telephoneAdmin VARCHAR(255),
    villeAdmin VARCHAR(255),
    roleAdmin VARCHAR(255) NOT NULL
);

CREATE TABLE Publicite(
    idPub INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    libellePub VARCHAR(255),
    idAdmin INTEGER NOT NULL,
    CONSTRAINT fk_admin FOREIGN KEY (idAdmin) REFERENCES Administrateur(idAdmin)
);






