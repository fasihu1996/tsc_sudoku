export type Difficulty = "easy" | "medium" | "hard";

export type CellValue = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export interface Cell {
    row: number;
    column: number;
    value?: CellValue;
}
