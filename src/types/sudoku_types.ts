export type Difficulty = "easy" | "medium" | "hard";

export interface Cell {
    position: [number, number];
    row: number;
    column: number;
}
