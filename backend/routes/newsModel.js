import express from "express";
import { News } from "../models/newsModel.js";

export const router = express.Router();

router.post("/", async (req, res) => {
    try {

        const { category, count } = req.body;

        if (!category || !count) {
            return res.status(400).send({ message: "please fill out all the fields" });
        }

        const NewsCategory = {
            category: category,
            count: count
        }

        const news = await News.create(NewsCategory);
        return res.status(201).send(NewsCategory);

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

router.patch("/", async (req, res) => {
    try {
        console.log(req.body);
        const { category } = req.body;

        if (!category) {
            return res.status(400).json({ message: "Please fill out all the fields" });
        }

        const updatedNews = await News.findOneAndUpdate(
            { category: category }, 
            {
                $inc: { count: 1 }, 
                $setOnInsert: { category: category } 
            },
            { new: true, upsert: true }
        );

        return res.status(200).send(updatedNews);

    } catch (error) {
        console.error("Error updating count:", error.message);
        return res.status(500).json({ message: error.message });
    }
});



router.get("/news", async (req, res) => {
    try {
        const topCategory = await News.findOne().sort({ count: -1 }); // Sort in descending order

        if (!topCategory) {
            console.log("No categories found.");
            return null;
        }
        return res.status(201).send(topCategory);

    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ message: error.message });
    }
});
