"use client"
import CardTeam from '@/components/team/CardTeam'

import fabian from '../../../public/images/fabian.png'
import { StaticImageData } from 'next/image';

interface SocialMedia {
    github: string;
    linkedin: string;
    website: string;
}

interface Image {
    src: string;
    width: number;
    height: number;
    alt: string;
}

interface Integrant {
    name: string;
    rol: string;
    image: Image;
    socialMedia: SocialMedia;
    href: string;
    detailImage: StaticImageData;
    description: string;
}

const team: Integrant[] = [
    {   
        name: 'Fabián Carabajal',
        rol: 'Front End Developer',
        image: {
            src: 'https://i.postimg.cc/jSf5BSF0/11-1.jpg',
            width: 150,
            height: 150,
            alt: 'Fabián'
        },
        socialMedia: {
            github: 'https://www.github.com/fabio1501',
            linkedin: 'https://www.linkedin.com/fabian1501',
            website: 'https://fabidev.vercel.app',
        },
        href: 'fabian',
        detailImage: fabian,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {   
        name: 'Fabián Carabajal',
        rol: 'Front End Developer',
        image: {
            src: 'https://i.postimg.cc/jSf5BSF0/11-1.jpg',
            width: 150,
            height: 150,
            alt: 'Fabián'
        },
        socialMedia: {
            github: 'https://www.github.com/fabio1501',
            linkedin: 'https://www.linkedin.com/fabian1501',
            website: 'https://fabidev.vercel.app',
        },
        href: 'fabian',
        detailImage: fabian,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {   
        name: 'Fabián Carabajal',
        rol: 'Front End Developer',
        image: {
            src: 'https://i.postimg.cc/jSf5BSF0/11-1.jpg',
            width: 150,
            height: 150,
            alt: 'Fabián'
        },
        socialMedia: {
            github: 'https://www.github.com/fabio1501',
            linkedin: 'https://www.linkedin.com/fabian1501',
            website: 'https://fabidev.vercel.app',
        },
        href: 'fabian',
        detailImage: fabian,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
]

const pageAbout: React.FC = () => {

    return(
        <div className="bg-white text-black flex flex-col items-center gap-y-12 py-20">
            <div className='flex flex-col items-center gap-y-3'>
                <h2 className="text-4xl font-semibold">Nuestro equipo</h2>
                <div className='w-3/4 h-2 bg-pink-600'></div>
            </div>
            <div className="mx-auto flex flex-wrap w-3/4 self-center items-center justify-center gap-4">
                {
                    team.map((integrant) => {
                        return(
                            <CardTeam key={integrant.name} name={integrant.name} rol={integrant.rol} image={integrant.image} socialMedia={integrant.socialMedia} href={integrant.href}></CardTeam>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default pageAbout;
