import { TMessage } from "./message.interface";
import { MessageModel } from "./message.model";

//Insert Message
const createEMessageIntoDB = async (messageData: TMessage) => {
  console.log("Message Data: ", messageData);
  const result = await MessageModel.create(messageData);
  return result;
};

// Get all Message
const getAllMessageFromDB = async () => {
  const result = await MessageModel.find().sort({ createdAt: -1 });
  return result;
};

//delete Message
const deleteMessageFromDB = async (messageId: string) => {
  console.log("Come Message id in Service: ", messageId);
  const result = await MessageModel.findByIdAndDelete({ _id: messageId });
  return result;
};

//update Message
const updateMessageFromDB = async (
  messageId: string,
  messageData: TMessage
) => {
  console.log("Come Message id in Service: ", messageId);
  console.log("Come Message Data in Service: ", messageId);
  //   const result = await EmailModel.findByIdAndDelete({ _id: emailId });
  const result = await MessageModel.findByIdAndUpdate(
    { _id: messageId },
    messageData,
    {
      new: true,
    }
  );
  return result;
};

export const messageService = {
  createEMessageIntoDB,
  getAllMessageFromDB,
  deleteMessageFromDB,
  updateMessageFromDB,
};
