import { defineConfig } from 'vitepress'

export default defineConfig({
    title: "HCI Blog",
    description: "Project reflection for Human Computer Interaction @ETHZ",
    srcExclude: ['**/README.md', 'gitlab/**', 'gitlab-readme.md'],
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Blog', link: '/blog/', activeMatch: '/blog' },
            { text: 'Project', link: '/project/', activeMatch: '/project' },
            { text: 'Guide', link: '/guide/', activeMatch: '/guide' }
        ],

        sidebar: {
            '/blog': [
                {
                    text: 'Blog',
                    base: '/blog',
                    items: [
                        { text: 'Introduction', link: '/' },
                        { text: 'Needfinding (M1)', link: '/needfinding' },
                        { text: 'Ideation (M2)', link: '/ideation' },
                        { text: 'Lo-Fi Prototype (M2)', link: '/low-fidelity-prototype' },
                        { text: 'Hi-Fi Prototype', link: '/high-fidelity-prototype' },
                        { text: 'Final Presentation', link: '/final-presentation' },
                        { text: 'Evalutation', link: '/evaluation' },
                    ]
                }
            ],
            '/project': [
                {
                    text: 'Project',
                    base: '/project',
                    items: [
                        { text: 'Introduction', link: '/' },
                        { text: 'Links', link: '/links' },
                    ]
                }
            ],
            '/guide': [
                {
                    text: 'Development Guide',
                    base: '/guide',
                    items: [
                        { text: 'Introduction', link: '/' },
                        { text: 'Frontend', link: '/frontend' },
                        { text: 'Backend', link: '/backend' },
                    ]
                },
                {
                    text: 'WebDev Intro',
                    base: '/guide/webdev',
                    items: [
                        { text: 'Introduction', link: '/' },
                        { text: 'Frontend', link: '/frontend' },
                        { text: 'Backend', link: '/backend' },
                    ]
                },
                {
                    text: 'Tooling Guide',
                    base: '/guide/tooling',
                    items: [
                        { text: 'Introduction', link: '/' },
                        { text: 'Frontend', link: '/frontend' },
                        { text: 'Backend', link: '/backend' },
                    ]
                }
            ]
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/studyphoenix/studyphoenix.github.io' }
        ]
    }
})
