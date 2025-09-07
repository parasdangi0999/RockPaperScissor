
# RockPaperScissors on Algorand 🎮🤖

## Project Description

Welcome to **RockPaperScissors**, a decentralized application (dApp) built on the Algorand blockchain! This project implements the classic game Rock-Paper-Scissors as a smart contract, allowing two players to compete fairly and transparently without trusting a central authority. The game logic runs securely on Algorand’s blockchain, ensuring tamper-proof results and instant verification.

---

## What It Does

This dApp lets two players submit their choices — Rock, Paper, or Scissors — to the blockchain. The smart contract then evaluates the inputs, determines the winner, and stores the results on-chain. Because everything runs on Algorand, the gameplay is fast, secure, and trustless.

---

## Features

- **On-chain Game Logic**: All choices and results are managed by the Algorand smart contract.
- **Fair and Transparent**: No player can cheat or manipulate the outcome.
- **Simple Inputs**: Players choose between Rock (0), Paper (1), or Scissors (2).
- **Instant Winner Calculation**: The contract determines if Player 1 wins, Player 2 wins, or if it’s a draw.
- **Lightweight and Efficient**: Uses Algorand’s GlobalState for storing player choices.

---

## How It Works (Code Overview)

```typescript
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
````

* Players submit their choices as numbers (0, 1, or 2).
* The smart contract compares these and returns the game outcome.

---

## Deployed Smart Contract

You can interact with the deployed RockPaperScissors smart contract here:
https://lora.algokit.io/testnet/application/745520907
![WhatsApp Image 2025-09-08 at 01 11 25_87296594](https://github.com/user-attachments/assets/f7f29c31-6bcf-46d3-869c-4923007d033a)

---

## Getting Started

To try it yourself, clone the repo and deploy the contract using the Algorand developer tools. Make sure you have Node.js and Algorand SDK installed.

---

Thanks for checking out RockPaperScissors on Algorand! Feel free to contribute or open an issue if you have questions or ideas.
Happy gaming! ✨

---

*Built with ❤️ on Algorand*

```


```
