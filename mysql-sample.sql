CREATE TABLE `pokemon` (
  `order` int NOT NULL,
  `base_experience` int NOT NULL,
  `weight` int NOT NULL,
  `height` int NOT NULL,
  `species_id` int NULL,
  `identifier` VARCHAR(80) NOT NULL,
  `id` int NOT NULL PRIMARY key
);

insert into `pokemon` (`id`, `identifier`, `species_id`, `height`, `weight`, `base_experience`, `order`) values (1, 'bulbasaur', 1, 7, 69, 64, 1);