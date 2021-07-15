-- geco.audit_geco definition

-- Drop table

-- DROP TABLE audit_geco;

CREATE TABLE audit_geco (
	id varchar NULL,
	username varchar NULL,
	"at" varchar NULL,
	url varchar NULL,
	"method" varchar NULL,
	request varchar NULL,
	response varchar NULL,
	status varchar NULL
);


-- geco.audit_report_geco definition

-- Drop table

-- DROP TABLE audit_report_geco;

CREATE TABLE audit_report_geco (
	"at" varchar NULL,
	url varchar NULL,
	"method" varchar NULL,
	status varchar NULL,
	qty numeric NULL
);


-- geco.boxes_geco definition

-- Drop table

-- DROP TABLE boxes_geco;

CREATE TABLE boxes_geco (
	id varchar NOT NULL,
	status varchar NULL,
	username varchar NULL,
	created_at varchar NULL,
	history json NULL,
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
	dealership varchar NULL,
	fake varchar NULL,
	description varchar NULL,
	structures json NULL,
	mandates json NULL,
	salesmanager varchar NULL,
	aftersalesmanager varchar NULL,
	vatcode varchar NULL,
	idpec varchar NULL,
	status varchar NULL,
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
	mandatory varchar NULL,
	services json NULL
);


-- geco.occupation_geco definition

-- Drop table

-- DROP TABLE occupation_geco;

CREATE TABLE occupation_geco (
	idpec varchar(1024) NULL,
	"space" varchar(1024) NULL,
	percentage varchar(1024) NULL,
	dealer_id varchar(1024) NULL,
	brand_id varchar(1024) NULL,
	created_at varchar(1024) NULL
);


-- geco.translation_geco definition

-- Drop table

-- DROP TABLE translation_geco;

CREATE TABLE translation_geco (
	"language" varchar NULL,
	"label" varchar NULL,
	"translation" varchar NULL
);




-- geco.v_boxes_geco source

CREATE OR REPLACE VIEW geco.v_boxes_geco
AS SELECT bg.id,
    bg.status,
    bg.username,
    bg.created_at,
    bg.history,
    count(DISTINCT d.idcover)::integer AS qty_contracts,
    count(0)::integer AS qty_documents
   FROM boxes_geco bg
     LEFT JOIN ( SELECT bg_1.id,
            cg.id AS idcover,
            json_array_elements(cg.document_types) AS json_array_elements
           FROM boxes_geco bg_1,
            covers_geco cg
          WHERE bg_1.id::text = cg.box_id::text) d ON bg.id::text = d.id::text
  GROUP BY bg.id;


-- geco.v_contract_documents_geco source

CREATE OR REPLACE VIEW geco.v_contract_documents_geco
AS SELECT d.id,
    d.service_id,
    d.doc_id,
        CASE
            WHEN cg_doc.doc_id IS NULL THEN 0
            ELSE 1
        END AS present
   FROM ( SELECT cg.id,
            cg.service_id,
            dtg.id AS doc_id
           FROM contracts_geco cg,
            ( SELECT dtg_1.id,
                    dtg_1.mandatory,
                    json_array_elements_text(dtg_1.services) AS service_id
                   FROM document_types_geco dtg_1
                  WHERE dtg_1.mandatory::text = '1'::text) dtg
          WHERE cg.service_id::text = dtg.service_id) d
     LEFT JOIN ( SELECT contracts_geco.id,
            contracts_geco.service_id,
            json_array_elements(contracts_geco.documents) ->> 'type'::text AS doc_id
           FROM contracts_geco) cg_doc ON d.service_id::text = cg_doc.service_id::text AND d.id::text = cg_doc.id::text AND d.doc_id::text = cg_doc.doc_id;


-- geco.v_contracts_completed_by_service_geco source

CREATE OR REPLACE VIEW geco.v_contracts_completed_by_service_geco
AS SELECT d.service_id AS label,
    sum(d.completed) AS data
   FROM ( SELECT d_1.id,
            d_1.service_id,
                CASE
                    WHEN sum(d_1.present) = count(0) THEN 1
                    ELSE 0
                END AS completed
           FROM v_contract_documents_geco d_1
          GROUP BY d_1.id, d_1.service_id) d
  GROUP BY d.service_id;


-- geco.v_contracts_geco source

