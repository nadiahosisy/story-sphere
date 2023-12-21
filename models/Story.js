const mongoose = require("mongoose");
const slugify = require("slugify");
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
		text: {
			type: String,
			required: ['Please add story text'],
			unique: true,
			trim: true,
			maxlength: [1000, 'Text can not be more than 1000 characters'],
		},
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

// Cascade delete courses when a story is deleted
StorySchema.pre(
  "deleteOne",
  { document: true, query: false },
  async function (next) {
    console.log(`Courses being removed from story ${this._id}`);
    await this.model("Course").deleteMany({ story: this._id });
    next();
  }
);

// Reverse populate with virtuals
StorySchema.virtual("courses", {
  ref: "Course",
  localField: "_id",
  foreignField: "story",
  justOne: false,
});

module.exports = mongoose.model('Story', StorySchema);
