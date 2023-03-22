import type { ReactElement } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Image from "next/image";
import { getConversations } from "../Api/Api";
import Layout from "../Layout/Layout";
import {Conversation} from "../../types/conversation";
import Logo from "../../assets/user.png";

const Conversations = ({UserId}): ReactElement <Conversation>=> {
  const [data, setData] = useState([]);
  const page={title:'Conversations'};
  console.log(UserId,'UserId');
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(getConversations(UserId));
      const json = await res.json();
      setData(json);
    };
    fetchData();
  }, []);

  return (
    <>
    <Layout {...page}/>
    <main className="list-conversations">
          {data && data.map((conv,index) => (
              <Link key={index} to={"/messages/" + conv.id}>
            <div key={index} className="card-conv">
              <Image
                src={Logo}
                alt="Logo User"
                width={50}
                height={50}
              />
              <div className="card-name">{conv.recipientNickname}</div>
              <div className="card-time">{new Date(conv.lastMessageTimestamp).toLocaleString(
  "en-US",
    { timeZone: 'UTC'
    }
)}</div>
            </div>
            </Link>
          ))}
    </main>
    </>
  );
};

export default Conversations;
