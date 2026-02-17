-- PostgreSQL Schema for SongLang
-- Designed by Aura @ Emarov

-- Users Table: Stores user information and authentication details
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    username VARCHAR(50) UNIQUE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    last_login TIMESTAMPTZ,
    is_premium BOOLEAN DEFAULT FALSE
);

-- Languages Table: Stores the languages supported by the app
CREATE TABLE languages (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL, -- e.g., 'English', 'Arabic'
    code VARCHAR(10) UNIQUE NOT NULL  -- e.g., 'en', 'ar'
);

-- Songs Table: Stores song metadata
CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    youtube_id VARCHAR(50) UNIQUE NOT NULL,
    title VARCHAR(255) NOT NULL,
    artist VARCHAR(255),
    language_id INT REFERENCES languages(id),
    difficulty_level SMALLINT NOT NULL CHECK (difficulty_level BETWEEN 1 AND 5), -- 1: Easy, 5: Hard
    genre VARCHAR(50)
);

-- Lyrics Table: Stores synchronized lyric data for each song
CREATE TABLE lyrics (
    id SERIAL PRIMARY KEY,
    song_id INT REFERENCES songs(id),
    start_time_ms INT NOT NULL,
    end_time_ms INT NOT NULL,
    original_text TEXT NOT NULL,
    translated_text TEXT
);

-- User Progress Table: Tracks which songs a user has completed and their score
CREATE TABLE user_progress (
    id SERIAL PRIMARY KEY,
    user_id UUID REFERENCES users(id),
    song_id INT REFERENCES songs(id),
    completed_at TIMESTAMPTZ DEFAULT NOW(),
    score INT,
    UNIQUE(user_id, song_id) -- A user can only complete a song once
);

-- Learned Words Table: Tracks individual words a user has learned
CREATE TABLE learned_words (
    id SERIAL PRIMARY KEY,
    user_id UUID REFERENCES users(id),
    word VARCHAR(100) NOT NULL,
    language_id INT REFERENCES languages(id),
    first_learned_at TIMESTAMPTZ DEFAULT NOW(),
    mastery_level SMALLINT DEFAULT 1 CHECK (mastery_level BETWEEN 1 AND 5), -- 1: New, 5: Mastered
    UNIQUE(user_id, word, language_id)
);

-- Create Indexes for faster queries
CREATE INDEX idx_songs_language ON songs(language_id);
CREATE INDEX idx_lyrics_song ON lyrics(song_id);
CREATE INDEX idx_progress_user ON user_progress(user_id);
CREATE INDEX idx_words_user_lang ON learned_words(user_id, language_id);

-- Insert initial languages
INSERT INTO languages (name, code) VALUES ('English', 'en'), ('Arabic', 'ar'), ('Spanish', 'es'), ('Russian', 'ru');
