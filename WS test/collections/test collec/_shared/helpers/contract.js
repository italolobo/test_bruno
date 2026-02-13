function validateSchema(schema, data) {
  const result = schema.safeParse(data);
  if (!result.success) console.log(result.error.issues);
  expect(result.success).to.equal(true);
}

module.exports = { validateSchema };
