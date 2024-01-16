package com.cbs.backendbookstore.db;

import com.cbs.backendbookstore.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
