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

    public String userSignup(String _uid){
        try{
            // System.out.println(_user.getUserId());
            Firestore dbFirebase=FirestoreClient.getFirestore();
            Map<String,String> data=new HashMap<>();
            data.put("description", "Welcome to todo!!");
            ApiFuture<DocumentReference> reference= dbFirebase.collection(_uid.substring(0,_uid.length()-1)).add(data);
            return reference.get().getId();
        }
        catch(Exception e)
        {
            return e.toString();
        }
    }

    public List<todo> getTodos(String collections_id)
    {
        try{
        // System.out.pr
        Firestore dbFirebase=FirestoreClient.getFirestore();
        ApiFuture<QuerySnapshot> future =dbFirebase.collection(collections_id).get();
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

    public void deleteTodo(String collections_id,String id)
    {
        Firestore dbFirebase=FirestoreClient.getFirestore();
        dbFirebase.collection(collections_id).document(id).delete();
    }

    public String addTodos(String collections_id,todo todoBody)
    {
        try{
            Firestore dbFirebase=FirestoreClient.getFirestore();
            Map<String,String> data=new HashMap<>();
            data.put("description", todoBody.getDescription());
            ApiFuture<DocumentReference> refernce= dbFirebase.collection(collections_id).add(data);
            return refernce.get().getId();
        }
        catch(Exception e)
        {
            return e.toString();
        }
    }


}
