import generateSudoku from "@/utils/generator";

describe("generateSudoku", () => {
    it("returns a grid and solution for easy difficulty", () => {
        const result = generateSudoku("easy");

        expect(result).toHaveProperty("grid");
        expect(result).toHaveProperty("solution");
        expect(result.grid).toHaveLength(9);
        result.grid.forEach((row) => {
            expect(row).toHaveLength(9);
            row.forEach((cell) => {
                expect(typeof cell).toBe("number");
            });
        });
    });

    it("returns a grid and solution for hard difficulty", () => {
        const result = generateSudoku("hard");

        expect(result).toHaveProperty("grid");
        expect(result).toHaveProperty("solution");
        expect(result.grid).toHaveLength(9);
        result.grid.forEach((row) => {
            expect(row).toHaveLength(9);
        });
    });

    it("ensures the solution is a string", () => {
        const result = generateSudoku("medium");

        expect(typeof result.solution).toBe("string");
        expect(result.solution).toHaveLength(81);
    });
});
