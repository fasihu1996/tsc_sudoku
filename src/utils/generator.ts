import { Difficulty } from "@/types/sudoku_types";
import { getSudoku } from "sudoku-gen";

const generateSudoku = (difficulty: Difficulty) => {
    // objest destructuring without renaming the return from getSudoku
    const { puzzle, solution } = getSudoku(difficulty);

    // convert the long string received by above func into a 2d array to map onto the board
    const grid = [];
    for (let i = 0; i < 81; i += 9) {
        grid.push(
            puzzle
                .slice(i, i + 9)
                .split("")
                .map((value) => (value === "-" ? 0 : Number(value)))
        );
    }

    return { grid, solution };
};

export default generateSudoku;
