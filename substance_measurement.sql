-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 16, 2022 at 05:43 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `substance_measurement`
--

-- --------------------------------------------------------

--
-- Table structure for table `experiments`
--

CREATE TABLE `experiments` (
  `experiments_id` int(8) NOT NULL,
  `experiments_name` varchar(30) NOT NULL,
  `experiments_desc` text NOT NULL,
  `experiments_state` enum('start','doing','finished') NOT NULL,
  `experiments_user` int(8) DEFAULT NULL,
  `experiments_scales` int(8) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `records`
--

CREATE TABLE `records` (
  `records_id` int(8) NOT NULL,
  `records_value` float NOT NULL,
  `records_timestamp` datetime NOT NULL,
  `records_experiments` int(8) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `scales`
--

CREATE TABLE `scales` (
  `scales_id` int(8) NOT NULL,
  `scales_device` varchar(255) NOT NULL,
  `scales_name` varchar(30) NOT NULL,
  `scales_state` enum('on','off') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `scales`
--

INSERT INTO `scales` (`scales_id`, `scales_device`, `scales_name`, `scales_state`) VALUES
(1, 'f34rew4rfhuf4f434f', 'Timbangan Satu', 'off');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `users_id` int(8) NOT NULL,
  `users_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `experiments`
--
ALTER TABLE `experiments`
  ADD PRIMARY KEY (`experiments_id`),
  ADD KEY `experiment's owner` (`experiments_user`),
  ADD KEY `scale used` (`experiments_scales`);

--
-- Indexes for table `records`
--
ALTER TABLE `records`
  ADD PRIMARY KEY (`records_id`),
  ADD KEY `record's experiment` (`records_experiments`);

--
-- Indexes for table `scales`
--
ALTER TABLE `scales`
  ADD PRIMARY KEY (`scales_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`users_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `experiments`
--
ALTER TABLE `experiments`
  MODIFY `experiments_id` int(8) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `records`
--
ALTER TABLE `records`
  MODIFY `records_id` int(8) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `scales`
--
ALTER TABLE `scales`
  MODIFY `scales_id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `users_id` int(8) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `experiments`
--
ALTER TABLE `experiments`
  ADD CONSTRAINT `experiment's owner` FOREIGN KEY (`experiments_user`) REFERENCES `users` (`users_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `scale used` FOREIGN KEY (`experiments_scales`) REFERENCES `scales` (`scales_id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `records`
--
ALTER TABLE `records`
  ADD CONSTRAINT `record's experiment` FOREIGN KEY (`records_experiments`) REFERENCES `experiments` (`experiments_id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
