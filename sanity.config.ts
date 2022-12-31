import {DefaultDocument, defineConfig, StudioLogo} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { myTheme } from './theme';
import StudioNavbar from './components/StudioNavbar';
import Logo from './components/Logo';
import { getDefaultDocumentNode } from './structure';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID! as string;
const dataset = process.env.NEXT_PUBLIC_SANTIY_DATABASE! as string;

export default defineConfig({
  basePath: "/studio",
  name: 'Faith_Content_Studio',
  title: 'Faith Content Studio',

  projectId: 'rp9rwe05',
  dataset: 'production',

  plugins: [deskTool(
    {defaultDocumentNode:
      getDefaultDocumentNode,
    }
  ), visionTool()],

  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar
    }
  },
  theme: myTheme
})
