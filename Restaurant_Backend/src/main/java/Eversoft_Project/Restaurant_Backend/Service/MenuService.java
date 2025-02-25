





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

    // Methods to get Menu items by specific fields
    public List<Menu> getMenuByItemName(String itemName) {
        return menuRepository.findByItemName(itemName);
    }

    public List<Menu> getMenuByCategory(String category) {
        return menuRepository.findByCategory(category);
    }

    public List<Menu> getMenuByVegetarian(Boolean vegetarian) {
        return menuRepository.findByVegetarian(vegetarian);
    }
    

    public List<Menu> getMenuByNonVegetarian(Boolean nonVegetarian) {
        return menuRepository.findByNonVegetarian(nonVegetarian);
    }

    public List<Menu> getMenuByVegan(Boolean vegan) {
        return menuRepository.findByVegan(vegan);
    }

    public List<Menu> getMenuByGlutenFree(Boolean glutenFree) {
        return menuRepository.findByGlutenFree(glutenFree);
    }

    public List<Menu> getMenuByDairyFree(Boolean dairyFree) {
        return menuRepository.findByDairyFree(dairyFree);
    }

    public List<Menu> getMenuBySpiceLevel(String spiceLevel) {
        return menuRepository.findBySpiceLevel(spiceLevel);
    }

    public List<Menu> getMenuByPrice(Double price) {
        return menuRepository.findByPrice(price);
    }

    public List<Menu> getMenuByDiscount(Double discount) {
        return menuRepository.findByDiscount(discount);
    }

    public List<Menu> getMenuByTodaysSpecial(Boolean todaysSpecial) {
        return menuRepository.findByTodaysSpecial(todaysSpecial);
    }
}

