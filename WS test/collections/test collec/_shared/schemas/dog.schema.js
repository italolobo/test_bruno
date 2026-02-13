const { z } = require("zod");

const DogListSchema = z.object({
  message: z.record(z.string(), z.array(z.string())),
  status: z.string(),
});

module.exports = { DogListSchema };
