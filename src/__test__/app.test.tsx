import { screen } from "@testing-library/react";
import { App } from "../components/app";
import { describe, it } from "vitest";
import { renderWithStore } from "@tests/__mock__/mock-store";

describe("App", () => {
  it("renders the App component", () => {
    renderWithStore(<App />);

    screen.debug();
  });
});
