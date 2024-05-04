import { fastify } from "fastify";
import { z } from "zod";
const PORT = 9000;
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: ["query"],
});

const app = fastify({
  logger: true,
});

app.get("/", async (request, reply) => {
  const patients = await prisma.patient.findMany({
    where: {
      name: "Ismael Soares Doria",
    },
  });

  return JSON.stringify(patients);
});

app.post("/pacientes", async (request, reply) => {
  const createPatientSchema = z.object({
    name: z.string().min(5),
    dateBirth: z.string().date(),
    genre: z.string(),
    cpf: z.string().max(11),
    cellphone: z.number().int(),
    address: z.string(),
  });

  const data = createPatientSchema.parse(request.body);

  const patient = await prisma.patient.create({
    data: {
      name: data.name,
      dateBirth: new Date(data.dateBirth).toISOString(),
      genre: data.genre,
      cpf: data.cpf,
      cellphone: data.cellphone,
      address: data.address,
    },
  });
  return reply.status(201).send({ patient: patient.name });
});

app
  .listen({ port: PORT })
  .then(() => console.log(`Server fastify is burning on port ${PORT}`));
