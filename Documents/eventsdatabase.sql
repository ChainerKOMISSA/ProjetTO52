-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 21, 2023 at 12:46 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `eventsdatabase`
--

-- --------------------------------------------------------

--
-- Table structure for table `administrateur`
--

CREATE TABLE `administrateur` (
  `idAdmin` int(11) NOT NULL,
  `nomAdmin` varchar(255) NOT NULL,
  `emailAdmin` varchar(255) NOT NULL,
  `motdepasseAdmin` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `administrateur`
--

INSERT INTO `administrateur` (`idAdmin`, `nomAdmin`, `emailAdmin`, `motdepasseAdmin`) VALUES
(1, 'Shiner', 'chainerkomissazotsu@gmail.com', '123456789'),
(2, 'Stone', 'stonesanvi@gmail.com', '123456789');

-- --------------------------------------------------------

--
-- Table structure for table `avis`
--

CREATE TABLE `avis` (
  `idAvis` int(11) NOT NULL,
  `libelleAvis` varchar(255) NOT NULL,
  `idUtilisateur` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `evenement`
--

CREATE TABLE `evenement` (
  `idEvenement` int(11) NOT NULL,
  `nomEvenement` varchar(255) NOT NULL,
  `descriptionEvenement` varchar(255) DEFAULT NULL,
  `idType` int(11) NOT NULL,
  `dateDebut` date DEFAULT NULL,
  `dateFin` date DEFAULT NULL,
  `heureDebut` time DEFAULT NULL,
  `heureFin` time DEFAULT NULL,
  `lieuEvenement` varchar(255) NOT NULL,
  `programme` varchar(255) NOT NULL,
  `imageEvenement` varchar(255) NOT NULL,
  `idUtilisateur` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `evenement`
--

INSERT INTO `evenement` (`idEvenement`, `nomEvenement`, `descriptionEvenement`, `idType`, `dateDebut`, `dateFin`, `heureDebut`, `heureFin`, `lieuEvenement`, `programme`, `imageEvenement`, `idUtilisateur`) VALUES
(1, 'Cirque ZAVATTA', 'Cirque de jeux pour enfants, entrée gratuite', 4, '2023-06-15', '2023-06-22', '09:00:00', '20:00:00', 'Vesoul, Mulhouse, Colmar, Belfort, Troyes, Paris', 'Disponible sur www.Zavatta-cirque.com', 'static\\Images\\cirque_zavatta.jpg', 4),
(3, 'FIMU BELFORT EDITION 36', 'Organisé et financé par la Ville de Belfort avec le soutien des associations étudiantes de l’Aire urbaine.', 2, '2023-06-15', '2023-06-23', '10:00:00', '23:00:00', 'Belfort', 'Temporairement confidentiel', 'static\\Images\\FIMU.jpg', 1),
(4, 'RENAISSANCE WORLD TOUR', 'Tour du monde en concert pour la présentation du nouvel album de Beyoncé', 1, '2023-06-01', '2023-06-30', '19:00:00', '23:00:00', 'Tour du monde', 'Disponible sur  www.renaissance-world-tour.com', 'static\\Images\\Beyonce-2023-tour.jpeg', 1),
(6, 'JUNIOR UTBM SHOW', 'Concert organisé parldes étudiants pour des étudiants en partenariat avec La Poudrière Belfort', 1, '2023-06-23', '2023-06-23', '19:00:00', '23:00:00', 'La Poudrière Belfort', 'Partagé via Teams et sur la page instagram de la Junior UTBM', 'static\\Images\\concert.jpg', 4),
(7, 'THEATRE LES MOULINETS', 'Théâtre en plein air sur les Champs Elysées', 3, '2023-06-25', '2023-06-25', '19:30:00', '22:30:00', 'Paris', 'A découvrir sur www.theatre-les-moulinets.com', 'static\\Images\\theatre1.jpg', 4);

-- --------------------------------------------------------

--
-- Table structure for table `newsletter`
--

CREATE TABLE `newsletter` (
  `idNewsletter` int(11) NOT NULL,
  `libelleNewsletter` varchar(255) NOT NULL,
  `contenuNewsletter` varchar(255) NOT NULL,
  `idUtilisateur` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `newsletter`
--

INSERT INTO `newsletter` (`idNewsletter`, `libelleNewsletter`, `contenuNewsletter`, `idUtilisateur`) VALUES
(1, 'Festival TUDUM ', 'Ce 17 Juin 2023 au Brésil, se tiendra le festival TUDUM, grande initiative de Netflix qui rassemblera les acteurs de toutes vos séries préférées!!', 4),
(2, 'FIN DU FIMU CE 28 MAI', 'Le festival du FIMU prendra officiellement fin ce dimanche 28 Mai 2023!', 1);

-- --------------------------------------------------------

--
-- Table structure for table `paiement`
--

CREATE TABLE `paiement` (
  `dataAchat` date DEFAULT NULL,
  `nombreAchetes` int(11) DEFAULT NULL,
  `prixUnit` int(11) DEFAULT NULL,
  `prixTotal` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `publicite`
--

CREATE TABLE `publicite` (
  `idPub` int(11) NOT NULL,
  `libellePub` varchar(255) NOT NULL,
  `imagePub` varchar(255) NOT NULL,
  `idUtilisateur` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `publicite`
--

INSERT INTO `publicite` (`idPub`, `libellePub`, `imagePub`, `idUtilisateur`) VALUES
(1, 'McDonald ouvre un nouveau spot à Belfort!! ', 'static\\Images\\mcdonalds.jpg', 4),
(2, 'Nouveau parfum DIOR', 'static\\Images\\Sauvage.jpg', 1),
(3, 'EXTREME Fraises, Nouveau parfum fraise pour vos glaces préférées', 'static\\Images\\parfum_fraises.jpg', 1);

-- --------------------------------------------------------

--
-- Table structure for table `ticket`
--

CREATE TABLE `ticket` (
  `idTicket` int(11) NOT NULL,
  `idEvenement` int(11) NOT NULL,
  `prixTicket` int(11) NOT NULL,
  `nbreDispos` int(11) NOT NULL,
  `nbreVendus` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `type`
--

CREATE TABLE `type` (
  `idType` int(11) NOT NULL,
  `libelleType` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `type`
--

INSERT INTO `type` (`idType`, `libelleType`) VALUES
(1, 'concert'),
(2, 'festival'),
(3, 'theatre'),
(4, 'spectacle pour enfants'),
(5, 'Autres'),
(6, 'Formations');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `utilisateur`
--

CREATE TABLE `utilisateur` (
  `idUtilisateur` int(11) NOT NULL,
  `nomUtilisateur` varchar(255) NOT NULL,
  `emailUtilisateur` varchar(255) NOT NULL,
  `mdpUtilisateur` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `utilisateur`
--

INSERT INTO `utilisateur` (`idUtilisateur`, `nomUtilisateur`, `emailUtilisateur`, `mdpUtilisateur`) VALUES
(1, 'Shiner', 'chainerkomissazotsu@gmail.com', '123456789'),
(2, 'Franc', 'francamouzou@gmail.com', '111111111'),
(3, 'Gwladystone SANVI', 'gwladystonesanvi@gmail.com', 'shinermonunivers'),
(4, 'Stone', 'stonesanvi@gmail.com', '123456789');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `administrateur`
--
ALTER TABLE `administrateur`
  ADD PRIMARY KEY (`idAdmin`);

--
-- Indexes for table `avis`
--
ALTER TABLE `avis`
  ADD PRIMARY KEY (`idAvis`),
  ADD KEY `fk_utilisateur` (`idUtilisateur`);

--
-- Indexes for table `evenement`
--
ALTER TABLE `evenement`
  ADD PRIMARY KEY (`idEvenement`),
  ADD KEY `fk_type` (`idType`),
  ADD KEY `fk_user` (`idUtilisateur`);

--
-- Indexes for table `newsletter`
--
ALTER TABLE `newsletter`
  ADD PRIMARY KEY (`idNewsletter`),
  ADD KEY `fk_user_news` (`idUtilisateur`);

--
-- Indexes for table `publicite`
--
ALTER TABLE `publicite`
  ADD PRIMARY KEY (`idPub`),
  ADD KEY `fk_user_pub` (`idUtilisateur`);

--
-- Indexes for table `ticket`
--
ALTER TABLE `ticket`
  ADD PRIMARY KEY (`idTicket`),
  ADD KEY `fk_evenement` (`idEvenement`);

--
-- Indexes for table `type`
--
ALTER TABLE `type`
  ADD PRIMARY KEY (`idType`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD PRIMARY KEY (`idUtilisateur`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `administrateur`
--
ALTER TABLE `administrateur`
  MODIFY `idAdmin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `avis`
--
ALTER TABLE `avis`
  MODIFY `idAvis` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `evenement`
--
ALTER TABLE `evenement`
  MODIFY `idEvenement` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `newsletter`
--
ALTER TABLE `newsletter`
  MODIFY `idNewsletter` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `publicite`
--
ALTER TABLE `publicite`
  MODIFY `idPub` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `ticket`
--
ALTER TABLE `ticket`
  MODIFY `idTicket` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `type`
--
ALTER TABLE `type`
  MODIFY `idType` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `utilisateur`
--
ALTER TABLE `utilisateur`
  MODIFY `idUtilisateur` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `avis`
--
ALTER TABLE `avis`
  ADD CONSTRAINT `fk_utilisateur` FOREIGN KEY (`idUtilisateur`) REFERENCES `utilisateur` (`idUtilisateur`);

--
-- Constraints for table `evenement`
--
ALTER TABLE `evenement`
  ADD CONSTRAINT `fk_type` FOREIGN KEY (`idType`) REFERENCES `type` (`idType`),
  ADD CONSTRAINT `fk_user` FOREIGN KEY (`idUtilisateur`) REFERENCES `utilisateur` (`idUtilisateur`);

--
-- Constraints for table `newsletter`
--
ALTER TABLE `newsletter`
  ADD CONSTRAINT `fk_user_news` FOREIGN KEY (`idUtilisateur`) REFERENCES `utilisateur` (`idUtilisateur`);

--
-- Constraints for table `publicite`
--
ALTER TABLE `publicite`
  ADD CONSTRAINT `fk_user_pub` FOREIGN KEY (`idUtilisateur`) REFERENCES `utilisateur` (`idUtilisateur`);

--
-- Constraints for table `ticket`
--
ALTER TABLE `ticket`
  ADD CONSTRAINT `fk_evenement` FOREIGN KEY (`idEvenement`) REFERENCES `evenement` (`idEvenement`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
