/*
 Navicat MySQL Data Transfer

 Source Server         : onekey
 Source Server Type    : MySQL
 Source Server Version : 80026
 Source Host           : localhost:3306
 Source Schema         : poll

 Target Server Type    : MySQL
 Target Server Version : 80026
 File Encoding         : 65001

 Date: 15/08/2021 00:03:59
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for poll_item
-- ----------------------------
DROP TABLE IF EXISTS `poll_item`;
CREATE TABLE `poll_item` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `creator` varchar(70) NOT NULL,
  `for_votes` bigint NOT NULL DEFAULT '0',
  `against_votes` bigint NOT NULL DEFAULT '0',
  `end_time` bigint NOT NULL,
  `link` varchar(255) NOT NULL,
  `network` varchar(20) NOT NULL,
  `type_args_1` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `title_en` varchar(255) NOT NULL,
  `description` varchar(5000) NOT NULL,
  `description_en` varchar(5000) NOT NULL,
  `status` tinyint NOT NULL,
  `create_at` bigint DEFAULT NULL,
  `updated_at` bigint DEFAULT NULL,
  `deleted_at` bigint DEFAULT NULL,
  `id_on_chain` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`,`network`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;

SET FOREIGN_KEY_CHECKS = 1;
