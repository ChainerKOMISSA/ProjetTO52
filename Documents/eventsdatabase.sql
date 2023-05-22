-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 22, 2023 at 08:15 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 7.4.33

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
  `programme` varchar(255) DEFAULT NULL,
  `imageEvenement` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `evenement`
--

INSERT INTO `evenement` (`idEvenement`, `nomEvenement`, `descriptionEvenement`, `idType`, `dateDebut`, `dateFin`, `heureDebut`, `heureFin`, `lieuEvenement`, `programme`, `imageEvenement`) VALUES
(1, 'LES EUROCKEENNES', 'Festival de musique ', 2, '2023-04-27', '2023-05-27', '15:00:00', '20:00:00', 'Citadelle de Belfort', NULL, NULL),
(2, 'JUNIOR UTBM SHOW', 'La Poudrière X Junior UTBM. Un évènement caritatif hors normes à Belfort 100% étudiants, 100% fun et 100% caritatif. ', 1, '2023-05-16', '2023-05-16', '20:30:00', '23:30:00', 'La Poudrière - Belfort', ' SAMEDI :\r\n\r\n- 14 h 15 - 14h45 : Éveil musical avec Baptiste Jeandel\r\n\r\n- 15 h 15 - 15h45 : Spectacle par Margot Weité\r\n\r\n- 16 h 15 - 16h45 : Théâtre de Marionnettes\r\n\r\n\r\nDIMANCHE :\r\n\r\n- 11 h 00 - 11h30 : Spectacle par Margot Weité\r\n\r\n- 14 h 15 - 14h45 : ', NULL),
(3, 'RENAISSANCE WORLD TOUR', 'Tour du monde en concert pour la présentation du nouvel album de Beyoncé', 1, '2023-04-13', '2023-10-17', '20:00:00', '05:00:00', 'Vesoul, Mulhouse, Colmar, Belfort, Troyes, Paris', 'Programme indisponible', NULL),
(4, 'FIMU BELFORT EDITION 36', 'Organisé et financé par la Ville de Belfort avec le soutien des associations étudiantes de l’Aire urbaine, le FIMU de Belfort se déroule chaque année le week-end de la Pentecôte. Du 25 au 28 mai 2023 la cité du Lion se transformera en une majestueuse scèn', 2, '2023-05-25', '2023-05-28', '10:56:00', '22:00:00', 'Belfort', 'Temporairement indisponible', 'C:\\Users\\KOMISSA ZOTSU SHINER\\Documents\\GitHub\\ProjetTO52\\Images\\FIMU_BELFORT_EDITION_36fimu1.jpg'),
(5, 'HACKATHON PHOTOGRAPHIE', 'nothing to say', 5, '2023-05-23', '2023-05-28', '17:11:00', '20:12:00', 'Troyes', 'indisponible', 'C:\\Users\\KOMISSA ZOTSU SHINER\\Documents\\GitHub\\ProjetTO52\\Images\\HACKATHON_PHOTOGRAPHIEimgtest.jpeg'),
(6, 'FORMATION MANICURE-PEDICURE', 'Formation', 5, '2023-05-22', '2023-05-24', '09:30:00', '20:30:00', 'Lure', 'manicure 2 heures\r\npédicure 2 heures', 'C:\\Users\\KOMISSA ZOTSU SHINER\\Documents\\GitHub\\ProjetTO52\\Images\\FORMATION_MANICURE-PEDICUREImages.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `newsletter`
--

CREATE TABLE `newsletter` (
  `idNewsletter` int(11) NOT NULL,
  `libelleNewsletter` varchar(255) DEFAULT NULL,
  `contenuNewsletter` varchar(255) DEFAULT NULL,
  `idAdmin` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `newsletter`
--

INSERT INTO `newsletter` (`idNewsletter`, `libelleNewsletter`, `contenuNewsletter`, `idAdmin`) VALUES
(1, 'Lettre d\'information', 'Une lettre d\'information, lettre d\'information électronique, infolettre, cyberlettre, newsletter ou lettre-info, est un document d\'information envoyé de manière périodique par courrier électronique à une liste de diffusion regroupant l\'ensemble des person', 1),
(2, 'Grand concert ce 27 Mai de Beyoncé!!', NULL, 1),
(3, 'Concert AYA NAKAMURA', 'Ce 28 Mai, Aya Nakamura sera en concert à Paris!!!', 2);

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
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `publicite`
--

CREATE TABLE `publicite` (
  `idPub` int(11) NOT NULL,
  `libellePub` varchar(255) DEFAULT NULL,
  `idAdmin` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
(5, 'Autres');

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
(2, 'Franc', 'francamouzou@gmail.com', '111111111');

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
  ADD KEY `fk_type` (`idType`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `newsletter`
--
ALTER TABLE `newsletter`
  ADD PRIMARY KEY (`idNewsletter`),
  ADD KEY `fk_admin_news` (`idAdmin`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `publicite`
--
ALTER TABLE `publicite`
  ADD PRIMARY KEY (`idPub`),
  ADD KEY `fk_admin` (`idAdmin`);

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
  MODIFY `idEvenement` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `newsletter`
--
ALTER TABLE `newsletter`
  MODIFY `idNewsletter` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `publicite`
--
ALTER TABLE `publicite`
  MODIFY `idPub` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ticket`
--
ALTER TABLE `ticket`
  MODIFY `idTicket` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `type`
--
ALTER TABLE `type`
  MODIFY `idType` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `utilisateur`
--
ALTER TABLE `utilisateur`
  MODIFY `idUtilisateur` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

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
  ADD CONSTRAINT `fk_type` FOREIGN KEY (`idType`) REFERENCES `type` (`idType`);

--
-- Constraints for table `newsletter`
--
ALTER TABLE `newsletter`
  ADD CONSTRAINT `fk_admin_news` FOREIGN KEY (`idAdmin`) REFERENCES `administrateur` (`idAdmin`);

--
-- Constraints for table `publicite`
--
ALTER TABLE `publicite`
  ADD CONSTRAINT `fk_admin` FOREIGN KEY (`idAdmin`) REFERENCES `administrateur` (`idAdmin`);

--
-- Constraints for table `ticket`
--
ALTER TABLE `ticket`
  ADD CONSTRAINT `fk_evenement` FOREIGN KEY (`idEvenement`) REFERENCES `evenement` (`idEvenement`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
