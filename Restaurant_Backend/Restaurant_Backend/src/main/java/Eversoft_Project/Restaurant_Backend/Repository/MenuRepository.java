package Eversoft_Project.Restaurant_Backend.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import Eversoft_Project.Restaurant_Backend.Model.Menu;


@Repository
public interface MenuRepository extends JpaRepository<Menu, Long> {
	
	
	 @Query("SELECT m FROM Menu m WHERE m.category = ?1")
	    List<Menu> findByCategory(String category);
    
    
   }
