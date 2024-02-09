import { Request, Response } from "express";
import db from "../models/index";
import { genSalt, hash } from "bcrypt";

const Friend = db.friendList;

export const getAllFriends = async (req: Request, res: Response) => {
  try {
    const friend = await Friend.findAll();
    if (!friend || friend.length == 0)
      return res.status(500).send({ msg: "Friends not found" });
    return res.status(200).send({
      msg: "Friends found!",
      payload: friend,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const getFriendById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).send({ msg: "Missing details!" });
    const friend = await Friend.findOne({ where: { id: id } });
    if (!friend) return res.status(404).send({ msg: "Friends not found" });
    return res.status(200).send({ msg: "Friends Found!", payload: friend });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const deleteFriend = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).send({ msg: "Missing details!" });
    const friend = await Friend.destroy({ where: { id: id } });
    if (!friend) return res.status(400).send({ msg: "Friends not found!" });
    return res.status(200).send({ msg: "Friends deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

