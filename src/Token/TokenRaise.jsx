import React, { useState } from "react";
// import { Helmet } from "react-helmet";
// import Footer from "../Footer/Footer";
import { Creation } from "./Create";

const TokenRaise = ({
  isChatOpen,
  setIsChatOpen,
  allCoins,
  transactions,
  isWalletConnected, // Receive from Layout
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [newlyCreatedCoin, setNewlyCreatedCoin] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
      <div className="main-gradient"></div>
      <Creation/>
      {/* <Footer /> */}
    </>
  );
};

export default TokenRaise;