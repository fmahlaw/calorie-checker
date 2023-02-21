import React, { useState } from 'react';
import FoodItem from './FoodItem';

interface Food {
  name: string;
  calories: number;
}

const App: React.FC = () => {
  const [foods, setFoods] = useState<Food[]>([]);

  const handleAddFood = (name: string, calories: number) => {
    const newFood = { name, calories };
    setFoods([...foods, newFood]);
  };

  const handleDeleteFood = (index: number) => {
    const updatedFoods = [...foods];
    updatedFoods.splice(index, 1);
    setFoods(updatedFoods);
  };

  const totalCalories = foods.reduce((total, food) => total + food.calories, 0);

  return (
    <div>
      <h1>Calorie Counter</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.target as HTMLFormElement;
          const nameInput = form.elements.namedItem("name") as HTMLInputElement;
          const caloriesInput = form.elements.namedItem("calories") as HTMLInputElement;
          handleAddFood(nameInput.value, parseInt(caloriesInput.value, 10));
          nameInput.value = '';
          caloriesInput.value = '';
        }}
      >
        <input name='name' type="text" placeholder="Name" />
        <input name='calories' type="number" placeholder="Calories" />
        <button type="submit">Add Food</button>
      </form>
      <ul>
        {foods.map((food, index) => (
          <li key={index}>
            <FoodItem name={food.name} calories={food.calories} onDelete={() => handleDeleteFood(index)} />
          </li>
        ))}
      </ul>
      <p>Total Calories: {totalCalories}</p>
    </div>
  );
};

export default App;
