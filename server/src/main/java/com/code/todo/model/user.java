package com.code.todo.model;

import org.springframework.stereotype.Component;

@Component
public class user {
    private String u_id;
    public user(){}
    public user(String _uid)
    {
        this.u_id=_uid;
    }
    public String getUserId(){
        return this.u_id;
    }
}
