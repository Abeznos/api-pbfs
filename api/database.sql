create TABLE companies(
    company_id UUID PRIMARY KEY,
    company_name VARCHAR(30) NOT NULL,
    tariff VARCHAR(10) DEFAULT 'Lite',
    company_status VARCHAR(10),
    billing_date DATE,
    logo VARCHAR(255),
    pb_id VARCHAR(36)
);

create TABLE pages(
    page_id UUID PRIMARY KEY,
    page_name VARCHAR(255),
    page_chanal VARCHAR(255),
    page_object VARCHAR(255),
    page_point VARCHAR(255),
    page_data JSON,
    company_id UUID,
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
    pbfs_id UUID PRIMARY KEY,
    name VARCHAR(255),
    phone VARCHAR(255),
    email VARCHAR(255),
    client_buyer_id VARCHAR(255),
    company_id INTEGER,
    FOREIGN KEY (company_id) REFERENCES companies (id),
);

create TABLE brands(
    brand_id UUID PRIMARY KEY,
    brand_name VARCHAR(40) NOT NULL,
    logo VARCHAR(255),
    company_id UUID,
    FOREIGN KEY (company_id) REFERENCES companies (company_id)
);

create TABLE points_of_sale(
    point_id UUID PRIMARY KEY,
    point_name VARCHAR(50) NOT NULL,
    adress VARCHAR(255),
    loyalty_link VARCHAR(255),
    yandex_link VARCHAR(255),
    _2gis_link VARCHAR(255),
    google_link VARCHAR(255),
    company_id UUID,
    FOREIGN KEY (company_id) REFERENCES companies (company_id),
    brand_id UUID,
    FOREIGN KEY (brand_id) REFERENCES brands (brand_id)
);

create TABLE users(
    users_id UUID PRIMARY KEY,
    user_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    phone VARCHAR(30) UNIQUE,
    password VARCHAR(30) NOT NULL,
    role VARCHAR(20) NOT NULL,
    company_id UUID,
    FOREIGN KEY (company_id) REFERENCES companies (company_id),
    brand_id UUID,
    FOREIGN KEY (brand_id) REFERENCES brands (brand_id)
);

create TABLE pages(
    page_id UUID PRIMARY KEY,
    page_settings JSON NOT NULL,
    created_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    company_id UUID,
    FOREIGN KEY (company_id) REFERENCES companies (company_id),
    brand_id UUID,
    FOREIGN KEY (brand_id) REFERENCES brands (brand_id),
    point_id UUID,
    FOREIGN KEY (point_id) REFERENCES points_of_sale (point_id)
);
