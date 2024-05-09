import { beforeEach, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import ShoppingList from "@/components/ShoppingList";

describe("ShoppingList", () => {
  const user = userEvent.setup();

  const addItem = async (itemName: string) => {
    const input = screen.getByPlaceholderText("Item Name");
    const addItemButton = screen.getByRole("button", { name: /add item/i });
    await user.type(input, itemName);
    await user.click(addItemButton);
  };

  const removeItem = async (itemName: string) => {
    const removeItemButton = screen.getByRole("button", {
      name: new RegExp(`remove ${itemName}`, "i"),
    });
    await user.click(removeItemButton);
  };

  beforeEach(() => {
    render(<ShoppingList />);
  });

  describe("Single item operations", () => {
    it("should add an item into shopping list", async () => {
      await addItem("Milk");
      expect(screen.getByText("Milk")).toBeInTheDocument();
    });

    it("should remove an item from the shopping list", async () => {
      await addItem("Milk");
      await removeItem("Milk");
      expect(screen.queryByText("Milk")).not.toBeInTheDocument();
    });
  });

  describe("Multiple items operations", () => {
    const itemsArray = ["Milk", "Apple", "Banana"];

    beforeEach(async () => {
      for (const itemName of itemsArray) {
        await addItem(itemName);
      }
    });

    it("should add multiple items into the shopping list", () => {
      itemsArray.forEach(itemName => {
        expect(screen.getByText(itemName)).toBeInTheDocument();
      });
    });

    it("should remove multiple items from the shopping list", async () => {
      for (const itemName of itemsArray) {
        await removeItem(itemName);
        expect(screen.queryByText(itemName)).not.toBeInTheDocument();
      }
    });
  });
});
