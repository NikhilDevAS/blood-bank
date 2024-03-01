const { Schema, models, model, default: mongoose } = require('mongoose');

const DonerSchema = new Schema(
  {
    name: { type: String, required: true },
    dob: { type: String, required: true },
    gender: { type: String, required: true },
    email: { type: String, required: true },
    place: { type: String, required: true },
    phone: { type: String, required: true },
    emergencyPhone: { type: String, required: true },
    group: { type: String, required: true },
    usertype: { type: String, default: 'doner' },
    password: { type: String, default: '' },
  },
  {
    timestamps: true,
  }
);

export const Doners = models.Doners || model('Doners', DonerSchema);
