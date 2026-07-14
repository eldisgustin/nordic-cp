CREATE TABLE `permission` (
	`role` enum('Admin','Anonymous','Anyone','GM','Normal') NOT NULL,
	`name` varchar(100) PRIMARY KEY
);
