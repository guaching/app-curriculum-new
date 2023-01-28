import { pool } from "../db.js";

export const ping = async (req, res, next) => {
  const [result] = await pool.query('SELECT "Pong" AS result');
  res.json(result[0]);
};

export const inicio = async (req, res, rows) => {
  try {
    const [rows] = await pool.query("SELECT * FROM profile");
    res.render("index", {
      data: rows,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const viewsCV = async (req, res, rows) => {
  try {
    const [rows] = await pool.query("SELECT * FROM profile JOIN Studies JOIN Experiences JOIN References1 JOIN Skills");
    res.render("views", {
      data: rows,
    });

   

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const viewCV = async (req, res, rows) => {
  try { // JOIN experiences JOIN refer
    const [rows] = await pool.query("SELECT * FROM profile JOIN Studies WHERE id = ?", [
      req.params.id,
    ] );

    res.render("views", {
      data: rows,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
