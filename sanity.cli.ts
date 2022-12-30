import {defineCliConfig} from 'sanity/cli'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID! as string;
const dataset = process.env.NEXT_PUBLIC_SANTIY_DATABASE! as string;

export default defineCliConfig({
  api: {
    projectId,
    dataset
  }
})
