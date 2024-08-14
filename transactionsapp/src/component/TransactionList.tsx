import React from "react";
import styles from "../styles/styles.module.scss";

interface Transaction {
  id: number;
  photo: string;
  name: string;
  date: string;
  time: string;
  amount: number;
  type: "received" | "outgoing";
}

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  return (
    <div className={styles.transactionContainer}>
      {transactions.map((transaction) => (
        <div
          key={transaction.id}
          className={`${styles.transactionBox} ${
            transaction.type === "received" ? styles.received : styles.outgoing
          }`}
        >
          <img
            src={transaction.photo}
            alt={transaction.name}
            className={styles.photo}
          />
          <div className={styles.transactionDetails}>
            <div>
              <div className={styles.name}>{transaction.name}</div>
              <div className={styles.datetime}>
                {transaction.date} . {transaction.time}
              </div>
            </div>
            <div>
              <div
                className={styles.amount}
                style={{
                  color: transaction.amount > 0 ? "green" : "red",
                }}
              >
                {transaction.amount > 0
                  ? `+${transaction.amount.toFixed(2)}`
                  : `-${Math.abs(transaction.amount).toFixed(2)}`}
              </div>
              <div className={styles.type}>{transaction.type}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;
