package com.desafio.desafioback.exception;


import java.util.Date;

public class Erros {

    private String message;

    private Date timestamp;
    
    private String details;


    public Erros(Date timestamp, String message, String details) {
        super();
        this.timestamp = timestamp;
        this.message = message;
        this.details = details;
    }

    public Date getTimestamp() {
        return timestamp;
    }

    public String getMessage() {
        return message;
   }

   public String getDetails() {
        return details;
   }
    
}
