const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: Number, required: true },
  role: { type: Array, required: true }
});

const saccoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  saccoCode: {
    type: String,
    required: true
  },
  address: {
    type: String
  },
  postal_code: {
    type: Number
  },
  registration_number: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true,
    unique: true
  },
  location: String,
  date_founded: {
    type: String,
    required: true
  },
  description: String,
  website: {
    type: String
  },
  created: {
    type: String,
    required: true
  },
  saccoLeaderFname: {
    type: String,
    requred: true
  },
  saccoLeaderLname: {
    type: String,
    requred: true
  },
  saccoLeaderPhone: {
    type: String,
    requred: true
  },
  status: {
    type: String,
    default: 'Active'
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

const riderSchema = new mongoose.Schema(
  {
    riderFname: {
      type: String,
      required: true
    },
    riderSurName: {
      type: String,
      required: true
    },
    riderLname: {
      type: String,
      required: true
    },
    riderTelNumber: {
      type: String,
      required: true,
      unique: true
    },
    drivingLicense: {
      type: String,
      required: true,
      unique: true
    },

    DLIssueDate: {
      type: String,
      required: true
    },
    DLExpDate: {
      type: String,
      required: true
    },
    riderPassportPhoto: {
      type: String,
      required: false
    },
    riderID: {
      type: String,
      required: true,
      unique: true
    },
    riderBase: {
      type: String,
      required: true
    },
    riderResidence: {
      type: String,
      required: true
    },
    bikeOwnerFname: {
      type: String,
      required: true
    },
    bikeOwnerLname: {
      type: String,
      required: true
    },
    bikeOwnerResidence: {
      type: String,
      reqiured: true
    },
    bikeOwnerID: {
      type: Number,
      required: true
    },
    bikeOwnerTelNumber: {
      type: String,
      required: true
    },
    motorBikeMake: {
      type: String,
      required: true
    },
    motorBikeBrand: {
      type: String,
      required: true
    },

    insuranceNumber: {
      type: String,
      // required: true,
      unique: true
    },
    insuranceIssueDate: {
      type: String,
      required: true
      // default: new Date(),
    },
    insuranceExpDate: {
      type: String,
      required: true
      // default: new Date(),
    },
    numberPlate: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: text => text.indexOf('K') === 0,
        message: 'Invalid number plate'
      }
    },
    // revisit

    created: {
      type: Date,
      default: new Date()
    },
    // react states
    status: {
      type: String,
      default: 'Active'
    },
    // TODO challenge on how to implement ratings on the riders
    ratings: {
      type: Number,
      min: 0,
      max: [5, 'Number of stars cannot exceed 5']
    },
    mysacco: {
      type: String
    },

    // THIS IS WHERE WE REFERENCE THE RIDER TO THEIR RESPECTIVE SACCOS
    sacco: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Sacco'
    }
  },
  { strict: false }
);

const smsSchema = new mongoose.Schema({
  sacco: {
    type: String
  },
  text: {
    type: String
  },
  from: {
    type: Number
  },
  action: {
    new: Boolean,
    read: Boolean
  },
  time: {
    type: Date
  },
  rider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Rider'
  }
});

const Login = mongoose.model('Login', loginSchema);
const Sacco = mongoose.model('Sacco', saccoSchema);
const Riders = mongoose.model('Riders', riderSchema);
const Messages = mongoose.model('Messages', smsSchema);
module.exports = { Login, Sacco, Riders, Messages };
