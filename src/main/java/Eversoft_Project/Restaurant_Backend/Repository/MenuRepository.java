package Eversoft_Project.Restaurant_Backend.Repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import Eversoft_Project.Restaurant_Backend.Model.Menu;


@Repository
public interface MenuRepository extends JpaRepository<Menu, Long> {
	
	

    
    
   }
