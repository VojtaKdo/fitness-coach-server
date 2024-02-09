import { Request, Response } from "express";
import db from "../models/index";
import { genSalt, hash } from "bcrypt";

const Exercises = db.exercises;

export const getAllExercises = async (req: Request, res: Response) => {
  try {
    const exercise = await Exercises.findAll();
    if (!exercise || exercise.length == 0)
      return res.status(500).send({ msg: "Exercises not found" });
    return res.status(200).send({
      msg: "Exercises found!",
      payload: Exercises,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const getExerciseById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).send({ msg: "Missing details!" });
    const exercise = await Exercises.findOne({ where: { id: id } });
    if (!exercise) return res.status(404).send({ msg: "Exercise not found" });
    return res.status(200).send({ msg: "Exercise Found!", payload: exercise });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const createExercise = async (req: Request, res: Response) => {
  try {
    const { name, videoPath, description, smallDescription } = req.body;
    if (!name || !videoPath || !description || !smallDescription)
      return res.status(400).send({ msg: "Missing details!" });
    const exercise = await Exercises.findOne({ where: { name: name } });
    if (exercise) return res.status(400).send({ msg: "Exercise already exists!" });
    const createdExercise = await Exercises.create({
      name: name,
      videoPath: videoPath,
      description: description,
      smallDescription: smallDescription,
    });
    if (!createdExercise)
      return res.status(500).send({ msg: "Something went wrong" });
    return res.status(201).send({ msg: "Exercise created", payload: createdExercise });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const updateExercise = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = req.body;
    if (!id || !data) return res.status(400).send({ msg: "Missing details!" });
    const exercise = await Exercises.findOne({ where: { id: id } });
    if (!exercise) return res.status(500).send({ msg: "Exercise not found" });
    for (const ops of data) {
        exercise[ops.propName] = ops.value;
    }

    const action = await exercise.save();
    if (!action) return res.status(500).send({ msg: "Something went wrong" });
    return res.status(200).send({ msg: "Exercise updated!", payload: exercise });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const deleteExercise = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).send({ msg: "Missing details!" });
    const exercise = await Exercises.destroy({ where: { id: id } });
    if (!exercise) return res.status(400).send({ msg: "Exercise not found!" });
    return res.status(200).send({ msg: "Exercise deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};