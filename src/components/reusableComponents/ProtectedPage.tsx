import React from "react";
import { UserButton } from "@clerk/clerk-react";

const ProtectedPage: React.FC = () => {
  return <UserButton />;
};

export default ProtectedPage;
