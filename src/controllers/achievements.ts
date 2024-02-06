import { Request, Response } from "express";
import db from "../models/index";

const Achievement = db.achievements;

export const getAllAchievements = async (req: Request, res: Response) => {
  try {
    const achievements = await Achievement.findAll();
    if (!achievements || achievements.length == 0)
      return res.status(500).send({ msg: "Users not found" });
    return res.status(200).send({
      msg: "Users found!",
      payload: achievements,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const getAchievementById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).send({ msg: "Missing details!" });
    const achievement = await Achievement.findOne({ where: { id: id } });
    if (!achievement) return res.status(404).send({ msg: "User not found" });
    return res.status(200).send({ msg: "User Found!", payload: achievement });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const createAchievement = async (req: Request, res: Response) => {
  try {
    const { email, username, password } = req.body;
    if (!email || !username || !password)
      return res.status(400).send({ msg: "Missing details!" });
    const achievement = await Achievement.findOne({ where: { email: email } });
    if (achievement) return res.status(400).send({ msg: "User already exists!" });
    const createdAchievement = await Achievement.create({
      email: email,
      username: username,
    });
    if (!createdAchievement)
      return res.status(500).send({ msg: "Something went wrong" });
    return res.status(201).send({ msg: "User created", payload: createdAchievement });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const updateAchievement = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = req.body;
    if (!id || !data) return res.status(400).send({ msg: "Missing details!" });
    const achievement = await Achievement.findOne({ where: { id: id } });
    if (!achievement) return res.status(500).send({ msg: "User not found" });
    for (const ops of data) {
        achievement[ops.propName] = ops.value;
    }

    const action = await achievement.save();
    if (!action) return res.status(500).send({ msg: "Something went wrong" });
    return res.status(200).send({ msg: " User updated!", payload: achievement });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const deleteAchievement = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).send({ msg: "Missing details!" });
    const achievement = await Achievement.destroy({ where: { id: id } });
    if (!achievement) return res.status(400).send({ msg: "User not found!" });
    return res.status(200).send({ msg: "User deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
