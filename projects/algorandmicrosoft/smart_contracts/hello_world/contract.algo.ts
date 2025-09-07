import { Contract, GlobalState, uint64 } from '@algorandfoundation/algorand-typescript'

export class RockPaperScissors extends Contract {
  // 0 = Rock, 1 = Paper, 2 = Scissors
  p1Choice = GlobalState<uint64>({ key: "p1", initialValue: 0 })
  p2Choice = GlobalState<uint64>({ key: "p2", initialValue: 0 })

  setChoices(p1: uint64, p2: uint64): string {
    this.p1Choice.value = p1
    this.p2Choice.value = p2

    if (p1 === p2) return "draw"
    if ((p1 === 0 && p2 === 2) || (p1 === 1 && p2 === 0) || (p1 === 2 && p2 === 1)) return "p1 wins"
    return "p2 wins"
  }
}

