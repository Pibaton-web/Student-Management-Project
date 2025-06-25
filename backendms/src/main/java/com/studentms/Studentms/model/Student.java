package com.studentms.Studentms.model;

import jakarta.persistence.*;
 
@Entity
@Table(name = "student")
public class Student {
 
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
 
    private String name;
    private int age;
    private String course;
    private String email;
 
    public Student() {}
 
    public Student(String name, int age, String course, String email) {
        this.name = name;
        this.age = age;
        this.course = course;
        this.email = email;
    }
 
    public Long getId() { return id; }
 
    public void setId(Long id) { this.id = id; }
 
    public String getName() { return name; }
 
    public void setName(String name) { this.name = name; }
 
    public int getAge() { return age; }
 
    public void setAge(int age) { this.age = age; }
 
    public String getCourse() { return course; }
 
    public void setCourse(String course) { this.course = course; }
 
    public String getEmail() { return email; }
 
    public void setEmail(String email) { this.email = email; }
}
 
