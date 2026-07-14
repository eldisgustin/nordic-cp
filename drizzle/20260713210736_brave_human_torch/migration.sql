ALTER TABLE `page` MODIFY COLUMN `last_modified_by` varchar(36);--> statement-breakpoint
ALTER TABLE `page` ADD `location` enum('navbar','none') DEFAULT 'none' NOT NULL;--> statement-breakpoint
ALTER TABLE `page` ADD `minimunVisibility` enum('Admin','Anonymous','Anyone','GM','Normal') DEFAULT 'Anyone' NOT NULL;--> statement-breakpoint
ALTER TABLE `page` ADD `icon` text DEFAULT ('mdi:paper');--> statement-breakpoint
ALTER TABLE `page` ADD `order` int;