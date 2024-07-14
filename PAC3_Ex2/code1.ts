interface ShoppingList {
  apple: number;
  banana: boolean;
}
const a = 1 + 2;
const b = a + 3;
const c: ShoppingList = {
  apple: a,
  banana: b
};
const d = c.apple * 4;
