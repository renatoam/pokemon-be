CREATE TABLE `pokemon` (
  `order` int NOT NULL,
  `base_experience` int NOT NULL,
  `weight` int NOT NULL,
  `height` int NOT NULL,
  `species_id` int NULL,
  `identifier` VARCHAR(80) NOT NULL,
  `id` int NOT NULL PRIMARY key,
  `moves_id` int NOT NULL,
);

insert into `pokemon` (`id`, `identifier`, `species_id`, `height`, `weight`, `base_experience`, `order`, `moves_id`) values (1, 'bulbasaur', 1, 7, 69, 64, 1, 1);

CREATE TABLE `moves` (
  `priority` int NOT NULL,
  `accuracy` int NULL,
  `pp` int NULL,
  `power` int NULL,
  `type_id` int NOT NULL,
  `identifier` varchar(79) NOT NULL,
  `id` int NOT NULL PRIMARY KEY
);

INSERT INTO `moves` (`id`, `identifier`, `type_id`, `power`, `pp`, `accuracy`, `priority`) VALUES
(1,'pound',1,40,35,100,0);