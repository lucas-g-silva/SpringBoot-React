package com.example.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import com.example.backend.exception.ResourceNotFoundException;
import com.example.backend.model.Contact;
import com.example.backend.repository.ContactRepository;
import org.springframework.web.bind.annotation.*;


@RestController
public class ContactController {
    @Autowired
    private ContactRepository contactRepository;

    @GetMapping("/contacts")
    public List<Contact> getContacts() {
        return contactRepository.findAll();
    }

    @GetMapping("/contacts/{id}")
    public ResponseEntity<Contact> getContectbyId(@PathVariable long id){
        Contact contact = contactRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("There is no contact with the id: "+ id));
        return ResponseEntity.ok(contact);
    }

    @PostMapping("/contacts")
    public Contact postContact(@RequestBody Contact contact){
        return contactRepository.save(contact);
    }

    @PutMapping("/contacts/{id}")
    public ResponseEntity<Contact> putContectbyId(@PathVariable long id, @RequestBody Contact updateContact){
        Contact contact = contactRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("There is no contact with the id: "+ id));
        contact.setEmail(updateContact.getEmail());
        contact.setName(updateContact.getName());
        contact.setPhone_number(updateContact.getPhone_number());
        Contact contact2 = contactRepository.save(contact);
        return ResponseEntity.ok(contact2);
    }

    @DeleteMapping("/contacts")
    public void deleteContacts() {
        contactRepository.deleteAll();
    }

    @DeleteMapping("/contacts/{id}")
    public void deleteContectById(@PathVariable long id){
        Contact contact = contactRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("There is no contact with the id: "+ id));
        contactRepository.deleteById(id);
    }
}
