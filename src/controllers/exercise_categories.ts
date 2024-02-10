import { Request, Response } from "express";
import db from "../models/index";
import { genSalt, hash } from "bcrypt";

const ExerciseCategories = db.exerciseCategories;

export const getAllExerciseCategories = async (req: Request, res: Response) => {
  try {
    const exerciseCategory = await ExerciseCategories.findAll();
    if (!exerciseCategory || exerciseCategory.length == 0)
      return res.status(500).send({ msg: "Exercise categories not found" });
    return res.status(200).send({
      msg: "Exercise categories found!",
      payload: ExerciseCategories,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const getExerciseCategoryById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).send({ msg: "Missing details!" });
    const exerciseCategory = await ExerciseCategories.findOne({ where: { id: id } });
    if (!exerciseCategory) return res.status(404).send({ msg: "Exercise not found" });
    return res.status(200).send({ msg: "Exercise Found!", payload: exerciseCategory });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const createExerciseCategory = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    if (!name)
      return res.status(400).send({ msg: "Missing details!" });
    const exerciseCategory = await ExerciseCategories.findOne({ where: { name: name } });
    if (exerciseCategory) return res.status(400).send({ msg: "Exercise Category already exists!" });
    const createdExerciseCategory = await ExerciseCategories.create({
      name: name,
    });
    if (!createdExerciseCategory)
      return res.status(500).send({ msg: "Something went wrong" });
    return res.status(201).send({ msg: "Exercise category created", payload: createdExerciseCategory });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const updateExerciseCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = req.body;
    if (!id || !data) return res.status(400).send({ msg: "Missing details!" });
    const exerciseCategory = await ExerciseCategories.findOne({ where: { id: id } });
    if (!exerciseCategory) return res.status(500).send({ msg: "Exercise category not found" });
    for (const ops of data) {
        exerciseCategory[ops.propName] = ops.value;
    }

    const action = await exerciseCategory.save();
    if (!action) return res.status(500).send({ msg: "Something went wrong" });
    return res.status(200).send({ msg: "Exercise category updated!", payload: exerciseCategory });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const deleteExercise = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).send({ msg: "Missing details!" });
    const exerciseCategory = await ExerciseCategories.destroy({ where: { id: id } });
    if (!exerciseCategory) return res.status(400).send({ msg: "Exercise category not found!" });
    return res.status(200).send({ msg: "Exercise category deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};