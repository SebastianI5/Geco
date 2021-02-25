

-- geco.boxes_geco definition

-- Drop table

-- DROP TABLE boxes_geco;

CREATE TABLE boxes_geco (
	id varchar NOT NULL,
	status varchar NULL,
	username varchar NULL,
	created_at varchar NULL,
	sent_at varchar NULL,
	received_at varchar NULL,
	updated_at varchar NULL,
	CONSTRAINT boxes_geco_pk PRIMARY KEY (id)
);


-- geco.contracts_geco definition

-- Drop table

-- DROP TABLE contracts_geco;

CREATE TABLE contracts_geco (
	dealer_id varchar NOT NULL,
	service_id varchar NOT NULL,
	brand_id varchar NOT NULL,
	created_at varchar NULL,
	documents json NULL,
	id varchar NOT NULL,
	CONSTRAINT contracts_geco_pk PRIMARY KEY (id)
);


-- geco.covers_geco definition

-- Drop table

-- DROP TABLE covers_geco;

CREATE TABLE covers_geco (
	id varchar NOT NULL,
	dealer_id varchar NULL,
	status varchar NULL,
	box_id varchar NULL,
	username varchar NULL,
	created_at varchar NULL,
	market varchar NULL,
	service_id varchar NULL,
	brand_id varchar NULL,
	document_types json NULL,
	CONSTRAINT covers_geco_pk PRIMARY KEY (id)
);


-- geco.dealers_geco definition

-- Drop table

-- DROP TABLE dealers_geco;

CREATE TABLE dealers_geco (
	id varchar NOT NULL,
	info json NULL,
	market varchar NULL,
	category varchar NULL,
	status json NULL,
	dealership varchar NULL,
	fake varchar NULL,
	description varchar NULL,
	structures json NULL,
	mandates json NULL,
	salesmanager varchar NULL,
	aftersalesmanager varchar NULL,
	vatcode varchar NULL,
	idpec varchar NULL,
	CONSTRAINT dealers_geco_pk PRIMARY KEY (id)
);


-- geco.document_types_geco definition

-- Drop table

-- DROP TABLE document_types_geco;

CREATE TABLE document_types_geco (
	id varchar NOT NULL,
	description varchar NULL,
	category varchar NULL,
	attachment varchar NULL,
	sort numeric NULL,
	mandatory varchar NULL
);

