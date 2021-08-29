package com.code.todo.service;
import java.io.FileInputStream;
import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import javax.annotation.PostConstruct;

import org.springframework.stereotype.Service;

@Service
public class firebaseInitialize{

    @PostConstruct
    public void initialize(){
        try{
            FileInputStream serviceAccount =
            new FileInputStream("./server/todo-spring-react-firebase-adminsdk-6aw7k-80f3545676.json");
            FirebaseOptions options = new FirebaseOptions.Builder()
            .setCredentials(GoogleCredentials.fromStream(serviceAccount))
            .build();
    
            FirebaseApp.initializeApp(options);

        }
        catch(Exception e){
            e.printStackTrace();
        }
    }

}
