import { defineConfig } from 'sanity';
import { structuretools  } from '@sanity/structure';
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: 'c1vgrkvy',
  dataset: "production",
  title: "My Personal Website",
  apiVersion: "2023-03-09",
  basePath: "/admin",
  plugins: [structuretools()],
  schema: { types: schemas }
})

export default config