package Eversoft_Project.Restaurant_Backend.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import Eversoft_Project.Restaurant_Backend.Model.Menu;
import Eversoft_Project.Restaurant_Backend.Repository.MenuRepository;

import java.util.List;
import java.util.Optional;

@Service
public class MenuService {

    @Autowired
    private MenuRepository menuRepository;

    // Save a new menu item
    public Menu saveMenu(Menu menu) {
        return menuRepository.save(menu);
    }

    // Get all menu items
    public List<Menu> getAllMenus() {
        return menuRepository.findAll();
    }

    // Get menu item by ID
    public Optional<Menu> getMenuById(Long id) {
        return menuRepository.findById(id);
    }

    // Delete menu item by ID
    public void deleteMenu(Long id) {
        menuRepository.deleteById(id);
    }
    
}

   
