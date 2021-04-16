package com.example.ebook.model.exceptions;

public class AuthorNotFound extends RuntimeException {

    public AuthorNotFound() {
        super("Invalid author");
    }

}
