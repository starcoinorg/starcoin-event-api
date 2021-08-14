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

 Date: 15/08/2021 00:06:27
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

-- ----------------------------
-- Records of poll_item
-- ----------------------------
BEGIN;
INSERT INTO `poll_item` VALUES (1, '0xb2aa52f94db4516c5beecef363af850a', 0, 0, 1625055256096, 'https://github.com/starcoinorg/starcoin/discussions/2621', 'main', '0x1::UpgradeModuleDaoProposal::UpgradeModuleV2', 'Starcoin 开放 Move 部署', 'Starcoin Move publish open', '随着Starcoin生态对Move部署的需求日益强烈，Starcoin计划发起正式开放Move合约新提案。提案将于2021年6月23日开始投票，并于2021年6月30日投票结束，倡议全面开放部署Move合约，允许任何人往链上部署Move合约、构建DeFi应用。此项提议通过，这将是一个里程碑式的时刻，意味着Starcoin生态完全敞开怀抱，全面拥抱DeFi生态。本提案是一种 OnChainConfig 变更的投票提案，通过投票改变链上配置。', 'description testing testing', 1, 1625535794843, 1626012579201, NULL, '1');
INSERT INTO `poll_item` VALUES (2, 'scarecrow', 0, 0, 1629108749834, 'http://www.baidu.com', 'main', '55555', '大威天龙', 'DaWeiTianlong', '大威天龙大威天龙大威天龙大威天龙大威天龙大威天龙大威天龙大威天龙大威天龙大威天龙大威天龙大威天龙大威天龙大威天龙大威天龙大威天龙大威天龙大威天龙大威天龙大威天龙大威天龙', 'DaWeiTianlongDaWeiTianlongDaWeiTianlongDaWeiTianlong', 1, 1628935949834, NULL, NULL, '7');
INSERT INTO `poll_item` VALUES (3, '钟泽方', 0, 0, 1629543415203, 'http://www.baidu.com', 'main', 'fadfd', '笨小孩', 'Silly Boy', '笨小孩笨小孩笨小孩笨小孩笨小孩笨小孩笨小孩笨小孩笨小孩', 'Silly BoySilly BoySilly BoySilly Boy', 1, 1628938615203, NULL, NULL, 'fadsfadsf');
INSERT INTO `poll_item` VALUES (4, 'wrwrrr', 0, 0, 1629543497850, 'rwrrr', 'main', 'rrr', 'qetqwe', 'etete', 'wrywre', 'twertwert', 1, 1628938697850, NULL, NULL, 'rrrrr');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
