-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 02-12-2025 a las 14:39:28
-- Versión del servidor: 8.3.0
-- Versión de PHP: 8.4.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `veterinaria`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

DROP TABLE IF EXISTS `clientes`;
CREATE TABLE IF NOT EXISTS `clientes` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `apellido` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `documento` varchar(10) COLLATE utf8mb4_general_ci NOT NULL,
  `direccion` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `localidad` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `telefono` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `foto` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `usuario` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `rol` varchar(10) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id`, `nombre`, `apellido`, `documento`, `direccion`, `localidad`, `telefono`, `foto`, `email`, `usuario`, `password`, `rol`) VALUES
(1, 'WALTER EDGARDO', 'LAUXMANN', '20305442', 'S/D', 'S/D', '3476623676', 'default.png', 'walterlauxmann@institutocedec.com', 'walterlauxmann@institutocedec.com', '$2y$10$zZO/lYpHbBhDgWJ0/hqm3.xcVAfsLt8Z0q5cecvBH59leFD9tv3WC', 'admin'),
(2, 'WALTER EDGARDO', 'LAUXMANN', '20305442', 'S/D', 'S/D', '03476623676', 'default.png', 'wlauxmann@gmail.com', 'wlauxmann@gmail.com', '$2y$10$Yd0JGYIWRLGke6ao/I0U.efqv.6DibwpKTC7YeroMH2rYVqc/kefS', 'client');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mascotas`
--

DROP TABLE IF EXISTS `mascotas`;
CREATE TABLE IF NOT EXISTS `mascotas` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `especie` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `raza` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `foto` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `historia_clinica` longtext COLLATE utf8mb4_general_ci NOT NULL,
  `clientes_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `mascotas`
--

INSERT INTO `mascotas` (`id`, `nombre`, `especie`, `raza`, `foto`, `historia_clinica`, `clientes_id`) VALUES
(1, 'Pupy', 'Perro', 'Callejero', '', 'Nada', 1),
(2, 'Perla', 'Gato', 'Casera', '', 'No tiene nada', 2);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
