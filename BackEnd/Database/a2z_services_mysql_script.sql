

DROP TABLE IF EXISTS service_requests;
DROP TABLE IF EXISTS services_has_professionals;
DROP TABLE IF EXISTS services;
DROP TABLE IF EXISTS professionals;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS user_flags;
DROP TABLE IF EXISTS users;



-- Create the users table
CREATE TABLE users (
  user_id INT NOT NULL AUTO_INCREMENT,
  f_name VARCHAR(255) NOT NULL,
  l_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role ENUM('Customer', 'Employee') NOT NULL,
  created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (user_id)
);

-- Create the user_flags table
CREATE TABLE user_flags (
  id INT NOT NULL AUTO_INCREMENT,
  reason TEXT NOT NULL,
  blocked_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  users_user_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (users_user_id) REFERENCES users (user_id)
);

-- Create the categories table
CREATE TABLE categories (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);

-- Create the services table
CREATE TABLE services (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  description TEXT NULL DEFAULT NULL,
  cost FLOAT NULL,
  duration FLOAT NULL,
  category_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (category_id) REFERENCES categories (id)
);

-- Create the professionals table
CREATE TABLE professionals (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  occupation VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users (user_id) ON DELETE CASCADE
);

-- Create the services_has_professionals table (many-to-many relationship)
CREATE TABLE services_has_professionals (
  service_id INT NOT NULL,
  professional_id INT NOT NULL,
  PRIMARY KEY (service_id, professional_id),
  FOREIGN KEY (service_id) REFERENCES services (id),
  FOREIGN KEY (professional_id) REFERENCES professionals (id)
);

-- Create the service_requests table with professional_id
CREATE TABLE service_requests (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  description TEXT NULL DEFAULT NULL,
  location VARCHAR(255) NOT NULL,
  scheduled_date DATE NOT NULL,
  scheduled_start_time TIME NOT NULL,
  scheduled_end_time TIME NOT NULL,
  status ENUM('Active', 'Completed', 'Inactive') NOT NULL,
  created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  services_id INT NOT NULL,
  professional_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users (user_id),
  FOREIGN KEY (services_id) REFERENCES services (id),
  FOREIGN KEY (professional_id) REFERENCES professionals (id)
);

-- Insert sample data
INSERT INTO users (f_name, l_name, email, password_hash, role) VALUES
('John', 'Doe', 'john.doe@email.com', 'hash1', 'Customer'),
('Jane', 'Smith', 'jane.smith@email.com', 'hash2', 'Employee'),
('Alice', 'Brown', 'alice.brown@email.com', 'hash3', 'Customer'),
('Bob', 'White', 'bob.white@email.com', 'hash4', 'Employee'),
('Carol', 'Green', 'carol.green@email.com', 'hash5', 'Customer');

INSERT INTO user_flags (reason, users_user_id) VALUES
('Fraudulent activity', 1),
('Non-payment', 4);

INSERT INTO categories (name) VALUES
('Repair Services'),
('Beauty & Wellness');

INSERT INTO services (name, description, cost, duration, category_id) VALUES
('AC Repair', 'Fix AC units', 50.0, 2.0, 1),
('Electrician', 'Fix electrical issues', 30.0, 1.5, 1),
('Beauty Salon', 'Salon services for women', 40.0, 1.5, 2);

INSERT INTO professionals (user_id, occupation, location) VALUES
(2, 'Electrician', 'City A'),
(4, 'AC Repair', 'City B');

INSERT INTO services_has_professionals (service_id, professional_id) VALUES
(1, 2),
(2, 1);

INSERT INTO service_requests (user_id, description, location, scheduled_date, scheduled_start_time, scheduled_end_time, status, services_id, professional_id) VALUES
(3, 'AC repair needed', 'City C', '2024-09-20', '14:00:00', '16:00:00', 'Active', 1, 2),
(5, 'Fix lights', 'City D', '2024-09-21', '15:00:00', '16:30:00', 'Active', 2, 1);








select * from service_requests;