CREATE OR REPLACE VIEW geco.v_contracts_geco
AS SELECT cg.dealer_id,
    cg.service_id,
    cg.brand_id,
    cg.created_at,
    cg.documents,
    cg.id,
    dg.description
   FROM contracts_geco cg,
    dealers_geco dg
  WHERE cg.dealer_id::text = dg.id::text;


-- geco.v_contracts_incompleted_by_service_geco source

CREATE OR REPLACE VIEW geco.v_contracts_incompleted_by_service_geco
AS SELECT d.service_id AS label,
    count(0) - sum(d.completed) AS data
   FROM ( SELECT d_1.id,
            d_1.service_id,
                CASE
                    WHEN sum(d_1.present) = count(0) THEN 1
                    ELSE 0
                END AS completed
           FROM v_contract_documents_geco d_1
          GROUP BY d_1.id, d_1.service_id) d
  GROUP BY d.service_id;


-- geco.v_covers_geco source

CREATE OR REPLACE VIEW geco.v_covers_geco
AS SELECT c.id,
    c.dealer_id,
    d.description,
    c.status,
    c.box_id,
    c.username,
    c.created_at,
    c.market,
    c.service_id,
    c.brand_id,
    c.document_types
   FROM covers_geco c,
    dealers_geco d
  WHERE c.dealer_id::text = d.id::text;


-- geco.v_dealers_no_pec_geco source

CREATE OR REPLACE VIEW geco.v_dealers_no_pec_geco
AS SELECT d.vatcode,
    d.description,
    d.dealer_id,
    d.brand_id,
    COALESCE(d.idpec_dealer, d.idpec_vatcode) AS idpec
   FROM ( SELECT d_1.vatcode,
            d_1.description,
            d_1.dealer_id,
            d_1.brand_id,
            ( SELECT og.idpec
                   FROM occupation_geco og
                  WHERE og.dealer_id::text = d_1.dealer_id::text
                 LIMIT 1) AS idpec_dealer,
            ( SELECT og.idpec
                   FROM occupation_geco og,
                    dealers_geco dg
                  WHERE og.dealer_id::text = dg.id::text AND dg.vatcode::text = d_1.vatcode::text
                 LIMIT 1) AS idpec_vatcode
           FROM ( SELECT DISTINCT d_1_1.vatcode,
                    d_1_1.description,
                    d_1_1.id AS dealer_id,
                    json_array_elements(d_1_1.mandates) ->> 'brand_id'::text AS brand_id
                   FROM dealers_geco d_1_1
                  WHERE d_1_1.fake::text <> 'Y'::text AND d_1_1.status::text = '1'::text) d_1
          WHERE NOT (EXISTS ( SELECT NULL::text AS text
                   FROM occupation_geco o
                  WHERE d_1.dealer_id::text = o.dealer_id::text AND d_1.brand_id = o.brand_id::text))) d;


-- geco.v_documents_by_service_geco source

CREATE OR REPLACE VIEW geco.v_documents_by_service_geco
AS SELECT cg.service_id AS label,
    sum(json_array_length(cg.documents)) AS data
   FROM contracts_geco cg
  GROUP BY cg.service_id;


-- geco.v_documents_by_year_geco source

CREATE OR REPLACE VIEW geco.v_documents_by_year_geco
AS SELECT "substring"(d.label, 1, 4) AS label,
    count(0) AS data
   FROM ( SELECT json_array_elements(json_array_elements(cg.documents) -> 'versions'::text) ->> 'created_at'::text AS label
           FROM contracts_geco cg) d
  GROUP BY ("substring"(d.label, 1, 4));


-- geco.v_occupation_geco source

CREATE OR REPLACE VIEW geco.v_occupation_geco
AS SELECT t.idpec,
    t.space,
    t.percentage,
    t.dealer_id,
    t.brand_id,
    t.description,
    t.status,
    t.category,
    t.salesmanager,
    t.aftersalesmanager,
        CASE
            WHEN t.percentage <= 60::numeric THEN 'green'::text
            WHEN t.percentage <= 80::numeric THEN 'yellow'::text
            ELSE 'red'::text
        END AS color
   FROM ( SELECT o.idpec,
            replace(o.space::text, ','::text, '.'::text)::numeric AS space,
            replace(o.percentage::text, ','::text, '.'::text)::numeric AS percentage,
            o.dealer_id,
            o.brand_id,
            d.description,
            d.status,
            d.category,
            d.salesmanager,
            d.aftersalesmanager
           FROM occupation_geco o,
            dealers_geco d
          WHERE o.dealer_id::text = d.id::text) t;


          
