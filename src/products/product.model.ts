export type Sizes = 'S' | 'M' | 'L' | 'XL'// mi alias
export type Product = {
  title: string,// si cambio title por name es TS es facil debugear porque me sale el error en los otros files donde son usados en JS NO
  date: Date,
  stock: number,
  size?: Sizes
}
