package com.code.todo.api;

import com.code.todo.service.firebaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

import com.code.todo.model.todo;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class serverApi {
    @Autowired firebaseService serviceInstance;

    
    @GetMapping("/get-todos/{collections_id}")
    public List<todo> getTodos(@PathVariable("collections_id") String collections_id)
    {
        List<todo> todos=new ArrayList<todo>();
        todos=serviceInstance.getTodos(collections_id);
        return todos;
    }

    @DeleteMapping("/delete-todo-by-id/{collections_id}/{id}")
    public void deleteTodo(@PathVariable("collections_id") String collections_id,@PathVariable("id") String id)
    {
        serviceInstance.deleteTodo(collections_id,id);
    }
    
    @PostMapping("/add-todo/{id}")
    public String addTodo(@PathVariable("id") String id,@RequestBody todo todoData)
    {
        return serviceInstance.addTodos(id,todoData);
    }

    @PostMapping("/usersignup")
    public String userSignup(@RequestBody String _uid)
    {
        return serviceInstance.userSignup(_uid);
    }
}
