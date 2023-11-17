import styles from '@/styles/Home.module.scss'
import { Metadata } from 'next';
import { ProjectTile } from './components/ProjectTile';
import { SiGithub, SiMastodon } from '@icons-pack/react-simple-icons';

export const metadata: Metadata = {
    title: "Hazel, that's me.",
    description: "",
    twitter: {
        title: "Hazel, that's me.",
        description: "",
        site: "hazelthats.me",
    }
}

const Home = () =>
    <div className={styles.main}>
        <h1><a href='./name'>Hazel</a>{", that's me."}</h1>

        <h2>Here's what I've worked on.</h2>

        <div className={styles.showcase}>
            <ProjectTile background='url(/projects/celesteia.jpg)' links={[
                <a href='//www.celesteia.com'>Visit celesteia.com</a>
            ]}>
                <h1>Celesteia</h1>
                <p>
                    A 2D sandbox game featuring procedural world generation and resource management systems, presented as my final high school 
                    project. The method of managing the project has changed the teaching methods of computer science at the school, acting as
                    an approachable project management method. This project won the school's award for Best Project in the Sciences.
                </p>
            </ProjectTile>
            <ProjectTile background='url(/projects/leafal.jpg)' links={[
                <a href='//www.leafal.io'>Visit leafal.io</a>
            ]}>
                <h1>leafal.io</h1>
                <p>
                    Set to be a next-generation hub for games, allowing users to purchase games, play games and interact with other players.
                </p>
            </ProjectTile>
            <ProjectTile background='url(/projects/tosc.jpg)' links={[
                <a href='//theopensource.company'>Visit theopensource.company</a>
            ]}>
                <h1>The Open Source Company</h1>
                <p>
                    A collective advocating for libre software and a web built on transparency, started by two of my friends and myself. With
                    The Open Source Company, I've designed the collective's website, Kards, Playrbase and recently brought leafal.io under its
                    banner.
                </p>
            </ProjectTile>
        </div>

        <h2>Here's where you can find me.</h2>
        <div className={styles.socials}>
            <a href='//github.com/leafeling' target='_blank'>
                <SiGithub />
            </a>
            <a href='//tech.lgbt/@leafeling' target='_blank'>
                <SiMastodon />
            </a>
        </div>
    </div>

export default Home;
