import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure'; // Оновлено назву

export default defineConfig({
  name: 'default',
  title: 'Renaissance Admin',

  projectId: 'ubcth3d0', 
  dataset: 'production',

  basePath: '/admin',

  plugins: [structureTool()], // Оновлено назву

  schema: {
    types: [
      {
        name: 'siteSettings',
        title: 'Налаштування сайту',
        type: 'document',
        fields: [
          {
            name: 'phone',
            title: 'Номер телефону',
            type: 'string',
          },
          {
            name: 'address',
            title: 'Адреса клініки',
            type: 'string',
          }
        ],
      },
    ],
  },
});