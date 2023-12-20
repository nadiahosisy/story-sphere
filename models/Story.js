const mongoose = require("mongoose");
const slugify = require("slugify");
const geocoder = require("../utils/geocoder");

const StorySchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: ['Please add a name'],
			unique: true,
			trim: true,
			maxlength: [50, 'Name can not be more than 50 characters'],
		},
		slug: String,
		createdAt: {
			type: Date,
			default: Date.now,
		},
		// user: {
		// 	type: mongoose.Schema.ObjectId,
		// 	ref: 'User',
		// 	required: true,
		// },
	},
	{
		toJSON: { virtuals: true },
		toObject: { virtuals: true },
	}
);

// Create story slug from the name
StorySchema.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

// Geocode & create location field
StorySchema.pre("save", async function (next) {
  const loc = await geocoder.geocode(this.address);
  this.location = {
    type: "Point",
    coordinates: [loc[0].longitude, loc[0].latitude],
    formattedAddress: loc[0].formattedAddress,
    street: loc[0].streetName,
    city: loc[0].city,
    state: loc[0].stateCode,
    zipcode: loc[0].zipcode,
    country: loc[0].countryCode,
  };

  // Do not save address in DB
  this.address = undefined;
  next();
});

// Cascade delete courses when a bootcamp is deleted
StorySchema.pre(
  "deleteOne",
  { document: true, query: false },
  async function (next) {
    console.log(`Courses being removed from bootcamp ${this._id}`);
    await this.model("Course").deleteMany({ bootcamp: this._id });
    next();
  }
);

// Reverse populate with virtuals
StorySchema.virtual("courses", {
  ref: "Course",
  localField: "_id",
  foreignField: "bootcamp",
  justOne: false,
});

module.exports = mongoose.model('Bootcamp', StorySchema);
