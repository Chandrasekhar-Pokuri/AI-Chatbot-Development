package com.restaurant.controller;

import com.restaurant.dto.MenuDTO;
import com.restaurant.service.UnifiedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class UnifiedController {
    @Autowired
    private UnifiedService unifiedService;

    @GetMapping("/menu")
    public ResponseEntity<List<MenuDTO>> getMenu() {
        return ResponseEntity.ok(unifiedService.fetchMenu());
    }
}
