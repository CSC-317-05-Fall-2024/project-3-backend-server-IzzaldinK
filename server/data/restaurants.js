// Fill this in
let restaurantData = [
    {
        "id": 0,
        "name": "Reunion Kitchen",
        "phone": "(714) 283-1062",
        "address": "5775 E Santa Ana Canyon Rd, Anaheim, California",
        "photo": "/images/reunion Kitchen.jpg"
    },
    {
        "id": 1,
        "name": "Craft by Smoke and Fire",
        "phone": "(714) 603-7194",
        "address": "195 W Center St Promenade, Anaheim, California",
        "photo": "/images/Craft by Smoke and Fire.jpg"
    },
    {
        "id": 2,
        "name": "MasalaCraft",
        "phone": "(714) 406-4314",
        "address": "575 W Chapman Ave, Anaheim, California",
        "photo": "/images/masalacraft.jpg"
    },
    {
        "id": 3,
        "name": "Anaheim White House",
        "phone": "(714) 772-1381",
        "address": "887 S Anaheim Blvd, Anaheim, California",
        "photo": "/images/whitehouse.jpg"
    },
    {
        "id": 4,
        "name": "Luna Grill",
        "phone": "(714) 922-6985",
        "address": "121 E Katella Ave Suite 10, Anaheim, California",
        "photo": "/images/LunaGrill.jpg"
    },
    {
        "id": 5,
        "name": "Roy's Restaurant",
        "phone": "(714) 776-7697",
        "address": "321 W Katella Ave, Anaheim, California",
        "photo": "/images/roysrestaurant.jpg"
    }
];

let lastId = restaurantData.length;

const getNextId = () => {
    lastId += 1;
    return lastId;
}

// Get a list of restaurants
const getRestaurants = () => {
    return restaurantData;
};


// Get a restaurant by id
const getRestaurant = (id) => {
    return restaurantData.find(restaurant => restaurant.id == id);
};

// Create a new restaurant entry
const createRestaurant = (newRestaurant) => {
    const id = getNextId() -1;
    const restaurant = {id, ...newRestaurant};
    restaurantData.push(restaurant);
    return restaurantData;
};

// Delete a restaurant by id
const deleteRestaurant = (id) => {

    restaurantData = restaurantData.filter(restaurant => restaurant.id !== id);
    return restaurantData;
};


export default { restaurantData };

export { getRestaurants, getRestaurant, createRestaurant, deleteRestaurant };

