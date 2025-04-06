import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "@/app/page";

describe("Page", () => {
    it("renders a heading", () => {
        render(<Page />);

        const heading = screen.getByRole("heading", { level: 1 });

        expect(heading).toBeInTheDocument();
    });
    it("renders the first paragraph", () => {
        render(<Page />);

        const paragraphs = screen.getAllByText("This is the first paragraph.");
        expect(paragraphs[0]).toBeInTheDocument();
    });
});
