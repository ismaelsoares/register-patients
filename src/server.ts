import { fastify } from "fastify";
import {
  serializerCompiler,
  validatorCompiler,
} from "fastify-type-provider-zod";
import { createPatient } from "./routes/create-patient";

const PORT = 9000;

const app = fastify({
  logger: true,
});

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createPatient);

app
  .listen({ port: PORT })
  .then(() => console.log(`Server fastify is burning on port ${PORT}`));
