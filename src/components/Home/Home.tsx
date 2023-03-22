import type { ReactElement } from "react";
import { useEffect, useState } from "react";
import { loggedUserId } from "../../pages/_app";
import { User } from "../../types/user";
import Image from "next/image";
import { getUsers } from "../Api/Api";
import Layout from "../Layout/Layout";
import Logo from "../../assets/user.png";
import Conversations from "../Conversations/Conversations";

const Home = (): ReactElement<User> => {
  const [user, setUser] = useState<User>();
  let data;
  const page = { title: "Welcome" };
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(getUsers(loggedUserId));
      data = await res.json();
      setUser(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <Layout {...page} />
      <main className="HomePage">
        <div className="card-conv">
          <Image src={Logo} alt="Logo User" width={50} height={50} />
          <div className="card-name"> {user && user.nickname}</div>
          <Conversations UserId={loggedUserId} />
        </div>
      </main>
    </>
  );
};

export default Home;
