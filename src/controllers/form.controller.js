import { pool } from "../db.js";
import { inicio } from "./index.controller.js";

export const createsCV = async (req, res) => {
  try {
    res.render("perfil");
  } catch (err) {
    res.status(500).json(err);
  }
};

export const createCV = async (req, res) => {
  try {
    const { name, identific, date, phone, email, address, occupation } = req.body;

    const [rows] = await pool.query(
      "INSERT INTO profile (name, identific, date, phone, email, address, occupation) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [name, identific, date, phone, email, address, occupation]
    );

    console.log(rows);

    return res.render("skills");
  } catch (err) {
    res.status(500).json(err);
  }
};

export const cvSkills = async (req, res) => {
  try {
    const { Skills1, Skills2, Skills3, Skills4 } = req.body;

    const [rows] = await pool.query(
      "INSERT INTO Skills (Skills1, Skills2, Skills3, Skills4) VALUES (?, ?, ?, ?)",
      [Skills1, Skills2, Skills3, Skills4]
    );

    console.log(rows);

    return res.render("estudy");
  } catch (err) {
    res.status(500).json(err);
  }
};



export const cvEstudy = async (req, res) => {
  try {
    const { Studies1, Studies2, Studies3 } = req.body;

    const [rows] = await pool.query(
      "INSERT INTO Studies (Studies1, Studies2, Studies3) VALUES (?, ?, ?)",
      [Studies1, Studies2, Studies3]
    );
    console.log(rows);
    res.render("experiences");
  } catch (err) {
    res.status(500).json(err);
  }
};
export const cvExperiences = async (req, res) => {
  try {
    const {
      Experiences1,
      Experiences11,
      Experiences2,
      Experiences22,
      Experiences3,
      Experiences33,
      Experiences4,
      Experiences44,
    } = req.body;

    const [rows] = await pool.query(
      "INSERT INTO Experiences (Experiences1, Experiences11, Experiences2, Experiences22, Experiences3, Experiences33, Experiences4, Experiences44) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [
        Experiences1,
        Experiences11,
        Experiences2,
        Experiences22,
        Experiences3,
        Experiences33,
        Experiences4,
        Experiences44,
      ]
    );
    console.log(rows);
    res.render("refer");
  } catch (err) {
    res.status(500).json(err);
  }
};
export const cvRefer = async (req, res) => {
  try {
    const {
      References1,
      References11,
      References2,
      References22,
      References3,
      References33,
      References4,
      References43,
    } = req.body;

    const [rows] = await pool.query(
      "INSERT INTO References1 (References1, References11, References2, References22, References3, References33, References4, References43) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [
        References1,
        References11,
        References2,
        References22,
        References3,
        References33,
        References4,
        References43,
      ]
    );
    console.log(req.body);
    return inicio(req, res);
   
  } catch (err) {
    res.status(500).json(err);
  }
};
