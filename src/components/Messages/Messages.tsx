import type { ReactElement } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Image from "next/image";
import { useParams } from "react-router-dom";
import { Message } from "../../types/message";
import Send from "../../assets/send.png";
import { getMessages } from "../Api/Api";
import Layout from "../Layout/Layout";

const Messages = (): ReactElement<Message> => {
  const [data, setData] = useState([]);
  const page = { title: "Messages" };
  const { id } = useParams(); //get the URL parameters
  const [newMessage, setNewMessage] = useState<Message>();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const objMsg = {
      id: data.length + 1,
      conversationId: parseInt(id),
      authorId: parseInt(id),
      timestamp: Date.now(),
      body: value,
    };
    setNewMessage(objMsg);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if ("body" in newMessage) {
      setData([...data, newMessage]);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(getMessages(id));
      const json = await res.json();
      setData(json);
    };
    fetchData();
  }, []);
  return (
    <>
      <Layout {...page} />
      <div className="wrapper">
        <ul>
          {data &&
            data.map((key, index) => (
              <li className="" key={index}>
                {key && key.body}
              </li>
            ))}
        </ul>
        <div className="send-msg">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="message"
              name="body"
              placeholder="Send Message"
              value={newMessage && newMessage.body}
              onChange={handleInputChange}
              required
            />
            <button className="send-btn" type="submit">
              <Image
                src={Send}
                className="logo-send"
                alt="Logo User"
                width={50}
                height={50}
              />
            </button>
          </form>
          <div className="back-btn">
            <Link to={"/"}> Back</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Messages;
