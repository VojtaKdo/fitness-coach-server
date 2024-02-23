import { NextFunction, Request, Response } from "express";
import db from "../models/index";
import { genSalt, hash, compare } from "bcrypt";

const User = db.users;
const AccountRole = db.accountRole;

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll();
    if (!users || users.length == 0)
      return res.status(500).send({ msg: "Users not found" });
    const ownerRole = await AccountRole.findOne({ where: { name: "owner" }});
    const ownerAccounts = await ownerRole.getUser();
    return res.status(200).send({
      msg: "Users found!",
      payload: users,
      ownerAccounts
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).send({ msg: "Missing details!" });
    const user = await User.findOne({ where: { id: id } });
    if (!user) return res.status(404).send({ msg: "User not found" });
    return res.status(200).send({ msg: "User Found!", payload: user });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).send({ msg: "Missing details!" });
    const user = await User.findOne({ where: { email: email } });
    if (!user) return res.status(404).send({ msg: "User not found" });
    const logged = await compare(password, user.password);

    if(logged){
      res.locals.email = email;
      next();
    }

    else return res.status(404).send({msg: "Wrong pasword or email!"});

  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { email, name, surname, password } = req.body;
    console.log(req.body);
    if (!email || !password || !name || !surname)
      return res.status(400).send({ msg: "Missing details!" });
    const user = await User.findOne({ where: { email: email } });
    if (user) return res.status(400).send({ msg: "User already exists!" });
    const salt = await genSalt(10);
    const passwordHash = await hash(password, salt);
    const createdUser = await User.create({
      name: name,
      surname: surname,
      email: email,
      password: passwordHash,
    });
    if (!createdUser)
      return res.status(500).send({ msg: "Something went wrong" });
    await createdUser.addUserRole("user");
    return res.status(201).send({ msg: "User created", payload: createdUser });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = req.body;
    if (!id || !data) return res.status(400).send({ msg: "Missing details!" });
    const user = await User.findOne({ where: { id: id } });
    if (!user) return res.status(500).send({ msg: "User not found" });
    for (const ops of data) {
      user[ops.propName] = ops.value;
    }

    const action = await user.save();
    if (!action) return res.status(500).send({ msg: "Something went wrong" });
    return res.status(200).send({ msg: " User updated!", payload: user });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).send({ msg: "Missing details!" });
    const user = await User.destroy({ where: { id: id } });
    if (!user) return res.status(400).send({ msg: "User not found!" });
    return res.status(200).send({ msg: "User deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
