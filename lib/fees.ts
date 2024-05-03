function calculateFees(transactionAmount: number): number {
    let feesPercentage: number;

    if (transactionAmount <= 5000) {
        feesPercentage = 0.01; // Up to 5,000: 1%
    } else if (transactionAmount <= 15000) {
        feesPercentage = 0.005; // 5,001 - 15,000: 0.5%
    } else if (transactionAmount <= 50000) {
        feesPercentage = 0.0025; // 15,001 - 50,000: 0.25%
    } else if (transactionAmount <= 70000) {
        feesPercentage = 0.0015; // 50,001 - 70,000: 0.15%
    } else {
        feesPercentage = 0.0005; // above 70,001: 0.05%
    }

    const fees = transactionAmount * feesPercentage;
    return transactionAmount + fees;
}

//rates
// Up to 5,000	1%
// 5,001 - 15,000	 0.5%
// 15,001 - 50,000	 0.25%
// 50,001 - 70,000	 0.15%
// above 70,001 	 0.05%