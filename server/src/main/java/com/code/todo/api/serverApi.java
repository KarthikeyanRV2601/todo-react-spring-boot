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

    
    @GetMapping("/get-todos")
    public List<todo> getTodos()
    {
        List<todo> todos=new ArrayList<todo>();
        todos=serviceInstance.getTodos();
        return todos;
    }

    @DeleteMapping("/delete-todo-by-id/{id}")
    public void deleteTodo(@PathVariable("id") String id)
    {
        serviceInstance.deleteTodo(id);
    }
    
    @PostMapping("/add-todo")
    public void addTodo(@RequestBody todo todoData)
    {
        serviceInstance.addTodos(todoData);
    }

}
