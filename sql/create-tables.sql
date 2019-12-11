CREATE TABLE IF NOT EXISTS classes(
    class_id INTEGER PRIMARY KEY,
    class_name TEXT,
    class_motto TEXT
);

CREATE TABLE IF NOT EXISTS students(
    student_id INTEGER PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    birthdate TEXT,
    address TEXT,
    gender TEXT
);