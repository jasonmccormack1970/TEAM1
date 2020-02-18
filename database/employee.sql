drop table if exists employee;

CREATE SEQUENCE public.employee_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1;

ALTER SEQUENCE public.employee_id_seq
    OWNER TO postgres;
	
CREATE TABLE public.employee
(
    id integer NOT NULL DEFAULT nextval('employee_id_seq'::regclass),
    first_name character varying(128) COLLATE pg_catalog."default",
    last_name character varying(128) COLLATE pg_catalog."default",
    employee_role character varying(128) COLLATE pg_catalog."default",
    email character varying(128) COLLATE pg_catalog."default",
    CONSTRAINT employee_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.employee
    OWNER to postgres;