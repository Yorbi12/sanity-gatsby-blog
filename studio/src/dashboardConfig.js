export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ed017240b936f6b2062b7da',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-4rnv64co',
                  apiId: '0e64c1a2-79b7-4577-953a-d2576d786871'
                },
                {
                  buildHookId: '5ed01724b4febb7e4f1fdea8',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-fxsq28f3',
                  apiId: '25682118-e29d-44ec-8f6a-cac934fb95da'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Yorbi12/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-fxsq28f3.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
