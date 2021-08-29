package com.code.todo.service;

import java.util.*;

import com.code.todo.model.todo;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.QueryDocumentSnapshot;
import com.google.cloud.firestore.QuerySnapshot;
import com.google.firebase.cloud.FirestoreClient;
import org.springframework.stereotype.Service;

@Service
public class firebaseService {
    public List<todo> getTodos()
    {
        try{
        Firestore dbFirebase=FirestoreClient.getFirestore();
        ApiFuture<QuerySnapshot> future =dbFirebase.collection("todo-list").get();
        List<QueryDocumentSnapshot> documents = future.get().getDocuments();
        List<todo> todos=new ArrayList<todo>();

        for (DocumentSnapshot document : documents) {
            todos.add(new todo(document.getId(),document.getString("description")));
          }
          return todos;
        }
        catch(Exception e)
        {
            return Collections.emptyList();
        }
        
    }

    public void deleteTodo(String id)
    {
        Firestore dbFirebase=FirestoreClient.getFirestore();
        dbFirebase.collection("todo-list").document(id).delete();
    }

    public void addTodos(todo todoBody)
    {
        Firestore dbFirebase=FirestoreClient.getFirestore();
        Map<String,String> data=new HashMap<>();
        data.put("description", todoBody.getDescription());
        dbFirebase.collection("todo-list").add(data);
    }

}
