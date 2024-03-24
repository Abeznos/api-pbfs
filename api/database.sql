create TABLE companies(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    logo VARCHAR(255),
    pb_id VARCHAR(255)
);

create TABLE pages(
    page_id SERIAL PRIMARY KEY,
    cahanal VARCHAR(255),
    object VARCHAR(255),
    point VARCHAR(255),
    pb_id VARCHAR(255),
    page_data JSON,
    company_id INTEGER,
    FOREIGN KEY (company_id) REFERENCES companies (id)
);