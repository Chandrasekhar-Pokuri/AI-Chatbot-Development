package com.restaurant.service;

import com.restaurant.repository.MenuItemRepository;
import com.restaurant.dto.MenuDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UnifiedService {
    @Autowired 
    private MenuItemRepository menuItemRepository;

    public List<MenuDTO> fetchMenu() {
        return menuItemRepository.findAll()
                .stream()
                .map(item -> new MenuDTO(item.getName(), item.getPrice()))
                .collect(Collectors.toList());
    }
}
