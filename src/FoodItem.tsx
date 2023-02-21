import React from 'react';

interface Props {
  name: string;
  calories: number;
  onDelete: () => void;
}

const FoodItem: React.FC<Props> = ({ name, calories, onDelete }) => {
  return (
    <div>
      <span>{name} - {calories} calories</span>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default FoodItem;