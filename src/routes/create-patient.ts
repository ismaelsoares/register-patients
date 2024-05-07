import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import { FastifyInstance } from "fastify";

export const createPatient = async (app: FastifyInstance) => {
  app.withTypeProvider<ZodTypeProvider>().post(
    "/pacientes",
    {
      schema: {
        body: z.object({
          name: z.string().min(4),
          dateBirth: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
          genre: z.string(),
          cpf: z.string().max(11),
          cellphone: z.number().int(),
          address: z.string(),
        }),
        response: {
          201: z.object({
            patient: z.string(),
          }),
        },
      },
    },
    async (request, reply) => {
      const { name, dateBirth, genre, cpf, cellphone, address } = request.body;

      const userPatientWithSameCPF = await prisma.patient.findUnique({
        where: {
          cpf,
        },
      });

      if (userPatientWithSameCPF !== null) {
        throw new Error("Patient with same CPF register!");
      }

      const patient = await prisma.patient.create({
        data: {
          name,
          dateBirth: new Date(dateBirth).toISOString(),
          genre,
          cpf,
          cellphone,
          address,
        },
      });
      return reply.status(201).send({ patient: patient.name });
    }
  );
};
