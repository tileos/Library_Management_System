package com.axis.librarymanagementsystem.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class TestEntity {

    @Id
    public int idNumber;
    public String name;
}
