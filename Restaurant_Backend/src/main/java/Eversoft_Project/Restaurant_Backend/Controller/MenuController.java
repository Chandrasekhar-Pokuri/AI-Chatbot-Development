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
/*
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
*/
    // Delete menu item by ID
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteMenu(@PathVariable Long id) {
        menuService.deleteMenu(id);
        return ResponseEntity.ok("Menu item deleted successfully");
    }

    
    
    // Get menu items by specific fields
    @GetMapping("/itemName/{itemName}")
    public ResponseEntity<List<Menu>> getMenuByItemName(@PathVariable String itemName) {
        return ResponseEntity.ok(menuService.getMenuByItemName(itemName));
    }

    @GetMapping("/category/{category}")
    public ResponseEntity<List<Menu>> getMenuByCategory(@PathVariable String category) {
        return ResponseEntity.ok(menuService.getMenuByCategory(category));
    }

    @GetMapping("/vegetarian/{vegetarian}")
    public ResponseEntity<List<Menu>> getMenuByVegetarian(@PathVariable Boolean vegetarian) {
        return ResponseEntity.ok(menuService.getMenuByVegetarian(vegetarian));
    }

    @GetMapping("/nonVegetarian/{nonVegetarian}")
    public ResponseEntity<List<Menu>> getMenuByNonVegetarian(@PathVariable Boolean nonVegetarian) {
        return ResponseEntity.ok(menuService.getMenuByNonVegetarian(nonVegetarian));
    }

    @GetMapping("/vegan")
    public ResponseEntity<List<Menu>> getMenuByVegan() {
        return ResponseEntity.ok(menuService.getMenuByVegan(true)); // Fetch only vegan items
    }

    @GetMapping("/glutenFree/{glutenFree}")
    public ResponseEntity<List<Menu>> getMenuByGlutenFree(@PathVariable Boolean glutenFree) {
        return ResponseEntity.ok(menuService.getMenuByGlutenFree(glutenFree));
    }

    @GetMapping("/dairyFree")
    public ResponseEntity<List<Menu>> getMenuByDairyFree() {
        return ResponseEntity.ok(menuService.getMenuByDairyFree(true)); // Fetch only dairy-free items
    }

    @GetMapping("/spiceLevel/{spiceLevel}")
    public ResponseEntity<List<Menu>> getMenuBySpiceLevel(@PathVariable String spiceLevel) {
        return ResponseEntity.ok(menuService.getMenuBySpiceLevel(spiceLevel));
    }

    @GetMapping("/price/{price}")
    public ResponseEntity<List<Menu>> getMenuByPrice(@PathVariable Double price) {
        return ResponseEntity.ok(menuService.getMenuByPrice(price));
    }

    @GetMapping("/discount/{discount}")
    public ResponseEntity<List<Menu>> getMenuByDiscount(@PathVariable Double discount) {
        return ResponseEntity.ok(menuService.getMenuByDiscount(discount));
    }

    @GetMapping("/todaysSpecial/{todaysSpecial}")
    public ResponseEntity<List<Menu>> getMenuByTodaysSpecial(@PathVariable Boolean todaysSpecial) {
        return ResponseEntity.ok(menuService.getMenuByTodaysSpecial(todaysSpecial));
    }
}
