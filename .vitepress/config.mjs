import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Toong Yang",
  description: "My portfolio built with VitePress",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Projects', link: '/e-commerce' },
      { text: 'Contact', link: '/contact' },
    ],

    sidebar: [
      {
        text: 'Projects',
        // collapsed: true,
        items: [
          { text: 'Custom PC Shopping Website', link: '/e-commerce' },
          { text: 'Job Connect', link: '/job-connect' },
        ] 
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Wongty27' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/toong-yang-wong-618137185/' },
      { icon: 'files', link: '/WongToongYang_resume.pdf'}
    ]
  },
    // You can add any icon from simple-icons (https://simpleicons.org/):
    
})
