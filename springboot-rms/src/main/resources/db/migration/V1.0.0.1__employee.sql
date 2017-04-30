create table t_location (
	loc_id  bigint(19) not null,
	city varchar(255) not null,
	primary key (loc_id)
);

create table t_employee (
    emp_id  bigint(19) auto_increment not null,
    first_name varchar(45) not null,
    last_name varchar(45) not null,
    gender varchar(6) not null,
    dob date not null,
    nationality varchar(45) not null,
    marital_status varchar(7) not null,
    phone varchar(25) not null unique,
    email varchar(50) not null unique,
    hired_date date not null,
    suspend_date date,
    division varchar(45) not null,
    grade varchar(45) not null,
    sub_division varchar(45) not null,
    status varchar(20) not null,
    image_url text,
    location bigint(19) not null,
    foreign key (location) references t_location(loc_id)
);