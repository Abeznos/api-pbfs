create TABLE companies(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    logo VARCHAR(255),
    pb_id VARCHAR(255)
);

create TABLE pages(
    page_id VARCHAR(255) PRIMARY KEY,
    chanal VARCHAR(255),
    object VARCHAR(255),
    point VARCHAR(255),
    pb_id VARCHAR(255),
    page_data JSON,
    company_id INTEGER,
    FOREIGN KEY (company_id) REFERENCES companies (id)
);

create TABLE assessment(
    id SERIAL PRIMARY KEY,
    chanal VARCHAR(255),
    object VARCHAR(255),
    point VARCHAR(255),
    pb_id VARCHAR(255),
    grade INTEGER,
    additions VARCHAR(255),
    company_id INTEGER,
    FOREIGN KEY (company_id) REFERENCES companies (id),
    client_id UUID,
    FOREIGN KEY (client_id) REFERENCES clients (id)
);

create TABLE clients(
    id UUID PRIMARY KEY,
    name VARCHAR(255),
    phone VARCHAR(255),
    email VARCHAR(255),
    client_buyer_id VARCHAR(255),
    company_id INTEGER,
    FOREIGN KEY (company_id) REFERENCES companies (id),
);