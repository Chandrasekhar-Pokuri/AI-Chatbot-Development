package Eversoft_Project.Restaurant_Backend.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import Eversoft_Project.Restaurant_Backend.Model.Menu;
import Eversoft_Project.Restaurant_Backend.Service.MenuService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/menu")
public class MenuController {

    @Autowired
    private MenuService menuService;

    // Insert a new menu item
    @PostMapping("/add")
    public ResponseEntity<Menu> addMenu(@RequestBody Menu menu) {
        return ResponseEntity.ok(menuService.saveMenu(menu));
    }

    // Get all menu items
    @GetMapping("/all")
    public ResponseEntity<List<Menu>> getAllMenus() {
        return ResponseEntity.ok(menuService.getAllMenus());
    }

    // Get menu item by ID
    @GetMapping("/{id}")
    public ResponseEntity<Optional<Menu>> getMenuById(@PathVariable Long id) {
        return ResponseEntity.ok(menuService.getMenuById(id));
    }
    // Update menu item by ID
    @PutMapping("/update/{id}")
    public ResponseEntity<Menu> updateMenu(@PathVariable Long id, @RequestBody Menu menu) {
        Optional<Menu> existingMenu = menuService.getMenuById(id);
        if (existingMenu.isPresent()) {
            menu.setItemNo(id);
            return ResponseEntity.ok(menuService.saveMenu(menu));
        }
        return ResponseEntity.notFound().build();
    }

    // Delete menu item by ID
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteMenu(@PathVariable Long id) {
        menuService.deleteMenu(id);
        return ResponseEntity.ok("Menu item deleted successfully");
    }
    
    
    @GetMapping("/get/category/{category}")
    public List<Menu> getMenuByCategory(@PathVariable String category) {
        return menuService.getMenuByCategory(category);
    }

    
    
    
}







