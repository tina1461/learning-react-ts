import { beforeEach, describe, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ShoppingList from "@/components/ShoppingList";

describe("ShoppingList", () => {
  beforeEach(() => {
    render(<ShoppingList />);
    const input = screen.getByPlaceholderText("Item Name");
    const addItemButton = screen.getByText("Add item");

    fireEvent.change(input, { target: { value: "Milk" } });
    fireEvent.click(addItemButton);
  });
  test("add item function should adds an item into shopping list", () => {
    expect(screen.getByText("Milk")).toBeInTheDocument();
  });

  test("removeItem function removes an item from the shopping list", () => {
    const removeItemButton = screen.getByTestId("remove_button_0");
    fireEvent.click(removeItemButton);
    expect(screen.queryByText("Milk")).not.toBeInTheDocument();
  });
});
