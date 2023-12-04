const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Great Job , on time .',
    user_id: 2,
    post_id: 11
  },
  {
    comment_text: 'We expect more from you',
    user_id: 3,
    post_id: 14
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
