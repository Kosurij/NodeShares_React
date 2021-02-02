-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Дек 22 2020 г., 11:17
-- Версия сервера: 10.3.13-MariaDB-log
-- Версия PHP: 7.1.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `reactjs`
--

-- --------------------------------------------------------

--
-- Структура таблицы `notes`
--

CREATE TABLE `notes` (
  `id` int(11) NOT NULL,
  `url` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `timestamp` int(11) NOT NULL,
  `text` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL,
  `updated_at` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `notes`
--

INSERT INTO `notes` (`id`, `url`, `timestamp`, `text`, `created_at`, `updated_at`) VALUES
(52, 'ae14w91onlcyr51zyz9p4anp', 1608296880, 'Тестовая первая заметка', '2020-12-18 13:08:00', '2020-12-18 13:08:00'),
(53, 'vu5p9eym1qvlfz3ycu3y1vw0', 1608296932, 'Заметка номер 2', '2020-12-18 13:08:52', '2020-12-18 13:08:52'),
(54, 'oa6s8kx7nyk1pczt7idoc2kz', 1608296957, 'Test note system 22222222222222222', '2020-12-18 13:09:17', '2020-12-18 13:09:17'),
(55, '21b4dbc3b2wj0uha2e4or7rp', 1608298362, 'первую заметку\nпервую заметку\nпервую заметку\nпервую заметку\nпервую заметку', '2020-12-18 13:32:42', '2020-12-18 13:32:42'),
(56, 'v309aeuoxgvk5g2zaeb50m9p', 1608298380, 'Test note system', '2020-12-18 13:33:00', '2020-12-18 13:33:00'),
(57, '74k5csfzz9q1swcwf1j5zubh', 1608298578, 'Наша первая заметка!!!!\n!1111111111111111111', '2020-12-18 13:36:18', '2020-12-18 13:36:18'),
(58, 't1m3cb8kq14idw7uzvyipyby', 1608298678, 'Вторая заметка вот ответ', '2020-12-18 13:37:58', '2020-12-18 13:37:58'),
(59, 'liy11233krfvz59q0n15s97u', 1608624079, 'Сообщение номер 1', '2020-12-22 08:01:19', '2020-12-22 08:01:19'),
(60, 'trjlp1oj4468omyqohgxuk2a', 1608624198, '2222222222222 сообщение', '2020-12-22 08:03:18', '2020-12-22 08:03:18');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `notes`
--
ALTER TABLE `notes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `notes`
--
ALTER TABLE `notes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
