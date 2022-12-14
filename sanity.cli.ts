import {defineCliConfig} from 'sanity/cli'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANTIY_DATABASE!;

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  }
})
