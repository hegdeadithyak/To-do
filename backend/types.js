const zod = require("zod");

const createParse = zod.object({
  title: zod.string(),
  description: zod.string(),
});

const updateParse = zod.object({
  id: zod.string(),
});

module.exports = {
  createParse: createParse,
  updateParse: updateParse,
};
