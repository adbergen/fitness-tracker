const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: () => new Date(),
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Select Resistance or Cardio",
        },
        name: {
          type: String,
          trim: true,
          required: "Exercise name required.",
        },
        duration: {
          type: Number,
          required: "Enter exercise duration time.",
        },
        distance: {
          type: Number,
          required: "Distance required.",
        },
        weight: {
          type: Number,
          required: "Weight required.",
        },
        sets: {
          type: Number,
          required: "Number of sets required.",
        },
        reps: {
          type: Number,
          required: "Number of reps required.",
        },
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

workoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
