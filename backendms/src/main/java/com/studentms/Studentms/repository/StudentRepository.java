package com.studentms.Studentms.repository;



import com.studentms.Studentms.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
 
@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {
    // Optional: Add custom methods like findByName, etc.
}
 
