CREATE EXTENSION IF NOT EXISTS pg_trgm;

DO $$
BEGIN
   EXECUTE 'ALTER DATABASE ' || current_database() || ' SET pg_trgm.word_similarity_threshold = 0.3';
END
$$;

CREATE TYPE key_type AS ENUM ('EA App', 'Xbox Live', 'eShop', 'Rockstar Games Launcher', 'Steam', 'Official website', 'Steam Gift');

CREATE TYPE platform AS ENUM ('PC', 'Xbox Series X|S', 'Nintendo Switch 2');

CREATE TYPE region AS ENUM ('GLOBAL', 'EU');

CREATE TABLE IF NOT EXISTS games (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(255) NOT NULL CHECK (length(name) > 0),
    image_file_name VARCHAR(255) NOT NULL CHECK (length(name) > 0),
    key_type key_type NOT NULL,
    platform platform NOT NULL,
    region region NOT NULL,
    price DECIMAL(15,6) NOT NULL CHECK (price > 0),
    discount SMALLINT CHECK (discount > 0 AND discount <= 100),
    cashback SMALLINT CHECK (cashback > 0 AND cashback <= 100),
    wishlist_count INT DEFAULT 0
);

CREATE INDEX trgm_idx ON games USING GIST (name gist_trgm_ops);

INSERT INTO games (name, image_file_name, key_type, platform, region, price, discount, cashback, wishlist_count)
VALUES
    ('EA SPORTS™ FIFA 23 Standard Edition', 'fifa23.jpg', 'Xbox Live', 'Xbox Series X|S', 'GLOBAL', 79.99, 69, 14, 1832),
    ('Red Dead Redemption 2', 'rdr2.jpg', 'Rockstar Games Launcher', 'PC', 'GLOBAL', 59.99, 80, 20, 26039),
    ('Split Fiction', 'split_fiction.jpg', 'Xbox Live', 'Xbox Series X|S', 'EU', 49.99, 30, 10, 600),
    ('ARC Raiders', 'arc_raiders.jpg', 'Steam', 'PC', 'GLOBAL', 39.99, 28, 2, 6243),
    ('Minecraft: Java & Bedrock Edition', 'minecraft.png', 'Official website', 'PC', 'GLOBAL', 29.99, 42, 18, 94379),
    ('Project Zomboid', 'project_zomboid.jpg', 'Steam Gift', 'PC', 'GLOBAL', 4.90, NULL, 14, 1750),
    ('EA SPORTS™ FIFA 23 Standard Edition', 'fifa23.jpg', 'Xbox Live', 'Xbox Series X|S', 'GLOBAL', 79.99, 69, 14, 1832),
    ('Red Dead Redemption 2', 'rdr2.jpg', 'Rockstar Games Launcher', 'PC', 'GLOBAL', 59.99, 80, 20, 26039),
    ('Split Fiction', 'split_fiction.jpg', 'Xbox Live', 'Xbox Series X|S', 'EU', 49.99, 30, 10, 600),
    ('ARC Raiders 2', 'arc_raiders.jpg', 'Steam', 'PC', 'GLOBAL', 79.99, NULL, NULL, 4),
    ('Minecraft: Java Edition', 'minecraft.png', 'Official website', 'PC', 'GLOBAL', 29.99, 42, NULL, 94379),
    ('Project Zomboid', 'project_zomboid.jpg', 'Steam Gift', 'PC', 'GLOBAL', 4.90, NULL, 14, 1750);
