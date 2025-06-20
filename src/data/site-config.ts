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
        text: "I'm **Priyabrat Mishra**, a Machine Learning Engineer, dedicated to the realms of collaboration and artificial intelligence. My approach involves embracing intuition, conducting research, and engineering AI solutions as a catalyst for exceptional products. Feel free to explore some of my coding endeavors on <a href='https://github.com/PBMISRA95'>GitHub</a> or connect with me on <a href='https://www.linkedin.com/in/mishra-priyabrat/'>LinkedIn</a>.",
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
