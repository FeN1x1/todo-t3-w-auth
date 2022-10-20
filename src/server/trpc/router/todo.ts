import { router, publicProcedure } from "../trpc";
import { z } from "zod";

export const todoRouter = router({
  create: publicProcedure
    .input(z.object({ text: z.string() }))
    .mutation(({ input, ctx }) => {
      return ctx.prisma.todo.create({
        data: {
          active: false,
          text: input?.text,
          user: {
            connect: {
              id: ctx.session?.user?.id,
            },
          },
        },
      });
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.todo.findMany();
  }),
  update: publicProcedure
    .input(
      z.object({
        id: z.string(),
        text: z.string(),
        active: z.boolean(),
      })
    )
    .mutation(({ input, ctx }) => {
      return ctx.prisma.todo.update({
        where: {
          id: input.id,
        },
        data: {
          text: input.text,
          active: input.active,
        },
      });
    }),
  delete: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(({ input, ctx }) => {
      return ctx.prisma.todo.delete({
        where: {
          id: input.id,
        },
      });
    }),
});
