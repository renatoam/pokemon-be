CREATE EXTENSION HSTORE;
CREATE EXTENSION pgcrypto;

CREATE TABLE abilities (
  id INTEGER NOT NULL,
  identifier VARCHAR(79) NOT NULL,
  PRIMARY KEY (id)
)

CREATE TABLE types (
  id INTEGER NOT NULL,
  identifier VARCHAR(79) NOT NULL,
  PRIMARY KEY (id)
)

CREATE TABLE moves (
  id INTEGER NOT NULL,
  identifier VARCHAR(79) NOT NULL,
  type_id INTEGER NOT NULL,
  power SMALLINT,
  pp SMALLINT,
  accuracy SMALLINT,
  priority SMALLINT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY(type_id) REFERENCES types (id)
)

CREATE TABLE pokemon_species (
  id INTEGER NOT NULL,
  identifier VARCHAR(79) NOT NULL,
  evolves_from_species_id INTEGER,
  is_baby BOOLEAN NOT NULL,
  forms_switchable BOOLEAN NOT NULL,
  is_legendary BOOLEAN NOT NULL,
  "order" INTEGER NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY(evolves_from_species_id) REFERENCES pokemon_species (id)
)

CREATE TABLE pokemon (
  id INTEGER NOT NULL,
  identifier VARCHAR(79) NOT NULL,
  species_id INTEGER,
  height INTEGER NOT NULL,
  weight INTEGER NOT NULL,
  base_experience INTEGER NOT NULL,
  "order" INTEGER NOT NULL,
  stats HSTORE,
  moves INTEGER[], 
  PRIMARY KEY (id),
  FOREIGN KEY(species_id) REFERENCES pokemon_species (id)
)

CREATE TABLE trainer (
  id INTEGER NOT NULL,
  name VARCHAR(79) NOT NULL,
  email VARCHAR(79) NOT NULL UNIQUE,
  password VARCHAR(70) NOT NULL,
  avatar VARCHAR(255),
  favorite_id INTEGER,
  PRIMARY KEY (id),
  FOREIGN KEY(favorite_id) REFERENCES pokemon (id)
)

CREATE TABLE stats (
  id INTEGER NOT NULL,
  identifier VARCHAR(79) NOT NULL,
  is_battle_only BOOLEAN NOT NULL,
  game_index INTEGER,
  PRIMARY KEY (id)
)

CREATE TABLE squad (
  id INTEGER NOT NULL,
  identifier VARCHAR(79) NOT NULL,
  is_complete BOOLEAN NOT NULL,
  trainer_id INTEGER NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY(trainer_id) REFERENCES trainer (id)
)

CREATE TABLE squad_pokemon (
  pokemon_id INTEGER NOT NULL,
  squad_id INTEGER NOT NULL,
  slot INTEGER NOT NULL,
  PRIMARY KEY (squad_id, slot),
  FOREIGN KEY(pokemon_id) REFERENCES pokemon (id),
  FOREIGN KEY(squad_id) REFERENCES squad (id)
)

CREATE TABLE pokemon_abilities (
  pokemon_id INTEGER NOT NULL,
  ability_id INTEGER NOT NULL,
  is_hidden BOOLEAN NOT NULL,
  slot INTEGER NOT NULL,
  PRIMARY KEY (pokemon_id, slot),
  FOREIGN KEY(pokemon_id) REFERENCES pokemon (id),
  FOREIGN KEY(ability_id) REFERENCES abilities (id)
)

CREATE TABLE pokemon_types (
  pokemon_id INTEGER NOT NULL,
  type_id INTEGER NOT NULL,
  slot INTEGER NOT NULL,
  PRIMARY KEY (pokemon_id, slot),
  FOREIGN KEY(pokemon_id) REFERENCES pokemon (id),
  FOREIGN KEY(type_id) REFERENCES types (id)
)

CREATE TABLE pokemon_moves (
  pokemon_id INTEGER NOT NULL,
  move_id INTEGER NOT NULL,
  level INTEGER NOT NULL,
  "order" INTEGER,
  PRIMARY KEY (
    pokemon_id,
    move_id,
    level
  ),
  FOREIGN KEY(pokemon_id) REFERENCES pokemon (id),
  FOREIGN KEY(move_id) REFERENCES moves (id)
)

CREATE TABLE pokemon_stats (
  pokemon_id INTEGER NOT NULL,
  stat_id INTEGER NOT NULL,
  base_stat INTEGER NOT NULL,
  effort INTEGER NOT NULL,
  PRIMARY KEY (pokemon_id, stat_id),
  FOREIGN KEY(pokemon_id) REFERENCES pokemon (id),
  FOREIGN KEY(stat_id) REFERENCES stats (id)
)
