export const Screens = {
    login: 'Login',
    categories:'Categories'
}

export const Colors = {
    primary: '#096B68',
    accent: '#FFFBDE',
    secondary: '#90D1CA'
}


export const Categories = [
    { id: 'c1', title: 'Indian', color: '#FF6F61' },
    { id: 'c2', title: 'Chinese', color: '#FFD166' },
    { id: 'c3', title: 'Italian', color: '#06D6A0' },
    { id: 'c4', title: 'Mexican', color: '#EF476F' },
    { id: 'c5', title: 'Thai', color: '#118AB2' },
    { id: 'c6', title: 'Japanese', color: '#073B4C' },
    { id: 'c7', title: 'American', color: '#F4A261' },
    { id: 'c8', title: 'French', color: '#2A9D8F' },
    { id: 'c9', title: 'Mediterranean', color: '#E76F51' },
    { id: 'c10', title: 'Middle Eastern', color: '#8338EC' }
]


export const meals = [
    {
        id: 'm1',
        categoryIds: ['c1'],
        title: 'Butter Chicken',
        affordability: 'affordable',
        complexity: 'medium',
        imageUrl: 'https://example.com/images/butter_chicken.jpg',
        duration: 45,
        ingredients: [
            '500g chicken',
            '2 tbsp butter',
            '1 cup tomato puree',
            '1/2 cup cream',
            'Spices'
        ],
        steps: [
            'Marinate chicken with spices.',
            'Cook chicken until done.',
            'Prepare tomato-based sauce.',
            'Combine chicken with sauce and simmer.',
            'Add cream and cook for 5 minutes.'
        ],
        isGlutenFree: true,
        isVegan: false,
        isVegetarian: false,
        isLactoseFree: false
    },
    {
        id: 'm2',
        categoryIds: ['c2'],
        title: 'Kung Pao Chicken',
        affordability: 'affordable',
        complexity: 'medium',
        imageUrl: 'https://example.com/images/kung_pao_chicken.jpg',
        duration: 30,
        ingredients: [
            '500g chicken',
            'Bell peppers',
            'Peanuts',
            'Chili peppers',
            'Soy sauce'
        ],
        steps: [
            'Marinate chicken.',
            'Stir-fry vegetables and peanuts.',
            'Add chicken and cook thoroughly.',
            'Add sauce and simmer for 5 minutes.'
        ],
        isGlutenFree: false,
        isVegan: false,
        isVegetarian: false,
        isLactoseFree: true
    },
    {
        id: 'm3',
        categoryIds: ['c3'],
        title: 'Margherita Pizza',
        affordability: 'affordable',
        complexity: 'simple',
        imageUrl: 'https://example.com/images/margherita_pizza.jpg',
        duration: 25,
        ingredients: [
            'Pizza dough',
            'Tomato sauce',
            'Mozzarella cheese',
            'Fresh basil'
        ],
        steps: [
            'Preheat oven to 220°C.',
            'Spread tomato sauce on dough.',
            'Add mozzarella and basil.',
            'Bake for 15 minutes.'
        ],
        isGlutenFree: false,
        isVegan: false,
        isVegetarian: true,
        isLactoseFree: false
    },
    {
        id: 'm4',
        categoryIds: ['c4'],
        title: 'Tacos al Pastor',
        affordability: 'affordable',
        complexity: 'medium',
        imageUrl: 'https://example.com/images/tacos_al_pastor.jpg',
        duration: 35,
        ingredients: [
            '500g pork',
            'Pineapple',
            'Corn tortillas',
            'Onion',
            'Cilantro'
        ],
        steps: [
            'Marinate pork with spices.',
            'Grill pork and pineapple.',
            'Assemble tacos with meat, pineapple, onion, and cilantro.'
        ],
        isGlutenFree: true,
        isVegan: false,
        isVegetarian: false,
        isLactoseFree: true
    },
    {
        id: 'm5',
        categoryIds: ['c5'],
        title: 'Pad Thai',
        affordability: 'affordable',
        complexity: 'medium',
        imageUrl: 'https://example.com/images/pad_thai.jpg',
        duration: 30,
        ingredients: [
            'Rice noodles',
            'Shrimp or tofu',
            'Bean sprouts',
            'Peanuts',
            'Pad Thai sauce'
        ],
        steps: [
            'Soak rice noodles.',
            'Stir-fry protein and vegetables.',
            'Add noodles and sauce, cook thoroughly.',
            'Garnish with peanuts.'
        ],
        isGlutenFree: true,
        isVegan: false,
        isVegetarian: false,
        isLactoseFree: true
    },
    {
        id: 'm6',
        categoryIds: ['c6'],
        title: 'Sushi Rolls',
        affordability: 'luxurious',
        complexity: 'hard',
        imageUrl: 'https://example.com/images/sushi_rolls.jpg',
        duration: 60,
        ingredients: [
            'Sushi rice',
            'Nori sheets',
            'Fish or vegetables',
            'Soy sauce',
            'Wasabi'
        ],
        steps: [
            'Prepare sushi rice.',
            'Place nori on mat, add rice and fillings.',
            'Roll tightly and slice.',
            'Serve with soy sauce and wasabi.'
        ],
        isGlutenFree: false,
        isVegan: false,
        isVegetarian: false,
        isLactoseFree: true
    },
    {
        id: 'm7',
        categoryIds: ['c7'],
        title: 'Cheeseburger',
        affordability: 'affordable',
        complexity: 'simple',
        imageUrl: 'https://example.com/images/cheeseburger.jpg',
        duration: 20,
        ingredients: [
            'Beef patty',
            'Burger bun',
            'Cheddar cheese',
            'Lettuce',
            'Tomato'
        ],
        steps: [
            'Grill beef patty.',
            'Assemble burger with bun, patty, cheese, and vegetables.',
            'Serve hot.'
        ],
        isGlutenFree: false,
        isVegan: false,
        isVegetarian: false,
        isLactoseFree: false
    },
    {
        id: 'm8',
        categoryIds: ['c8'],
        title: 'Coq au Vin',
        affordability: 'luxurious',
        complexity: 'hard',
        imageUrl: 'https://example.com/images/coq_au_vin.jpg',
        duration: 120,
        ingredients: [
            'Chicken',
            'Red wine',
            'Mushrooms',
            'Onions',
            'Bacon'
        ],
        steps: [
            'Marinate chicken in wine.',
            'Sear chicken and cook bacon.',
            'Add vegetables and simmer with wine.',
            'Cook until chicken is tender.'
        ],
        isGlutenFree: true,
        isVegan: false,
        isVegetarian: false,
        isLactoseFree: true
    },
    {
        id: 'm9',
        categoryIds: ['c9'],
        title: 'Greek Salad',
        affordability: 'affordable',
        complexity: 'simple',
        imageUrl: 'https://example.com/images/greek_salad.jpg',
        duration: 15,
        ingredients: [
            'Tomatoes',
            'Cucumber',
            'Feta cheese',
            'Olives',
            'Olive oil'
        ],
        steps: [
            'Chop vegetables.',
            'Combine in a bowl with feta and olives.',
            'Drizzle with olive oil and toss.'
        ],
        isGlutenFree: true,
        isVegan: false,
        isVegetarian: true,
        isLactoseFree: false
    },
    {
        id: 'm10',
        categoryIds: ['c10'],
        title: 'Falafel Wrap',
        affordability: 'affordable',
        complexity: 'medium',
        imageUrl: 'https://example.com/images/falafel_wrap.jpg',
        duration: 40,
        ingredients: [
            'Chickpeas',
            'Garlic',
            'Parsley',
            'Spices',
            'Pita bread'
        ],
        steps: [
            'Blend chickpeas with herbs and spices.',
            'Form balls and deep fry.',
            'Assemble wrap with falafel and vegetables.'
        ],
        isGlutenFree: false,
        isVegan: true,
        isVegetarian: true,
        isLactoseFree: true
    }
]
