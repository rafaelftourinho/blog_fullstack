-- Schema BlogDB
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `BlogDB` ;
USE `BlogDB` ;

-- -----------------------------------------------------
-- Table `BlogDB`.`posts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BlogDB`.`posts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `owner` VARCHAR(45) NOT NULL,
  `title` VARCHAR(45) NOT NULL,
  `body` MEDIUMTEXT NOT NULL,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;
