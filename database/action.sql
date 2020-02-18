drop table if exists action;

CREATE SEQUENCE public.action_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1;

ALTER SEQUENCE public.action_id_seq
    OWNER TO postgres;
	
CREATE TABLE public.action
(
    id integer NOT NULL DEFAULT nextval('employee_id_seq'::regclass),
    action_code character varying(128) COLLATE pg_catalog."default",
    actions character varying(128) COLLATE pg_catalog."default",
    CONSTRAINT action_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.action
    OWNER to postgres;