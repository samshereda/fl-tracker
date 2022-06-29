DELETE FROM `monsters`;

INSERT INTO `monsters` (`id`, `agility`, `armor_bonus`, `empathy`, `movement`, `name`, `skills`, `strength`, `weapon_bonus`, `wits`)
VALUES
	(1, 3, 6, 2, 0, 'Death Knight', 'Scout 2', 12, 2, 3),
	(0, 4, 6, NULL, 1, 'Bloodling', NULL, 8, NULL, NULL),
	(2, 3, 6, 3, 1, 'Ent', '', 16, NULL, 5),
	(3, 4, 4, NULL, 1, 'Giant Squid', '', 14, NULL, NULL),
	(4, 5, 3, NULL, 3, 'Gryphon', 'Scout 5', 12, NULL, NULL),
	(5, 3, NULL, 1, 2, 'Harpy', 'Scout 2, Insight 4, Manipulation 2', 8, NULL, 2),
	(6, 4, 2, 2, 1, 'Minotaur', 'Scout 3', 10, 2, 2),
	(7, 2, 4, NULL, 1, 'Troll', 'Scout 4', 12, NULL, NULL);
