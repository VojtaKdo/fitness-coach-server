import { Request, Response } from "express";
import db from "../models/index";
import { genSalt, hash } from "bcrypt";

const Plans = db.plans;

export const getAllPlans = async (req: Request, res: Response) => {
  try {
    const meal = await Plans.findAll();
    if (!meal || meal.length == 0)
      return res.status(500).send({ msg: "Plans not found" });
    return res.status(200).send({
      msg: "Plans found!",
      payload: Plans,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const getPlanById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).send({ msg: "Missing details!" });
    const plan = await Plans.findOne({ where: { id: id } });
    if (!plan) return res.status(404).send({ msg: "Plan not found" });
    return res.status(200).send({ msg: "Plan Found!", payload: plan });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const createPlan = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    if (!name)
      return res.status(400).send({ msg: "Missing details!" });
    const plan = await Plans.findOne({ where: { name: name } });
    if (plan) return res.status(400).send({ msg: "Plan already exists!" });
    const createdPlan = await Plans.create({
      name: name,
    });
    if (!createdPlan)
      return res.status(500).send({ msg: "Something went wrong" });
    return res.status(201).send({ msg: "Plan created", payload: createdPlan });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const updatePlan = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = req.body;
    if (!id || !data) return res.status(400).send({ msg: "Missing details!" });
    const plan = await Plans.findOne({ where: { id: id } });
    if (!plan) return res.status(500).send({ msg: "Plean not found" });
    for (const ops of data) {
        plan[ops.propName] = ops.value;
    }

    const action = await plan.save();
    if (!action) return res.status(500).send({ msg: "Something went wrong" });
    return res.status(200).send({ msg: " Plan updated!", payload: plan });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const deletePlan = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).send({ msg: "Missing details!" });
    const plan = await Plans.destroy({ where: { id: id } });
    if (!plan) return res.status(400).send({ msg: "Plan not found!" });
    return res.status(200).send({ msg: "Plan deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};