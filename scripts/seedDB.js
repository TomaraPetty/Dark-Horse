const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/darkhorse');
const bandSeed = [
  {
    name: 'Connector Compass',
    image: 'https://pyxis.nymag.com/v1/imgs/ed8/e95/904cc64feee1e3b9e5e1661b2c3e4027d7-3-beach-bunny.rsquare.w1200.jpg',
    video:
      'https://www.youtube.com/embed/eMmowsSea0s',
    bio: '',
    location: 'Los Angeles, CA',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
];
db.Band.remove({})
  .then(() => db.Band.collection.insertMany(bandSeed))
  .then((data) => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });












