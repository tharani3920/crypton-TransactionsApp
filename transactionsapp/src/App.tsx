import React from "react";
import TransactionList from "./component/TransactionList";

const App: React.FC = () => {
  const transactions = [
    {
      id: 1,
      photo:
        "https://www.shutterstock.com/image-photo/close-head-shot-confident-serious-260nw-1481322794.jpg",
      name: "John Doe",
      date: "2024-08-01",
      time: "14:30",
      amount: -120.0,
      type: "outgoing" as const,
    },
    {
      id: 2,
      photo:
        "https://previews.123rf.com/images/antonioguillem/antonioguillem1710/antonioguillem171000062/88075542-front-portrait-of-a-happy-man-isolated-on-a-grey-background.jpg",
      name: "Jane Smith",
      date: "2024-08-02",
      time: "09:00",
      amount: +1500.0,
      type: "received" as const,
    },
    {
      id: 3,
      photo:
        "https://previews.123rf.com/images/milkos/milkos1912/milkos191202889/135824395-portrait-of-confident-man-looking-at-camera-posing-over-white-studio-background-copy-space.jpg",
      name: "Emily Johnson",
      date: "2024-08-03",
      time: "16:45",
      amount: -45.75,
      type: "outgoing" as const,
    },
    // {
    //   id: 4,
    //   photo: "https://via.placeholder.com/50",
    //   name: "Michael Brown",
    //   date: "2024-08-04",
    //   time: "12:00",
    //   amount: 200.0,
    //   type: "received" as const,
    // },
  ];

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
        backgroundColor: "#f9f9f9",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          textAlign: "center",
          padding: "0px 20px",
          alignItems: "center",
          width: "600px",
        }}
      >
        <h1>Transactions List</h1>
        <h3 style={{ color: "gray" }}>See More</h3>
      </div>
      <TransactionList transactions={transactions} />
    </div>
  );
};

export default App;
