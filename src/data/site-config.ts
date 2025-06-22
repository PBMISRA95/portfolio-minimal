export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
    target?: '_blank' | '_self';
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    website: 'https://priyabratmishra.com',
    title: 'Priyabrat Mishra',
    subtitle: 'Machine Learning Engineer',
    description: 'Machine Learning Engineer specializing in AI and data-driven solutions',
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        // {
        //    text: 'About',
        //    href: '/about'
        // }
        {
            text: 'Experience',
            href: '/experience',
        },
        {
            text: 'Skills',
            href: '/skills'
        },
        // {
        //    text: 'Projects',
        //    href: '/projects'
        // },
        {
            text: 'Education',
            href: '/education',
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        },
        {
            text: 'Resume',
            href: '/P_mishra_resume.pdf',
            target: '_blank'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    socialLinks: [
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/mishra-priyabrat/'
        },
        {
            text: 'GitHub',
            href: 'https://github.com/PBMISRA95'
        }
    ],
    hero: {
        title: 'Hi there!\n I am Priyabrat Mishra, glad to have you here!',
        text: "I'm a Machine Learning Engineer with a passion for creating AI solutions that solve real-world problems. The central Mantra of life for me is Balance – whether I'm training models, exploring new countries, hitting the yoga mat, cheering for my favorite teams, or trying out a new recipe. I believe that diverse experiences make us better engineers and more creative problem-solvers. Let's connect! Check out my code on <a href='https://github.com/PBMISRA95'>GitHub</a> or reach out on <a href='https://www.linkedin.com/in/mishra-priyabrat/'>LinkedIn</a>.",
        image: {
            src: '/Profile_pic_c.jpg',
            alt: 'My introduction picture'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
