DELETE FROM `monsters`;

INSERT INTO `monsters` (`id`, `agility`, `armor_bonus`, `empathy`, `movement`, `name`, `skills`, `strength`, `weapon_bonus`, `wits`)
VALUES
	(1, 3, 6, 2, 0, 'Death Knight', 'Scout 2', 12, 2, 3),
	(0, 4, 6, NULL, 1, 'Bloodling', NULL, 8, NULL, NULL);
