import { NextFunction, Request, RequestHandler, Response } from "express";
import { messageService } from "./messageservice";

//Create Message
const createMessage: RequestHandler = async (req, res, next) => {
  try {
    const message = req.body;

    console.log("Come Message: ", message);

    const result = await messageService.createEMessageIntoDB(message);

    //Send Response
    res.status(200).json({
      message: "Email Sent successfully",
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// Get All Message
const getAllMessage: RequestHandler = async (req, res, next) => {
  try {
    const result = await messageService.getAllMessageFromDB();

    // Send response with the results
    res.status(200).json({
      message: "Email retrieved successfully",
      status: true,
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

//Delete Message
const deleteMessage: RequestHandler = async (req, res, next) => {
  try {
    const messageId = req.params.id;
    console.log("Message id: ", messageId);
    const result = await messageService.deleteMessageFromDB(messageId);

    //Send Response
    res.status(200).json({
      message: "Email deleted successfully",
      status: true,
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

//Delete Email
const updateMessage: RequestHandler = async (req, res, next) => {
  try {
    const messageId = req.params.id;
    const messageBody = req?.body;
    console.log("Message id: ", messageId);
    const result = await messageService.updateMessageFromDB(
      messageId,
      messageBody
    );

    //Send Response
    res.status(200).json({
      message: "Email Updated successfully",
      status: true,
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

export const MessageControllers = {
  createMessage,
  getAllMessage,
  deleteMessage,
  updateMessage,
};
