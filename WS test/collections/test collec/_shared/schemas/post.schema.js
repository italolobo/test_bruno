const { z } = require("zod");

const PostSchema = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
  body: z.string(),
});

const PostArraySchema = z.array(PostSchema);

module.exports = { PostArraySchema, PostSchema };
