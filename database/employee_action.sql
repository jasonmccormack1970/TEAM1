drop table if exists employee_action;

CREATE SEQUENCE public.employee_action_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1;

ALTER SEQUENCE public.employee_action_id_seq
    OWNER TO postgres;
	
CREATE TABLE public.employee_action
(
    id integer NOT NULL DEFAULT nextval('employee_action_id_seq'::regclass),
    seq integer NOT NULL,
    employee_id integer NOT NULL,
    action_id integer NOT NULL,
    CONSTRAINT employee_action_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.employee
    OWNER to postgres;