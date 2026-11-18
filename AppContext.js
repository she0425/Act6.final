import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [recipes, setRecipes] = useState([
    { id: 1, title: 'Pancakes', saved: false },
    { id: 2, title: 'Garlic Pasta', saved: true },
  ]);
  
  const [isLoading, setIsLoading] = useState(false);

  // Toggle favorite recipe status with a 1-second simulated saving state
  const toggleRecipe = (id) => {
    setIsLoading(true);
    setTimeout(() => {
      setRecipes(prevRecipes =>
        prevRecipes.map(recipe =>
          recipe.id === id ? { ...recipe, saved: !recipe.saved } : recipe
        )
      );
      setIsLoading(false);
    }, 1000);
  };

  return (
    <AppContext.Provider value={{ recipes, toggleRecipe, isLoading }}>
      {children}
    </AppContext.Provider>
  );
}