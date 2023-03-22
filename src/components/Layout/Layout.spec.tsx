import React from "react";
import { render } from "@testing-library/react";
import Layout from "./Layout";

describe("Layout component", () => {
  it("should render title", () => {
    const { getByText } = render(<Layout title="Test Title" />);
    expect(getByText("Test Title - Leboncoin")).toBeInTheDocument();
  });

  it("should render description in meta tag", () => {
    render(<Layout title="Test Title" />);
    const metaTag = document.querySelector('meta[name="description"]');
    expect(metaTag).toHaveAttribute(
      "content",
      "Frontend exercise for developpers who want to join us on leboncoin.fr"
    );
  });
});
