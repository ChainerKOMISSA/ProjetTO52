CREATE DATABASE eventsdatabase;


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
    nomUtilisateur VARCHAR(255) NOT NULL,
    emailUtilisateur VARCHAR(255) NOT NULL,
    mdpUtilisateur VARCHAR(255) NOT NULL
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
    nomAdmin VARCHAR(255) NOT NULL,
    emailAdmin VARCHAR(255) NOT NULL,
    motdepasseAdmin VARCHAR(255) NOT NULL
);

CREATE TABLE Publicite(
    idPub INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    libellePub VARCHAR(255),
    idAdmin INTEGER NOT NULL,
    CONSTRAINT fk_admin FOREIGN KEY (idAdmin) REFERENCES Administrateur(idAdmin)
);






