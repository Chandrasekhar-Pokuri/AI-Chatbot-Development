package Eversoft_Project.Restaurant_Backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import Eversoft_Project.Restaurant_Backend.Model.Menu;
import java.util.List;

@Repository
public interface MenuRepository extends JpaRepository<Menu, Long> {
    // Methods to find Menu items by specific fields (if needed)
    List<Menu> findByItemName(String itemName);
    List<Menu> findByCategory(String category);
    List<Menu> findByVegetarian(Boolean vegetarian);
    List<Menu> findByNonVegetarian(Boolean nonVegetarian);
    List<Menu> findByVegan(Boolean vegan);
    List<Menu> findByGlutenFree(Boolean glutenFree);
    List<Menu> findByDairyFree(Boolean dairyFree);
    List<Menu> findBySpiceLevel(String spiceLevel);
    List<Menu> findByPrice(Double price);
    List<Menu> findByDiscount(Double discount);
    List<Menu> findByTodaysSpecial(Boolean todaysSpecial);
   }