import React from "react";
import { shallow } from "enzyme";
import Conversations from "./Conversations";
import { Conversation } from "../../types/conversation";

describe("Conversations component", () => {
  const UserId = 123;
  const mockData: Conversation[] = [
    { id: 1, recipientNickname: "Alice", lastMessageTimestamp: Date.now(), recipientId:1,
    senderId: 1,
    senderNickname: 'med',},
    { id: 2, recipientNickname: "Bob", lastMessageTimestamp: Date.now(), recipientId:2,
    senderId: 2,
    senderNickname: 'wo' },
  ];

  beforeEach(() => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
    } as Response);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders correctly", () => {
    const wrapper = shallow(<Conversations UserId={UserId} />);
    expect(wrapper.find(".list-conversations")).toHaveLength(1);
    expect(wrapper.find(".card-conv")).toHaveLength(mockData.length);
    mockData.forEach((conv, index) => {
      const card = wrapper.find(".card-conv").at(index);
      expect(card.find(".card-name").text()).toEqual(conv.recipientNickname);
      expect(card.find(".card-time").text()).toEqual(
        new Date(conv.lastMessageTimestamp).toLocaleString("en-US", {
          timeZone: "UTC",
        })
      );
    });
  });