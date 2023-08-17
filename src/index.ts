import * as express from "express";
import mongoose from "mongoose";
import { Request, Response } from "express";

mongoose
  .connect(`${process.env.DATABASE_URL!}/${process.env.DB_NAME}`)
  .then(() => {
    console.log("mongodb connected !");
  })
  .catch((err) => {
    console.log("error while connect: ", (err as Error).message);
  });

const app = express();

app.get("/", (_req: Request, res: Response) => {
  return res.json({
    message: "server working !",
  });
});

app.listen(3000, () => console.log("listening on port 3000!"));
