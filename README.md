## About
This project is built as an inspiration of NFTfi, to fix the illiquidity of NFT. However, the peer to peer mechanic require borrower to wait until someone willing to accept his loan request. Thus, I've built a liquidity pool for borrower to get instant loan, capped at 50% of the NFT floor price. However, due to lack of time, I only managed to finished to backend of liquidity pool, integrated with Chainlink Any API.

**whitelisted NFT for testing can be minted at https://sparkling-llama-44a84e.netlify.app/**

## How I built it
### Frontend
Next.JS React framework

### Backend
Smartcontract
Solidity, Hardhat, Chainlink(to fetch NFT floor price)

## Sponsor tools used

Chainlink: to fetch NFT floor price</br>
Sequence Wallet: integrate login with sequence wallet</br>
Spheron: deploy frontend with spheron</br>
IPFS: deploy frontend with IPFS as protocol</br>

## Demo img
### Marketplace
![Display loan that is not yet fulfilled](https://github.com/joc-rgb/liquid721/blob/master/Web%20capture_29-8-2022_062_liquid721-zee7x8.spheron.app.jpeg)

### Add Loan Request
![Add Loan Request](https://github.com/joc-rgb/liquid721/blob/master/Web%20capture_29-8-2022_0218_liquid721-zee7x8.spheron.app.jpeg)
### Cancel Your Loan that is not yet Fulfilled
![Cancel Your Loan if not Fulfilled yet](https://github.com/joc-rgb/liquid721/blob/master/Web%20capture_29-8-2022_0939_liquid721-zee7x8.spheron.app.jpeg?raw=true)

### Repay Loan Before Deadline
![Display loan that is not yet fulfilled](https://github.com/joc-rgb/liquid721/blob/master/Web%20capture_29-8-2022_062_liquid721-zee7x8.spheron.app.jpeg)

### Claim NFT collateral if your borrower didn't pay after deadline
![Claim NFT collateral if your borrower didn't pay after deadline](https://github.com/joc-rgb/liquid721/blob/master/Web%20capture_29-8-2022_0711_liquid721-zee7x8.spheron.app.jpeg)

### Instant NFT Lending Pool(Frontend in progress)
![Instant NFT Lending Pool](https://github.com/joc-rgb/liquid721/blob/master/Web%20capture_29-8-2022_084_liquid721-zee7x8.spheron.app.jpeg)
