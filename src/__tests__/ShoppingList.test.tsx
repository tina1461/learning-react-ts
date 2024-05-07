import { beforeEach, describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import ShoppingList from "@/components/ShoppingList";

describe("ShoppingList", () => {
  const user = userEvent.setup();
  beforeEach(async () => {
    render(<ShoppingList />);
    const input = screen.getByPlaceholderText("Item Name");
    const addItemButton = screen.getByText("Add item");

    await user.type(input, "Milk");
    await userEvent.click(addItemButton);
  });
  test("add item function should adds an item into shopping list", () => {
    expect(screen.getByText("Milk")).toBeInTheDocument();
  });

  test("removeItem function removes an item from the shopping list", async () => {
    const removeItemButton = screen.getByTestId("remove_button_0");
    await userEvent.click(removeItemButton);
    expect(screen.queryByText("Milk")).not.toBeInTheDocument();
  });
});
