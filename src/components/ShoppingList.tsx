import { useState } from "react";
import { Button, Input, Label } from "@/components/ui";
import { XCircleIcon } from "@heroicons/react/24/solid";

function ShoppingList() {
  const [itemName, setItemName] = useState("");
  const [shoppingList, setShoppingList] = useState<string[]>([]);

  const addItem = () => {
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
          onClick={addItem}
          disabled={itemName.length === 0}
        >
          Add item
        </Button>
      </div>
      <div className="p-5">
        {shoppingList.map((item, itemIndex) => (
          <div
            key={`item-${itemIndex}-${item}`}
            className="flex items-center space-x-2"
          >
            <Label htmlFor="">{item}</Label>
            <Button
              className="text-center"
              variant="outline"
              size="icon"
              onClick={() => removeItem(itemIndex)}
              aria-label={`Remove ${item}`}
            >
              <XCircleIcon className="h-6 w-6" />
            </Button>
          </div>
        ))}
      </div>
    </>
  );
}

export default ShoppingList;
