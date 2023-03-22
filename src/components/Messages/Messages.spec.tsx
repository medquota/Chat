import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Messages from "./Messages";
import { getMessages } from "../Api/Api";

jest.mock("../Api/Api");

describe("Messages component", () => {
  const mockedMessages = [
    {
      id: 1,
      conversationId: 1,
      authorId: 1,
      timestamp: 1630991137028,
      body: "Hello",
    },
    {
      id: 2,
      conversationId: 1,
      authorId: 2,
      timestamp: 1630991147028,
      body: "Hi",
    },
  ];

  beforeEach(() => {
    getMessages.mockResolvedValue(mockedMessages);
    render(<Messages />);
  });

  it("should display messages", async () => {
    const messageList = await screen.findAllByRole("listitem");
    expect(messageList).toHaveLength(mockedMessages.length);
  });

  it("should add new message", async () => {
    const input = screen.getByPlaceholderText("Send Message");
    fireEvent.change(input, { target: { value: "Test message" } });
    const sendButton = screen.getByRole("button");
    fireEvent.click(sendButton);
    const messageList = await screen.findAllByRole("listitem");
    expect(messageList).toHaveLength(mockedMessages.length + 1);
    expect(messageList[mockedMessages.length]).toHaveTextContent(
      "Test message"
    );
  });
});
