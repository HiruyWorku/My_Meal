// src/data/cartStore.ts

export type CartItem = {
    name: string;
    crossed: boolean;
  };
  
  export type Cart = {
    title: string;
    items: CartItem[];
  };
  
  export const cartStore: Cart[] = [];
  
  export function addToCart(items: string[]) {
    const newCart: Cart = {
      title: `Cart ${cartStore.length + 1}`,
      items: items.map((item) => ({
        name: item,
        crossed: false,
      })),
    };
    cartStore.push(newCart);
  }
  