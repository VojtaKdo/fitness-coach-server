import { Request, Response } from "express";
import db from "../models/index";
import { genSalt, hash } from "bcrypt";

const Meals = db.meals;

export const getAllMeals = async (req: Request, res: Response) => {
  try {
    const meal = await Meals.findAll();
    if (!meal || meal.length == 0)
      return res.status(500).send({ msg: "Meals not found" });
    return res.status(200).send({
      msg: "Meals found!",
      payload: Meals,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const getMealById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).send({ msg: "Missing details!" });
    const meal = await Meals.findOne({ where: { id: id } });
    if (!meal) return res.status(404).send({ msg: "Meal not found" });
    return res.status(200).send({ msg: "Meal Found!", payload: meal });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const createMeal = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    if (!name)
      return res.status(400).send({ msg: "Missing details!" });
    const meal = await Meals.findOne({ where: { name: name } });
    if (meal) return res.status(400).send({ msg: "Meal already exists!" });
    const createdMeal = await Meals.create({
      name: name,
    });
    if (!createdMeal)
      return res.status(500).send({ msg: "Something went wrong" });
    return res.status(201).send({ msg: "Meal created", payload: createdMeal });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const updateMeal = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = req.body;
    if (!id || !data) return res.status(400).send({ msg: "Missing details!" });
    const meal = await Meals.findOne({ where: { id: id } });
    if (!meal) return res.status(500).send({ msg: "Meal not found" });
    for (const ops of data) {
        meal[ops.propName] = ops.value;
    }

    const action = await meal.save();
    if (!action) return res.status(500).send({ msg: "Something went wrong" });
    return res.status(200).send({ msg: " Meal updated!", payload: meal });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const deleteMeal = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).send({ msg: "Missing details!" });
    const meal = await Meals.destroy({ where: { id: id } });
    if (!meal) return res.status(400).send({ msg: "Meal not found!" });
    return res.status(200).send({ msg: "Meal deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
