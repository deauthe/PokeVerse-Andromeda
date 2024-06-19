# PokeVerse Platform

## Project Description

PokeVerse is an augmented reality (AR) and blockchain-based game where players engage in immersive Pokémon battles, using and earning NFTs to ensure a decentralized, transparent, and unique gameplay experience. The platform features a robust NFT gating mechanism, allowing users to mint and manage their AR-powered NFTs, character NFTs, and attack NFTs. Victorious players in Pokémon battles are rewarded with additional NFTs.

## Project Video

[Click here to watch the video](https://youtu.be/R-LaCke-BOA)

## Table of Contents

- [Getting Started](#getting-started)
- [Project Idea](#project-idea)
- [How to Use the Project](#how-to-use-the-project)
- [Credits](#credits)
- [How to Contribute to the Project](#how-to-contribute-to-the-project)
- [Helpful Links](#helpful-links)

## Getting Started

To get started with the development server, follow these steps:

1. **Install dependencies:**

   ```bash
   npm i
   ```

2. **Run the development server:**

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn dev
   ```

3. **Open http://localhost:3000 with your browser** to see the result.

## Project Idea

### NFT Gating Mechanism

PokeVerse employs an NFT gating mechanism to manage access and participation in the game. This involves several key steps:

- **Minting AR-Powered NFT:** If a user doesn't already possess the necessary NFTs, they can mint their own AR-powered NFT.
- **Accessing the Game:** With the minted NFT, the user gains access to the "Enter in Game" route.
- **Minting Character NFT:** To participate in battles, users need to acquire Pokémon character NFTs.
- **Minting Attack NFT:** Each attack move NFT has its own attributes and strengths.

### Pokémon Battles

Players can engage in battles with other players' Pokémon, using their customized team of character and attack NFTs. The winner of each battle is rewarded with additional NFTs, enhancing the gameplay experience and providing incentives for skillful play.

### In-Game Asset Management

PokeVerse incorporates a resource management window or vault for in-game asset management, utilizing a mixture of CW20 and CW721 token types:

- **CW20 Tokens:** Ideal for equal value resources like gold (currency) or metal (material).
- **CW721 Tokens:** Perfect for custom or unique equipment, such as items with randomized perk rolls, or for associating visual resources.

## How to Use the Project

1. **Accessing the Platform:**

   - Visit the PokeVerse game platform.

2. **Minting AR-Powered NFTs:**

   - If you do not possess the necessary NFTs, mint an AR-powered NFT to gain access to the game.

3. **Entering the Game:**

   - With your minted NFT, access the "Enter in Game" route.

4. **Minting Character and Attack NFTs:**

   - Acquire Pokémon character NFTs to build your team.
   - Mint attack move NFTs, each with its unique attributes and strengths.

5. **Engaging in Battles:**

   - Use your customized team to battle other players' Pokémon.
   - Strategize with your character and attack NFTs to outplay your opponents.

6. **Winning and Rewarding:**

   - Victorious players are rewarded with NFTs, adding to their collection and enhancing their gameplay experience.

7. **Managing In-Game Assets:**
   - Utilize the resource management window or vault to manage your in-game assets.
   - CW20 tokens are used for resources like gold and metal, while CW721 tokens manage unique equipment and visual resources.

## Credits

This project utilizes the following ADOs from AndromedaOs:

- [Timelock](https://docs.andromedaprotocol.io/andromeda/andromeda-digital-objects/timelock)
- [Splitter](https://docs.andromedaprotocol.io/andromeda/andromeda-digital-objects/splitter)
- [CW721](https://docs.andromedaprotocol.io/andromeda/andromeda-digital-objects/cw721)
- [Marketplace](https://docs.andromedaprotocol.io/andromeda/andromeda-digital-objects/marketplace)
- [CW20](https://docs.andromedaprotocol.io/andromeda/andromeda-digital-objects/cw20)

## How to Contribute to the Project

### Clone the repository

```bash
git clone https://github.com/pokeverse/pokeverse
```

### Navigate to the project directory

```bash
cd pokeverse
```

### Install dependencies

```bash
npm i
```

### Create a new branch for your feature or fix

```bash
git checkout -b feature/new-feature
```

### Make your changes to the code

### Add your changes to the staging area

```bash
git add .
```

### Commit your changes

```bash
git commit -m "Add new feature or fix"
```

### Push your changes to your fork

```bash
git push origin feature/new-feature
```

### Create a pull request on the GitHub repository

## Helpful Links

[AndromedaOs Docs](https://docs.andromedaprotocol.io/andromeda) <br>
[AndromedaOs Web Application Docs](https://docs.andromedaprotocol.io/guides)

---

By following these steps, players can fully engage in the PokeVerse experience, from minting NFTs to participating in battles and managing in-game assets. The platform provides a secure and transparent environment for Pokémon enthusiasts to enjoy and excel in the AR and blockchain-based game.
