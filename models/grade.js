import mongoose from 'mongoose';

const gradeSchema = mongoose.Schema(
  {
    versionKey: false,
    name: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
      validate(value) {
        if (value < 0) throw new Error('Valor não pode ser negativo');
      },
    },
    lastModified: {
      type: Date,
      required: true,
      default: Date.now(),
    },
  },
  { versionKey: false }
);

const gradeModel = mongoose.model('grade', gradeSchema, 'grade');

export { gradeModel };
