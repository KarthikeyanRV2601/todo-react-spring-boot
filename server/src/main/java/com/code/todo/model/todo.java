package com.code.todo.model;

import org.springframework.stereotype.Component;

@Component
public class todo {
    private String id;
    private String description;
    
    public todo(){}
    public todo(String id,String description)
    {
        this.id=id;
        this.description=description;
    }
    public String getId() {
        return this.id;
    }
  
    public String getDescription() {
        return this.description;
    }
    

    
}

