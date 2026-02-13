function validateSchemaData(schema, data) {
  if (!schema || typeof schema.safeParse !== "function") {
    throw new Error("Invalid schema passed to validateSchema()");
  }

  const result = schema.safeParse(data);

  if (!result.success) {
    console.log("Zod issues:", result.error.issues);
  }

  expect(result.success).to.equal(true);
}

module.exports = { validateSchemaData };
