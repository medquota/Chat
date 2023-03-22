import React from "react";
import { render, waitFor } from "@testing-library/react";
import Home from "./Home";

jest.mock("../Api/Api", () => ({
  getUsers: jest.fn(() => Promise.resolve({ nickname: "test user" })),
}));

describe("Home component", () => {
  it("should render user nickname", async () => {
    const { getByText } = render(<Home />);
    await waitFor(() => expect(getByText("test user")).toBeInTheDocument());
  });
});
