package Eversoft_Project.Restaurant_Backend.Model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "menu_table")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Menu {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long itemNo;

    private String itemName;
    private String category;
    private String description;
    private String ingredients;

    private Boolean vegetarian;
    private Boolean nonVegetarian;
    private String meatType;
    private Boolean vegan;
    
}

