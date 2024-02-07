import { Request, Response } from "express";
import db from "../models/index";

const Achievement = db.achievements;

export const getAllAchievements = async (req: Request, res: Response) => {
  try {
    const achievements = await Achievement.findAll();
    if (!achievements || achievements.length == 0)
      return res.status(500).send({ msg: "Achievements not found" });
    return res.status(200).send({
      msg: "Achievements found!",
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
    if (!achievement) return res.status(404).send({ msg: "Achievement not found" });
    return res.status(200).send({ msg: "Achievement Found!", payload: achievement });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const createAchievement = async (req: Request, res: Response) => {
  try {
    const { name, progress } = req.body;
    if (!name || !progress)
      return res.status(400).send({ msg: "Missing details!" });
    const achievement = await Achievement.findOne({ where: { name: name } });
    if (achievement) return res.status(400).send({ msg: "Achievement already exists!" });
    const createdAchievement = await Achievement.create({
      name: name,
      progress: progress,
    });
    if (!createdAchievement)
      return res.status(500).send({ msg: "Something went wrong" });
    return res.status(201).send({ msg: "Achievement created", payload: createdAchievement });
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
    if (!achievement) return res.status(500).send({ msg: "Achievement not found" });
    for (const ops of data) {
        achievement[ops.propName] = ops.value;
    }

    const action = await achievement.save();
    if (!action) return res.status(500).send({ msg: "Something went wrong" });
    return res.status(200).send({ msg: " Achievement updated!", payload: achievement });
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
    if (!achievement) return res.status(400).send({ msg: "Achievement not found!" });
    return res.status(200).send({ msg: "Achievement deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
