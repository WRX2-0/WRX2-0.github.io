const { Post } = require('../models');

const postdata = [
  {
    title: 'IT Career State Fair',
    details: "Had denoting properly jointure you occasion.Had denoting properly jointure you occasion.",
    post_url: 'www.google.com',
    user_id: 10
  },
  {
    title: 'Art Major needed',
    details: "Had denoting properly jointure you occasion.Had denoting properly jointure you occasion.",
    post_url: 'www.google.com',
    user_id: 10
  },
  {
    title: 'Oraganizer ',
    details: "Had denoting properly jointure you occasion.Had denoting properly jointure you occasion.",
    post_url: 'www.google.com',
    user_id: 10
  }

];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
