import { createUploadthing } from "uploadthing/next";

const f = createUploadthing();
export const uploadRouter = {
  projectPictures: f({ image: { maxFileCount: 3 } }),
};
