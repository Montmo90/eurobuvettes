-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : jeu. 22 juil. 2021 à 17:42
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
-- Structure de la table `buvette`
--

DROP TABLE IF EXISTS `buvette`;
CREATE TABLE IF NOT EXISTS `buvette` (
  `idBuvette` int(11) NOT NULL AUTO_INCREMENT,
  `nomBuvette` varchar(30) DEFAULT NULL,
  `emplacementB` varchar(30) DEFAULT NULL,
  `idVolontaire` int(11) NOT NULL,
  PRIMARY KEY (`idBuvette`),
  KEY `idVolontaire` (`idVolontaire`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `equipe`
--

DROP TABLE IF EXISTS `equipe`;
CREATE TABLE IF NOT EXISTS `equipe` (
  `idEquipe` int(11) NOT NULL AUTO_INCREMENT,
  `paysEquipe` varchar(20) NOT NULL,
  `drapeauEquipe` varchar(20) NOT NULL,
  PRIMARY KEY (`idEquipe`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `est_ouverte`
--

DROP TABLE IF EXISTS `est_ouverte`;
CREATE TABLE IF NOT EXISTS `est_ouverte` (
  `idBuvette` int(11) NOT NULL,
  `idMatch` int(11) NOT NULL,
  PRIMARY KEY (`idBuvette`,`idMatch`),
  KEY `idMatch` (`idMatch`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `est_present`
--

DROP TABLE IF EXISTS `est_present`;
CREATE TABLE IF NOT EXISTS `est_present` (
  `idBuvette` int(11) NOT NULL,
  `idVolontaire` int(11) NOT NULL,
  `idMatch` int(11) NOT NULL,
  PRIMARY KEY (`idBuvette`,`idVolontaire`,`idMatch`),
  KEY `idVolontaire` (`idVolontaire`),
  KEY `idMatch` (`idMatch`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `matchs`
--

DROP TABLE IF EXISTS `matchs`;
CREATE TABLE IF NOT EXISTS `matchs` (
  `idMatch` int(11) NOT NULL AUTO_INCREMENT,
  `dateMatch` date NOT NULL,
  `scoreA` int(11) DEFAULT NULL,
  `scoreB` int(11) DEFAULT NULL,
  PRIMARY KEY (`idMatch`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `participer`
--

DROP TABLE IF EXISTS `participer`;
CREATE TABLE IF NOT EXISTS `participer` (
  `idMatch` int(11) NOT NULL,
  `idEquipe` int(11) NOT NULL,
  PRIMARY KEY (`idMatch`,`idEquipe`),
  KEY `idEquipe` (`idEquipe`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `volontaire`
--

DROP TABLE IF EXISTS `volontaire`;
CREATE TABLE IF NOT EXISTS `volontaire` (
  `idVolontaire` int(11) NOT NULL AUTO_INCREMENT,
  `nomVolontaire` varchar(20) DEFAULT NULL,
  `ageVolontaire` int(11) NOT NULL,
  PRIMARY KEY (`idVolontaire`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
