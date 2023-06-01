package com.axis.librarymanagementsystem.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "user")
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @JsonIgnore
    public int userID;
    @Column(name = "first_name")
    public String firstName;
    @Column(name = "last_name")
    public String lastName;

    @Column(name = "email")
    public String email;
    @Column(name = "password")
    public String password;

    @Column(name="role")
    public String role;
    
    public AccountStatus accountStatus;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    @JsonIgnore
    public Set<Borrowing> borrowingSet;
    @Enumerated(EnumType.STRING)
    @Column(name = "account_status")
    public AccountStatus getAccountStatus() {
        return accountStatus;
    }
    public void setAccountStatus(AccountStatus accountStatus) {
        this.accountStatus= accountStatus;
    }


}
