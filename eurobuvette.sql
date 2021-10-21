-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : jeu. 21 oct. 2021 à 17:00
-- Version du serveur :  5.7.31
-- Version de PHP : 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `eurobuvette`
--

-- --------------------------------------------------------

--
-- Structure de la table `assigner`
--

DROP TABLE IF EXISTS `assigner`;
CREATE TABLE IF NOT EXISTS `assigner` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idBuvette` int(11) NOT NULL,
  `idMatch` int(11) NOT NULL,
  `suppr` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `idBuvette` (`idBuvette`),
  KEY `idMatch` (`idMatch`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `assigner`
--

INSERT INTO `assigner` (`id`, `idBuvette`, `idMatch`, `suppr`) VALUES
(2, 1, 1, 1);

-- --------------------------------------------------------

--
-- Structure de la table `buvette`
--

DROP TABLE IF EXISTS `buvette`;
CREATE TABLE IF NOT EXISTS `buvette` (
  `idBuvette` int(11) NOT NULL AUTO_INCREMENT,
  `nomBuvette` varchar(30) NOT NULL,
  `emplacementB` varchar(30) NOT NULL,
  `idVolontaire` int(11) NOT NULL,
  `ouverte` tinyint(1) NOT NULL DEFAULT '0',
  `suppr` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`idBuvette`),
  KEY `idVolontaire` (`idVolontaire`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `buvette`
--

INSERT INTO `buvette` (`idBuvette`, `nomBuvette`, `emplacementB`, `idVolontaire`, `ouverte`, `suppr`) VALUES
(1, 'qsd', 'qsdq', 1, 0, 0);

-- --------------------------------------------------------

--
-- Structure de la table `equipe`
--

DROP TABLE IF EXISTS `equipe`;
CREATE TABLE IF NOT EXISTS `equipe` (
  `idEquipe` int(11) NOT NULL AUTO_INCREMENT,
  `paysEquipe` varchar(20) NOT NULL,
  `drapeauEquipe` varchar(20) NOT NULL,
  `suppr` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`idEquipe`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `equipe`
--

INSERT INTO `equipe` (`idEquipe`, `paysEquipe`, `drapeauEquipe`, `suppr`) VALUES
(1, 'qsdqsd', 'ao.webp', 0),
(2, 'azeaze', 'ar.webp', 0);

-- --------------------------------------------------------

--
-- Structure de la table `matchs`
--

DROP TABLE IF EXISTS `matchs`;
CREATE TABLE IF NOT EXISTS `matchs` (
  `idMatch` int(11) NOT NULL AUTO_INCREMENT,
  `dateMatch` date NOT NULL,
  `emplacement` varchar(30) NOT NULL,
  `idEqu1` int(11) NOT NULL,
  `scoreEqu1` int(11) NOT NULL DEFAULT '0',
  `idEqu2` int(11) NOT NULL,
  `scoreEqu2` int(11) NOT NULL DEFAULT '0',
  `suppr` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`idMatch`),
  KEY `idEqu1` (`idEqu1`),
  KEY `idEqu2` (`idEqu2`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `matchs`
--

INSERT INTO `matchs` (`idMatch`, `dateMatch`, `emplacement`, `idEqu1`, `scoreEqu1`, `idEqu2`, `scoreEqu2`, `suppr`) VALUES
(1, '2021-09-01', 'aze', 1, 0, 2, 0, 0);

-- --------------------------------------------------------

--
-- Structure de la table `present`
--

DROP TABLE IF EXISTS `present`;
CREATE TABLE IF NOT EXISTS `present` (
  `idBuvette` int(11) NOT NULL,
  `idVolontaire` int(11) NOT NULL,
  `suppr` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`idBuvette`,`idVolontaire`),
  KEY `idVolontaire` (`idVolontaire`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `volontaire`
--

DROP TABLE IF EXISTS `volontaire`;
CREATE TABLE IF NOT EXISTS `volontaire` (
  `idVolontaire` int(11) NOT NULL AUTO_INCREMENT,
  `nomVolontaire` varchar(20) NOT NULL,
  `ageVolontaire` int(11) NOT NULL,
  `suppr` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`idVolontaire`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `volontaire`
--

INSERT INTO `volontaire` (`idVolontaire`, `nomVolontaire`, `ageVolontaire`, `suppr`) VALUES
(1, 'ert', 30, 0),
(2, 'ezrt', 20, 0),
(3, 'jkkljkljkljkl', 25, 1);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `assigner`
--
ALTER TABLE `assigner`
  ADD CONSTRAINT `assigner_ibfk_1` FOREIGN KEY (`idBuvette`) REFERENCES `buvette` (`idBuvette`),
  ADD CONSTRAINT `assigner_ibfk_2` FOREIGN KEY (`idMatch`) REFERENCES `matchs` (`idMatch`);

--
-- Contraintes pour la table `buvette`
--
ALTER TABLE `buvette`
  ADD CONSTRAINT `buvette_ibfk_1` FOREIGN KEY (`idVolontaire`) REFERENCES `volontaire` (`idVolontaire`);

--
-- Contraintes pour la table `matchs`
--
ALTER TABLE `matchs`
  ADD CONSTRAINT `matchs_ibfk_1` FOREIGN KEY (`idEqu1`) REFERENCES `equipe` (`idEquipe`),
  ADD CONSTRAINT `matchs_ibfk_2` FOREIGN KEY (`idEqu2`) REFERENCES `equipe` (`idEquipe`);

--
-- Contraintes pour la table `present`
--
ALTER TABLE `present`
  ADD CONSTRAINT `present_ibfk_1` FOREIGN KEY (`idBuvette`) REFERENCES `buvette` (`idBuvette`),
  ADD CONSTRAINT `present_ibfk_2` FOREIGN KEY (`idVolontaire`) REFERENCES `volontaire` (`idVolontaire`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
