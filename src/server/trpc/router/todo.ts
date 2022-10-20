import { router, publicProcedure } from "../trpc";
import { z } from "zod";

export const todoRouter = router({
  saveTodo: publicProcedure
    .input(z.object({ text: z.string() }))
    .mutation(({ input, ctx }) => {
      return ctx.prisma.todo.create({
        data: {
          active: false,
          text: input?.text,
          user: ctx.session?.user?.email,
        },
      });
    }),
  getAllTodos: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.todo.findMany();
  }),
  updateTodo: publicProcedure
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
  deleteTodo: publicProcedure
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
