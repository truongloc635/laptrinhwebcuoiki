CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
);

-- Thêm tài khoản mẫu
INSERT INTO users (email, password) VALUES ('admin@gmail.com', '123456');