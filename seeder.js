const fs = require("fs");
const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");

// import Course from "./models/Course.js";
// import User from "./models/User.js";
// import Review from "./models/Review.js";

dotenv.config({ path: "./config/config.env" });

const Story = require("./models/Story.js");
const User = require("./models/User.js");
const Review = require("./models/Review.js");

mongoose.connect(process.env.MONGO_URI);

const stories = JSON.parse(fs.readFileSync(`${__dirname}/_data/stories.json`, 'utf-8'));

const users = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/users.json`, "utf-8")
);

const reviews = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/reviews.json`, "utf-8")
);

// Import into DB
const importData = async () => {
  try {
    await Story.create(stories);
    await User.create(users);
    await Review.create(reviews);

    console.log("Data Imported...".green.inverse);
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

// Delete data
const deleteData = async () => {
  try {
    await Story.deleteMany();
    await User.deleteMany();
    await Review.deleteMany();

    console.log("Data Destroyed...".red.inverse);
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

if (process.argv[2] === "-i") {
  importData();
} else if (process.argv[2] === "-d") {
  deleteData();
}
