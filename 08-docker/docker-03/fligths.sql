-- Table: public.flights

-- DROP TABLE public.flights;

CREATE TABLE public.flights
(
    "number" bigint NOT NULL,
    origin character varying(5)COLLATE pg_catalog."default",
    destination character varying(5) COLLATE pg_catalog."default",
    departs text COLLATE pg_catalog."default",
    arrives text COLLATE pg_catalog."default",
    CONSTRAINT flights_pkey PRIMARY KEY ("number")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.flights
    OWNER to postgres;s