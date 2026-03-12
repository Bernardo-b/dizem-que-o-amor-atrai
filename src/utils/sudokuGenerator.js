// Gerador e validador de Sudoku

// Puzzle pré-definido (fácil - 12 células vazias espalhadas)
// 0 representa células vazias
export const initialPuzzle = [
  [5, 0, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 0, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 0, 2, 5, 6, 7],
  [8, 5, 0, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 0, 7, 9, 1],
  [7, 1, 3, 9, 0, 4, 8, 5, 6],
  [9, 6, 1, 0, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 0, 9, 6, 3, 5],
  [3, 4, 0, 2, 8, 6, 0, 7, 9],
]

export const solution = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9],
]

// Verifica se um número é válido em uma posição
export function isValidMove(board, row, col, num) {
  // Verifica linha
  for (let x = 0; x < 9; x++) {
    if (board[row][x] === num && x !== col) {
      return false
    }
  }

  // Verifica coluna
  for (let x = 0; x < 9; x++) {
    if (board[x][col] === num && x !== row) {
      return false
    }
  }

  // Verifica o quadrado 3x3
  const startRow = Math.floor(row / 3) * 3
  const startCol = Math.floor(col / 3) * 3

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const currentRow = startRow + i
      const currentCol = startCol + j
      if (
        board[currentRow][currentCol] === num &&
        (currentRow !== row || currentCol !== col)
      ) {
        return false
      }
    }
  }

  return true
}

// Verifica se o puzzle está completo e correto
export function isPuzzleComplete(board) {
  // Verifica se não há células vazias
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === 0) {
        return false
      }
    }
  }

  // Verifica se todos os números são válidos
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const num = board[i][j]
      const temp = board[i][j]
      board[i][j] = 0
      const valid = isValidMove(board, i, j, num)
      board[i][j] = temp
      if (!valid) {
        return false
      }
    }
  }

  return true
}

// Cria uma cópia profunda do tabuleiro
export function copyBoard(board) {
  return board.map(row => [...row])
}

// Verifica se uma célula é original (fixa) do puzzle
export function isFixedCell(row, col) {
  return initialPuzzle[row][col] !== 0
}
