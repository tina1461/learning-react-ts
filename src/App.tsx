import { useState } from "react";
import { Button, Input, Label } from "@/components/ui";
import { XCircleIcon } from "@heroicons/react/24/solid";

function App() {
  const [itemName, setItemName] = useState("");
  const [shoppingList, setShoppingList] = useState<string[]>([]);

  const addingItem = () => {
    if (itemName.length === 0) return;
    setShoppingList(prevState => [...prevState, itemName.trim()]);
    setItemName("");
  };

  const removeItem = (index: number) => {
    const newArr = shoppingList.filter((_, itemIndex) => itemIndex !== index);
    setShoppingList(newArr);
  };

  return (
    <>
      <div className="p-5 flex items-center space-x-2">
        <Input
          placeholder="Item Name"
          value={itemName}
          onChange={e => setItemName(e.target.value)}
        />
        <Button
          className="text-center"
          onClick={addingItem}
          disabled={itemName.length === 0}
        >
          Add item
        </Button>
      </div>
      <div className="p-5">
        {shoppingList.map((item, itemIndex) => (
          <div className="flex items-center space-x-2">
            <Label htmlFor="">{item}</Label>
            <Button
              className="text-center"
              variant="outline"
              size="icon"
              onClick={() => removeItem(itemIndex)}
            >
              <XCircleIcon className="h-6 w-6" />
            </Button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
