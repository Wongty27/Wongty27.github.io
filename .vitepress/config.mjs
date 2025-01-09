import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Toong Yang",
  description: "My portfolio built with VitePress",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Portfolios', link: '/e-commerce' },
      { text: 'Contact', link: '/contact' },
    ],

    sidebar: {
      '/portfolios/': [
        {
          text: 'Portfolios',
          items: [
            { text: 'Custom PC Shopping Website', link: '/e-commerce'},
          ] 
        }
      ]
    },

    // You can add any icon from simple-icons (https://simpleicons.org/):
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Wongty27' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/toong-yang-wong-618137185/' },
      { icon: 'files', link: '/WongToongYang_resume.pdf'}
    ],

    docFooter: {
      prev: false,
      next: false
    }
  },



  // rewrites: {
  //   'src/e-commerce.md': '/e-commerce.md',
  //   'src/about.md': '/about.md'
  // }
})
