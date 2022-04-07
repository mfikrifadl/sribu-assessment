	DROP TABLE IF EXISTS links;

	CREATE TABLE links (
		id SERIAL PRIMARY KEY,
		url VARCHAR(255) NOT NULL,
		name VARCHAR(255) NOT NULL,
		description VARCHAR (255),
		type VARCHAR (100),
		last_update DATE DEFAULT CURRENT_TIMESTAMP NOT NULL
	);


	INSERT INTO links (id, url, name, type)
	VALUES(1, 'https://sribulancer.com/users/reza','Profile Reza', 'user');

	INSERT INTO links (id, url, name, type)
	VALUES(2, 'https://sribulancer.com/users/fikri','Profile Fikri', 'user');

	INSERT INTO links (id, url, name, type)
	VALUES(3, 'https://sribulancer.com/users/soffa','Profile Soffa', 'user');

	INSERT INTO links (id, url, name, type)
	VALUES(4, 'https://sribulancer.com/jobs','Jobs Archive', 'archive');

	INSERT INTO links (id, url, name, type)
	VALUES(5, 'https://sribulancer.com/freelancers','Freelancers Archive', 'archive');

	INSERT INTO links (id, url, name, type)
	VALUES(6, 'https://sribulancer.com/freelancers','Freelancers Archive', 'archive');

	INSERT INTO links (id, url, name, type)
	VALUES(7, 'https://sribulancer.com/logs','Logs Archive', 'archive');

	INSERT INTO links (id, url, name, type)
	VALUES(8, 'https://sribulancer.com/users/max!','Profile Max!', 'user');