const { z } = require("zod");

const DogResponseSchema = z.object({
  message: z.any(),
  status: z.string(),
});

module.exports = { DogResponseSchema };
