-- CreateTable
CREATE TABLE "Pokemon" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "height" INTEGER NOT NULL,
    "weight" INTEGER NOT NULL,
    "squadSlot" INTEGER NOT NULL,
    "types" INTEGER NOT NULL,
    "moves" INTEGER NOT NULL,
    "sprites" INTEGER NOT NULL,
    "abilities" INTEGER NOT NULL,
    "prevEvolution" INTEGER,
    "nextEvolution" INTEGER,

    CONSTRAINT "Pokemon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pokemons" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Pokemons_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Types" (
    "id" SERIAL NOT NULL,
    "types" TEXT[],

    CONSTRAINT "Types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Moves" (
    "id" SERIAL NOT NULL,
    "moves" TEXT[],

    CONSTRAINT "Moves_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sprites" (
    "id" SERIAL NOT NULL,
    "sprites" TEXT[],

    CONSTRAINT "Sprites_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Abilities" (
    "id" SERIAL NOT NULL,
    "abilities" TEXT[],

    CONSTRAINT "Abilities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Trainer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER,
    "gender" TEXT,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "nickname" TEXT NOT NULL,
    "avatar" TEXT,
    "favorite" INTEGER NOT NULL,

    CONSTRAINT "Trainer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Squad" (
    "id" SERIAL NOT NULL,
    "pokemons" INTEGER NOT NULL,
    "trainer" INTEGER NOT NULL,

    CONSTRAINT "Squad_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PokemonToPokemons" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Pokemon_prevEvolution_key" ON "Pokemon"("prevEvolution");

-- CreateIndex
CREATE UNIQUE INDEX "Trainer_email_key" ON "Trainer"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Trainer_favorite_key" ON "Trainer"("favorite");

-- CreateIndex
CREATE UNIQUE INDEX "Squad_pokemons_key" ON "Squad"("pokemons");

-- CreateIndex
CREATE UNIQUE INDEX "Squad_trainer_key" ON "Squad"("trainer");

-- CreateIndex
CREATE UNIQUE INDEX "_PokemonToPokemons_AB_unique" ON "_PokemonToPokemons"("A", "B");

-- CreateIndex
CREATE INDEX "_PokemonToPokemons_B_index" ON "_PokemonToPokemons"("B");

-- AddForeignKey
ALTER TABLE "Pokemon" ADD CONSTRAINT "Pokemon_types_fkey" FOREIGN KEY ("types") REFERENCES "Types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pokemon" ADD CONSTRAINT "Pokemon_moves_fkey" FOREIGN KEY ("moves") REFERENCES "Moves"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pokemon" ADD CONSTRAINT "Pokemon_sprites_fkey" FOREIGN KEY ("sprites") REFERENCES "Sprites"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pokemon" ADD CONSTRAINT "Pokemon_abilities_fkey" FOREIGN KEY ("abilities") REFERENCES "Abilities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pokemon" ADD CONSTRAINT "Pokemon_prevEvolution_fkey" FOREIGN KEY ("prevEvolution") REFERENCES "Pokemon"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trainer" ADD CONSTRAINT "Trainer_favorite_fkey" FOREIGN KEY ("favorite") REFERENCES "Pokemon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Squad" ADD CONSTRAINT "Squad_pokemons_fkey" FOREIGN KEY ("pokemons") REFERENCES "Pokemons"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Squad" ADD CONSTRAINT "Squad_trainer_fkey" FOREIGN KEY ("trainer") REFERENCES "Trainer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PokemonToPokemons" ADD FOREIGN KEY ("A") REFERENCES "Pokemon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PokemonToPokemons" ADD FOREIGN KEY ("B") REFERENCES "Pokemons"("id") ON DELETE CASCADE ON UPDATE CASCADE;
