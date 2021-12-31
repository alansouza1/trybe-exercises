let peca = "rOok";
peca = peca.toLocaleLowerCase();

switch (peca) {
  case "king":
    console.log("The king moves one square in any direction.");
    break;

  case "rook":
    console.log("A rook can move any number of squares along a rank or file, but cannot leap over other pieces.");
    break;

  case "bishop":
    console.log("A bishop can move any number of squares diagonally, but cannot leap over other pieces.");
    break;

  case "queen":
    console.log("A queen combines the power of a rook and bishop and can move any number of squares along a rank, file, or diagonal, but cannot leap over other pieces.");
    break;

  case "knight":
    console.log("A knight moves to any of the closest squares that are not on the same rank, file, or diagonal. (Thus the move forms an L-shape: two squares vertically and one square horizontally, or two squares horizontally and one square vertically.) The knight is the only piece that can leap over other pieces.");
    break;

  case "pawn":
    console.log("A pawn can move forward to the unoccupied square immediately in front of it on the same file, or on its first move it can advance two squares along the same file, provided both squares are unoccupied (black dots in the diagram). A pawn can capture an opponent's piece on a square diagonally in front of it by moving to that square (black crosses).");
    break;

  default:
    console.log("ERRO! Peça inválida.")
    break;
}