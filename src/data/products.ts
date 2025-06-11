export interface IProduct {
  id: number;
  title: string;
  imageURL: string;
  author: string;
  authorImage: any;
  difficulty: string;
  calories: number;
  ingredients: string[];
  nutrition: string[];
  cooking: string[];
  dietaryRestriction: string, 
}

// Dummy data array for multiple foods
const foodItems: IProduct[]= [
  {
    id: 1,
    title: "Smash Burgers with Baconaisse",
    imageURL:
      "https://i0.wp.com/grillnationbbq.com/wp-content/uploads/2024/08/IMG_1635.webp?fit=3024%2C4032&ssl=1",
    author: "Cameron Sentieri",
    authorImage: "cam.jpg",
    difficulty: "Hard",
    calories: 600,
    ingredients: ["Ground Beef", "Bacon", "Mayonnaise", "Cheddar Cheese", "Burger Buns", "Pickles"],
    nutrition: ["Fat: 38g", "Protein: 32g", "Carbs: 25g"],
    cooking: ["Cook bacon until crispy", "Smash beef patties on hot griddle", "Top with cheddar", "Spread bacon mayo on buns and assemble"],
    dietaryRestriction: "Carnivore",
  },
  {
    id: 2,
    title: "Creamy Shrimp Fettuccine",
    imageURL:
      "https://mybizzykitchen.com/wp-content/uploads/2024/06/creamy-shrimp-pasta-1.jpg",
      author: "Hiruy Worku",
      authorImage: "ru.jpg",
      difficulty: "Medium",
      calories: 500,
      ingredients: ["Fettuccine Pasta", "Shrimp", "Heavy Cream", "Parmesan Cheese", "Garlic", "Butter"],
      nutrition: ["Fat: 28g", "Protein: 30g", "Carbs: 40g"],
      cooking: ["Cook pasta until al dente", "Sauté shrimp in butter", "Prepare creamy sauce", "Combine pasta and sauce with shrimp"],
      dietaryRestriction: "Peanut Free",
  },
  {
    id: 3,
    title: "Marinated Chicken",
    imageURL:
      "https://happilyunprocessed.com/wp-content/uploads/2023/03/Marinated-Air-Fryer-Chicken-Thighs-on-a-cutting-board-with-sliced-lemons.jpg",
    author: "Miles Fike",
    authorImage: "miles.jpg",
    difficulty: "Easy",
    calories: 450,
    ingredients: ["Chicken Thighs", "Olive Oil", "Garlic", "Lemon Juice", "Paprika", "Rosemary"],
    nutrition: ["Fat: 18g", "Protein: 28g", "Carbs: 2g"],
    cooking: ["Marinate chicken overnight", "Grill or bake at 400°F for 25 minutes", "Serve with lemon wedges"],
    dietaryRestriction: "Halal",
  },
  {
    id: 4,
    title: "Penne alla Vodka",
    imageURL:
      "https://images.101cookbooks.com/penne-alla-vodka-1.jpg?w=620&auto=format",
  
    author: "Hiruy Worku",
    authorImage: "ru.jpg",
    difficulty: "Medium",
    calories: 480,
    ingredients: ["Penne Pasta", "Vodka", "Tomato Paste", "Heavy Cream", "Parmesan Cheese", "Garlic"],
    nutrition: ["Fat: 20g", "Protein: 15g", "Carbs: 45g"],
    cooking: ["Cook pasta until al dente", "Simmer vodka with tomato paste", "Stir in cream and pasta", "Top with parmesan"],
    dietaryRestriction: "Vegetarian",
  },
  {
    id: 5,
    title: "Fresh Beef Tacos",
    imageURL:
      "https://wholeandheavenlyoven.com/wp-content/uploads/2016/02/Chipotle-Pulled-Beef-Tacos-with-Greek-Salsa-Avocado-Crema5.jpg",
    author: "Cameron Sentieri",
    authorImage: "cam.jpg",
    difficulty: "Easy",
    calories: 420,
    ingredients: ["Ground Beef", "Taco Shells", "Cheddar Cheese", "Lettuce", "Tomatoes", "Sour Cream"],
    nutrition: ["Fat: 18g", "Protein: 24g", "Carbs: 22g"],
    cooking: ["Cook ground beef with seasoning", "Warm taco shells", "Assemble with toppings"],
    dietaryRestriction: "Carnivore"
  },
  {
    id: 6,
    title: "Surf & Turf Boil Feast",
    imageURL:
      "https://curtgotcrabs.com/cdn/shop/products/PhotoGrid_1611753447035_1080x1080.jpg?v=1611753627",
      author: "Miles Fike",
      authorImage: "miles.jpg",
      difficulty: "Easy",
      calories: 420,
      ingredients: ["Shrimp", "Crab Legs", "Corn on the Cob", "Red Potatoes", "Sausage", "Old Bay Seasoning"],
      nutrition: ["Fat: 22g", "Protein: 32g", "Carbs: 28g"],
      cooking: ["Boil potatoes and corn", "Add sausage, crab, and shrimp", "Season heavily with Old Bay"],
      dietaryRestriction: "Gluten Free",

  },
  {
    id: 7,
    title: "Ultimate Lasagna Bolognese",
    imageURL:
      "https://www.oliveandmango.com/images/uploads/2020_12_20_ultimate_lasagna_bolognese_3.jpg",
      author: "Hiruy Worku",
      authorImage: "ru.jpg",
      difficulty: "Easy",
      calories: 420,
      ingredients: ["Lasagna Noodles", "Ground Beef", "Tomato Sauce", "Ricotta Cheese", "Mozzarella", "Parmesan"],
    nutrition: ["Fat: 28g", "Protein: 26g", "Carbs: 35g"],
    cooking: ["Cook beef with sauce", "Layer noodles, cheese, and meat", "Bake at 375°F for 45 minutes"],
    dietaryRestriction: "Dairy Free",
  },
  {
    id: 8,
    title: "Délicieuse Poêlée de Steak",
    imageURL:
      "https://i.pinimg.com/736x/39/b0/48/39b048db970c10a54e1c7041a00ccf9b.jpg",
    author: "Cameron Sentieri",
    authorImage: "cam.jpg",
    difficulty: "Easy",
    calories: 420,
    ingredients: ["Ribeye Steak", "Butter", "Garlic", "Rosemary", "Salt", "Pepper"],
    nutrition: ["Fat: 35g", "Protein: 40g", "Carbs: 0g"],
    cooking: ["Sear steak in hot pan", "Add butter, garlic, rosemary", "Baste and cook to preferred doneness"],
    dietaryRestriction: "Kosher"
  },
  {
    id: 9,
    title: "Spicy Thai Basil Chicken",
    imageURL: "https://whisperofyum.com/wp-content/uploads/2020/12/thai-basil-chicken-1.jpg",
    author: "Miles Fike",
    authorImage: "miles.jpg",
    difficulty: "Medium",
    calories: 480,
    ingredients: ["Ground Chicken", "Thai Basil", "Chili Peppers", "Garlic", "Soy Sauce", "Rice"],
    nutrition: ["Fat: 18g", "Protein: 28g", "Carbs: 32g"],
    cooking: ["Cook chicken", "Add sauces", "Mix in basil", "Serve with rice"],
    dietaryRestriction: "Halal"
  },
  {
    id: 10,
    title: "Vegan Buddha Bowl",
    imageURL: "https://www.crazyvegankitchen.com/wp-content/uploads/2023/11/buddha-bowl-recipe.jpg",
    author: "Hiruy Worku",
    authorImage: "ru.jpg",
    difficulty: "Easy",
    calories: 410,
    ingredients: ["Quinoa", "Sweet Potatoes", "Chickpeas", "Avocado", "Spinach", "Tahini Sauce"],
    nutrition: ["Fat: 14g", "Protein: 19g", "Carbs: 35g"],
    cooking: ["Roast veggies", "Cook quinoa", "Assemble bowl"],
    dietaryRestriction: "Vegan"
  },
  {
    id: 11,
    title: "Classic Margherita Pizza",
    imageURL: "https://ooni.com/cdn/shop/articles/20220211142347-margherita-9920_ba86be55-674e-4f35-8094-2067ab41a671.jpg?v=1737104576&width=2048",
    author: "Cameron Sentieri",
    authorImage: "cam.jpg",
    difficulty: "Medium",
    calories: 550,
    ingredients: ["Pizza Dough", "Tomato Sauce", "Fresh Mozzarella", "Basil", "Olive Oil"],
    nutrition: ["Fat: 22g", "Protein: 20g", "Carbs: 48g"],
    cooking: ["Preheat oven", "Assemble pizza", "Bake 12 minutes"],
    dietaryRestriction: "Vegetarian"
  },
  {
    id: 12,
    title: "Chicken Alfredo Pasta",
    imageURL: "https://gimmedelicious.com/wp-content/uploads/2024/10/Skinny-Chicken-Broccoli-Alfredo.jpg",
    author: "Miles Fike",
    authorImage: "miles.jpg",
    difficulty: "Medium",
    calories: 600,
    ingredients: ["Fettuccine", "Chicken Breast", "Heavy Cream", "Parmesan", "Garlic", "Butter"],
    nutrition: ["Fat: 30g", "Protein: 36g", "Carbs: 40g"],
    cooking: ["Cook pasta", "Sauté chicken", "Make Alfredo sauce"],
    dietaryRestriction: "Halal"
  },
  {
    id: 13,
    title: "Peanut-Free Pad Thai",
    imageURL: "https://cdn-agnba.nitrocdn.com/vzFVMymlBXPIVZhqpHmTvBbiDZvLfPyU/assets/images/optimized/rev-bc8a0e8/easyrealfood.com/wp-content/uploads/2021/03/IMG_5977_jpg-768x1024.jpg",
    author: "Hiruy Worku",
    authorImage: "ru.jpg",
    difficulty: "Hard",
    calories: 520,
    ingredients: ["Rice Noodles", "Shrimp", "Eggs", "Bean Sprouts", "Pad Thai Sauce (no peanuts)"],
    nutrition: ["Fat: 12g", "Protein: 24g", "Carbs: 45g"],
    cooking: ["Soak noodles", "Stir fry everything", "Serve hot"],
    dietaryRestriction: "Peanut Free"
  },
  {
    id: 14,
    title: "Mediterranean Quinoa Salad",
    imageURL: "https://thealmondeater.com/wp-content/uploads/2022/06/mediterranean-quinoa-bowl_web-4.jpg.webp",
    author: "Cameron Sentieri",
    authorImage: "cam.jpg",
    difficulty: "Easy",
    calories: 350,
    ingredients: ["Quinoa", "Cucumber", "Tomatoes", "Feta Cheese", "Olives", "Lemon Dressing"],
    nutrition: ["Fat: 15g", "Protein: 12g", "Carbs: 30g"],
    cooking: ["Cook quinoa", "Chop veggies", "Mix and dress"],
    dietaryRestriction: "Gluten Free"
  },
  {
    id: 15,
    title: "Grilled Lamb Chops",
    imageURL: "https://www.dinneratthezoo.com/wp-content/uploads/2021/03/grilled-lamb-chops-final-2.jpg",
    author: "Miles Fike",
    authorImage: "miles.jpg",
    difficulty: "Hard",
    calories: 620,
    ingredients: ["Lamb Chops", "Rosemary", "Garlic", "Olive Oil", "Salt", "Pepper"],
    nutrition: ["Fat: 35g", "Protein: 40g", "Carbs: 2g"],
    cooking: ["Marinate lamb", "Grill 4-5 mins per side"],
    dietaryRestriction: "Kosher"
  },
  {
    id: 16,
    title: "Chocolate Lava Cake",
    imageURL: "https://www.melskitchencafe.com/wp-content/uploads/2023/01/updated-lava-cakes8.webp",
    author: "Cameron Sentieri",
    authorImage: "cam.jpg",
    difficulty: "Medium",
    calories: 450,
    ingredients: ["Dark Chocolate", "Butter", "Eggs", "Sugar", "Flour"],
    nutrition: ["Fat: 28g", "Protein: 6g", "Carbs: 42g"],
    cooking: ["Melt chocolate & butter", "Mix batter", "Bake short time"],
    dietaryRestriction: "Vegetarian"
  },
  
];

export default foodItems;
