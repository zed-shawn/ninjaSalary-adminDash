class TransactionItem {
  constructor(name, withAmount, fee, netAmount) {
    this.name = name;
    this.withAmount = withAmount;
    this.fee = fee;
    this.netAmount = netAmount;
  }
}

export default TransactionItem;
