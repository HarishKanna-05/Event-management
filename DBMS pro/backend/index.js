import express from "express";
import mongoose from "mongoose";
import { Event } from "./models/EventSchema.js";
const app = express();
const PORT = 5000;
app.use(express.json());
app.post("/createEvent", async (req, res) => {
  try {
    if (
      !req.body.eventName ||
      !req.body.conductBy ||
      !req.body.eventDate ||
      !req.body.eventTime ||
      !req.body.venue ||
      !req.body.eventLink
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const { eventName, conductBy, eventDate, eventTime, venue, eventLink } =
      req.body;
    const event = new Event({
      eventName,
      conductBy,
      eventDate: new Date(eventDate),
      eventTime: new Date(eventTime),
      venue,
      eventLink,
    });
    await event.save();
    return res.status(200).send({ message: "Event Created Sucesssfully" });
  } catch (err) {
    console.log(err);
    res.status(500).send("An error occured while saving the event");
  }
});
app.get("/getEvents", async (req, res) => {
  try {
    const events = await Event.find({});
    res.status(200).json({ counts: events.length, data: events });
  } catch (err) {
    console.log(err);
    res.status(500).send("An error occured while fetching the events");
  }
});
app.listen(PORT, async () => {
  await mongoose
    .connect(
      "mongodb+srv://dhaya123:Dhaya%40123@cluster0.amircbx.mongodb.net/;"
    )
    .then(() => {
      console.log(`Server is running on port ${PORT}`);
      console.log("connected to database!");
    })
    .catch((err) => {
      console.log(err);
    });
});
