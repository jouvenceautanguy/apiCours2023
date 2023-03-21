-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mar. 21 mars 2023 à 23:27
-- Version du serveur : 10.4.25-MariaDB
-- Version de PHP : 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `api`
--

-- --------------------------------------------------------

--
-- Structure de la table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `modified_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `pincode` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `admin`
--

INSERT INTO `admin` (`id`, `created_at`, `modified_at`, `pincode`) VALUES
(1, '2023-03-21 08:04:34', '2023-03-21 08:04:34', 123),
(2, '2023-03-21 08:04:34', '2023-03-21 08:04:34', 456);

-- --------------------------------------------------------

--
-- Structure de la table `restauranttable`
--

CREATE TABLE `restauranttable` (
  `id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `modified_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `restauranttable`
--

INSERT INTO `restauranttable` (`id`, `created_at`, `modified_at`, `name`) VALUES
(1, '2023-03-20 09:25:42', '2023-03-20 09:25:42', 'Zac'),
(2, '2023-03-20 09:25:42', '2023-03-20 09:25:42', 'Cassiopeia'),
(3, '2023-03-20 09:26:27', '2023-03-20 09:26:27', 'Anivia'),
(4, '2023-03-20 09:26:27', '2023-03-20 09:26:27', 'Zed'),
(5, '2023-03-20 09:26:27', '2023-03-20 09:26:27', 'Viego');

-- --------------------------------------------------------

--
-- Structure de la table `services`
--

CREATE TABLE `services` (
  `id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `modified_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `shiftType` tinyint(1) NOT NULL DEFAULT 0,
  `shiftClosed` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `services`
--

INSERT INTO `services` (`id`, `created_at`, `modified_at`, `shiftType`, `shiftClosed`) VALUES
(1, '2023-03-19 18:32:17', '2023-03-19 18:32:17', 1, 0),
(3, '2023-03-19 19:50:06', '2023-03-19 19:50:06', 1, 0),
(4, '2023-03-19 19:50:06', '2023-03-19 19:50:06', 0, 1),
(5, '2023-03-19 19:50:06', '2023-03-19 19:50:06', 1, 1);

-- --------------------------------------------------------

--
-- Structure de la table `serviceusers`
--

CREATE TABLE `serviceusers` (
  `id_service` int(11) NOT NULL,
  `id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `serviceusers`
--

INSERT INTO `serviceusers` (`id_service`, `id_user`) VALUES
(1, 2),
(1, 1);

-- --------------------------------------------------------

--
-- Structure de la table `tabletips`
--

CREATE TABLE `tabletips` (
  `id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `modified_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `tips` int(11) DEFAULT NULL,
  `id_restaurantTable` int(11) DEFAULT NULL,
  `id_service` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `tabletips`
--

INSERT INTO `tabletips` (`id`, `created_at`, `modified_at`, `tips`, `id_restaurantTable`, `id_service`) VALUES
(1, '2023-03-20 09:27:13', '2023-03-20 09:27:13', 4, 1, 1),
(2, '2023-03-20 09:44:00', '2023-03-20 09:44:00', 4, 1, 1),
(3, '2023-03-20 09:27:13', '2023-03-20 09:27:13', 1, 1, 1),
(4, '2023-03-20 09:44:00', '2023-03-20 09:44:00', 5, 1, 1);

-- --------------------------------------------------------

--
-- Structure de la table `tipspayments`
--

CREATE TABLE `tipspayments` (
  `id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `modified_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `amount` int(11) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `tipspayments`
--

INSERT INTO `tipspayments` (`id`, `created_at`, `modified_at`, `amount`, `id_user`) VALUES
(1, '2023-03-19 19:50:06', '2023-03-19 19:50:06', 10, 1),
(2, '2023-03-19 19:50:06', '2023-03-19 19:50:06', 15, 2),
(3, '2023-03-19 19:50:06', '2023-03-19 19:50:06', 5, 3),
(5, '2023-03-21 19:05:37', '2023-03-21 19:05:37', NULL, 3);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `modified_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 0,
  `active` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `created_at`, `modified_at`, `firstname`, `lastname`, `status`, `active`) VALUES
(1, '2023-03-12 17:58:32', '2023-03-12 17:58:32', 'tanguy', 'jouvenceau', 0, 1),
(2, '2023-03-19 19:50:06', '2023-03-19 19:50:06', 'John', 'Doe', 1, 1),
(3, '2023-03-19 19:50:06', '2023-03-19 19:50:06', 'Jane', 'Smith', 0, 1),
(4, '2023-03-19 19:50:06', '2023-03-19 19:50:06', 'Bob', 'Johnson', 1, 0),
(5, '2023-03-19 19:51:56', '2023-03-19 19:51:56', 'John', 'Doe', 1, 1),
(6, '2023-03-19 19:51:56', '2023-03-19 19:51:56', 'Jane', 'Smith', 0, 1),
(7, '2023-03-19 19:51:56', '2023-03-19 19:51:56', 'Bob', 'Johnson', 1, 0);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `restauranttable`
--
ALTER TABLE `restauranttable`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `serviceusers`
--
ALTER TABLE `serviceusers`
  ADD KEY `fk_serviceUsers_services` (`id_service`),
  ADD KEY `fk_serviceUsers_users` (`id_user`);

--
-- Index pour la table `tabletips`
--
ALTER TABLE `tabletips`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_tableTips_restaurantTable` (`id_restaurantTable`),
  ADD KEY `fk_tableTips_services` (`id_service`);

--
-- Index pour la table `tipspayments`
--
ALTER TABLE `tipspayments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_tipsPayments_users` (`id_user`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `restauranttable`
--
ALTER TABLE `restauranttable`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `services`
--
ALTER TABLE `services`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `tabletips`
--
ALTER TABLE `tabletips`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `tipspayments`
--
ALTER TABLE `tipspayments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `serviceusers`
--
ALTER TABLE `serviceusers`
  ADD CONSTRAINT `fk_serviceUsers_services` FOREIGN KEY (`id_service`) REFERENCES `services` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_serviceUsers_users` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `tabletips`
--
ALTER TABLE `tabletips`
  ADD CONSTRAINT `fk_tableTips_restaurantTable` FOREIGN KEY (`id_restaurantTable`) REFERENCES `restauranttable` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_tableTips_services` FOREIGN KEY (`id_service`) REFERENCES `services` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `tipspayments`
--
ALTER TABLE `tipspayments`
  ADD CONSTRAINT `fk_tipsPayments_users` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
