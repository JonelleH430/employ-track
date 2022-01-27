INSERT INTO departments (name)
VALUES
('Engineering'), ('Creative'), ('Marketing'), ('Finance');

INSERT INTO roles (title, salary, department_id)
VALUES
('Front-end Developer', 75000, 1),
('Back-end Developer', 80000, 1),
('Lead Engineer', 120000, 1),
('UX Designer', 80000, 2),
('Graphic Designer', 72000, 2),
('Creative Director', 140000, 2),
('Marketing Coordinator', 70500, 3),
('Marketing Analyst', 72000, 3),
('Marketing Director', 92000, 3),
('Accountant', 72000, 4),
('Financial Analyst', 72500, 4),
('Finance Manager', 88000, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
('Jonelle', 'Harris', 3, NULL),
('Jerome', 'Harris', 6, NULL),
('Joan', 'Harris', 9, NULL),
('Clinton', 'Harris', 12, NULL),
('Denessia', 'Hepburn', 1, 1),
('Perry', 'Hepburn', 2, 1),
('Jahneel', 'Hepburn', 4, 2),
('Latonya', 'Banton', 5, 2),
('Chauncey', 'Haye', 7, 3),
('Naomi', 'Haye', 8, 3),
('Lexy', 'Bennett', 10, 4),
('Tamia', 'Richards', 11, 4);