DROP TABLE if exists cohorts;
CREATE TABLE cohorts(
-- id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(40) NOT NULL PRIMARY KEY
);

DROP TABLE if exists users;
CREATE TABLE users(
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(40) NOT NULL,
email VARCHAR(40) NOT NULL,
password VARCHAR(40) NOT NULL
);



DROP TABLE if exists students;
CREATE TABLE students (
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(40) NOT NULL,
surname VARCHAR(40) NOT NULL,
cohort_name VARCHAR(40) NOT NULL,
KEY fk_cohort (cohort_name),
CONSTRAINT FK_3 FOREIGN KEY fk_cohort (cohort_name) REFERENCES cohorts(name)
);


DROP TABLE if exists students_assignments;
CREATE TABLE students_assignments(
id_student INT NOT NULL,
id_assignment int NOT NULL,
KEY fkIdx_30 (id_student),
CONSTRAINT FK_2 FOREIGN KEY fkIdx_30 (id_student) REFERENCES students(id),
KEY fkIdx_33 (id_assignment),
CONSTRAINT FK_32 FOREIGN KEY fkIdx_33 (id_assignment) REFERENCES assignments(id),
CONSTRAINT PK_01 PRIMARY KEY  (id_assignment, id_student)
);

DROP TABLE if exists assignments;
CREATE TABLE assignments (
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
url_1 VARCHAR(56) NOT NULL,
name_activity VARCHAR(56) NOT NULL);

DROP TABLE if exists attendance;
CREATE TABLE attendance (
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
id_student INT NOT NULL,
date DATE NOT NULL,
present VARCHAR(5) NOT NULL,
FOREIGN KEY (id_student) REFERENCES students(id));





