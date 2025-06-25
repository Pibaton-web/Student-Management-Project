package com.studentms.Studentms.service;

import com.studentms.Studentms.model.Student;
import com.studentms.Studentms.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
 
import java.util.List;
import java.util.Optional;
 
@Service
public class StudentService {
 
    @Autowired
    private StudentRepository studentRepository;
 
    // Get all students
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }
 
    // Get student by ID
    public Student getStudentById(Long id) {
        Optional<Student> student = studentRepository.findById(id);
        return student.orElse(null);
    }
 
    // Add a new student
    public Student addStudent(Student student) {
        return studentRepository.save(student);
    }
 
    // Update an existing student
    public Student updateStudent(Long id, Student updatedStudent) {
        updatedStudent.setId(id); // make sure ID is set
        return studentRepository.save(updatedStudent);
    }
 
    // Delete student by ID
    public void deleteStudent(Long id) {
        studentRepository.deleteById(id);
    }
}
 
