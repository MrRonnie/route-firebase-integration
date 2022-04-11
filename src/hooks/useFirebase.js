import { useEffect, useState } from "react";

const userFirebase = () => {
  const [user, setUser] = useState({});

  useEffect(() => {}, []);

  const singInWithGoogle = () => {
    console.log("Singing in soon");
  };

  return [user, setUser];
};

export default userFirebase;
