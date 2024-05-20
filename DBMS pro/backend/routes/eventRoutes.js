import express from "express";
import { Event } from "../models/EventSchema.js";
const route = express.Router();
route.post("/", async (req, res) => {
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
route.get("/", async (req, res) => {
  try {
    const events = await Event.find({});
    res.status(200).json({ counts: events.length, data: events });
  } catch (err) {
    console.log(err);
    res.status(500).send("An error occured while fetching the events");
  }
});
export default route;
