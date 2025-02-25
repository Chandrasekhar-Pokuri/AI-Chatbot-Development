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
    public Long getItemNo() {
		return itemNo;
	}
	public void setItemNo(Long itemNo) {
		this.itemNo = itemNo;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Boolean getVegetarian() {
		return vegetarian;
	}
	public void setVegetarian(Boolean vegetarian) {
		this.vegetarian = vegetarian;
	}
	public Boolean getNonVegetarian() {
		return nonVegetarian;
	}
	public void setNonVegetarian(Boolean nonVegetarian) {
		this.nonVegetarian = nonVegetarian;
	}
	public String getMeatType() {
		return meatType;
	}
	public void setMeatType(String meatType) {
		this.meatType = meatType;
	}
	public Boolean getVegan() {
		return vegan;
	}
	public void setVegan(Boolean vegan) {
		this.vegan = vegan;
	}
	public Boolean getGlutenFree() {
		return glutenFree;
	}
	public void setGlutenFree(Boolean glutenFree) {
		this.glutenFree = glutenFree;
	}
	public Boolean getDairyFree() {
		return dairyFree;
	}
	public void setDairyFree(Boolean dairyFree) {
		this.dairyFree = dairyFree;
	}
	public String getSpiceLevel() {
		return spiceLevel;
	}
	public void setSpiceLevel(String spiceLevel) {
		this.spiceLevel = spiceLevel;
	}
	public Double getPrice() {
		return price;
	}
	public void setPrice(Double price) {
		this.price = price;
	}
	public Double getDiscount() {
		return discount;
	}
	public void setDiscount(Double discount) {
		this.discount = discount;
	}
	public Boolean getTodaysSpecial() {
		return todaysSpecial;
	}
	public void setTodaysSpecial(Boolean todaysSpecial) {
		this.todaysSpecial = todaysSpecial;
	}
	private Boolean glutenFree;
    private Boolean dairyFree;
    private String spiceLevel;

    private Double price;
    private Double discount;
    private Boolean todaysSpecial;
	public String getItemName() {
		return itemName;
	}
	public void setItemName(String itemName) {
		this.itemName = itemName;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getIngredients() {
		return ingredients;
	}
	public void setIngredients(String ingredients) {
		this.ingredients = ingredients;
	}
}

