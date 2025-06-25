CREATE TABLE student (
    id NUMBER PRIMARY KEY,
    name VARCHAR2(100),
    age NUMBER,
    course VARCHAR2(100),
    email VARCHAR2(100)
);
 
CREATE SEQUENCE student_seq START WITH 1 INCREMENT BY 1;



 
> CREATE OR REPLACE TRIGGER trg_student_id

   BEFORE INSERT ON student

   FOR EACH ROW

   BEGIN

       IF :NEW.id IS NULL THEN

           SELECT student_seq.NEXTVAL INTO :NEW.id FROM dual;

      END IF;

   END;

    /
 