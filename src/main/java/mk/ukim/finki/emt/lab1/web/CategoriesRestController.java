package mk.ukim.finki.emt.lab1.web;

import mk.ukim.finki.emt.lab1.model.enumerations.Category;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class CategoriesRestController {

    @GetMapping("/categories")
    public ResponseEntity<Category[]> getAllCategories() {
        Category[] categories = Category.values();
        return ResponseEntity.ok(categories);
    }
}