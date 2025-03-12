export function validationSchemaMiddleware(schema) {
  return (req, res, next) => {
    const { e } = schema.validate(req.body, { abortEarly: false });

    if (e) {
      const errors = e.details.map((detail) => detail.message);
      return res.status(422).send(errors);
    }

    next();
  };
}
