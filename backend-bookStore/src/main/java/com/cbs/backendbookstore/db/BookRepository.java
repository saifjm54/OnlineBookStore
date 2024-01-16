package com.cbs.backendbookstore.db;

import com.cbs.backendbookstore.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book,Long> {
}
