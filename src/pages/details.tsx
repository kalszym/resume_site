
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Art = styled.pre`
  font-family: 'Courier New', Courier, monospace;
  font-size: 16px;
  color: #00ff00;
  white-space: pre;
  line-height: 1.2;
  text-align: left;
  margin-bottom: 20px;
`;

const StyledLink = styled(Link)`
  color: #00ff00;
  text-decoration: none;
  margin-top: 20px;

  &:hover {
    text-decoration: underline;
  }
`;

const ExternalLink = styled.a`
  color: #00ff00;
  text-decoration: none;
  margin-top: 10px;
  font-size: 1.1rem;

  &:hover {
    text-decoration: underline;
  }
`;
const projectDescriptions: { [key: string]: { art: string;description: string; url: string } } = {
  project1: {
    art: `
          SimRail

    _____                 . . . . . o o o o o
  __|[_]|__ ___________ _______    ____      o
 |[] [] []| [] [] [] [] [_____(__  ][]]_n_n__][.
_|________|_[_________]_[________]_|__|________)<
  oo    oo 'oo      oo ' oo    oo 'oo 0000---oo\_
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    `,
    description: 'This is the project into which I put the most heart, created many new mechanics, improved the multiplayer mode, expanded the api and the operation of the server. I also contributed to the code of professional simulators for training train drivers.',
    url: 'https://store.steampowered.com/app/1422130/SimRail__The_Railway_Simulator/?l=polish',
  },

  project2: {
    art: `
            3Dragons

               \||/
                |  @___oo
      /,  /,   / (__,,,,|
     ) /^) ^/ _)
     )   /^/   _)
     )   _ /  / _)
 /  )/ / ||  | )_)
<  >      |(,,) )__)
 ||      /     )___)
 | |____(      )___) )___
  |______(_______;;; __;;;


    `,
    description: ' In this project I created new mechanics, scripts written in LUA, dealt with the creation of new characters and ported the game to low poly style.Directly from this project was created a new one related to the world of cryptocurrencies.',
    url: 'https://3dragons.games/',
  },
  project3: {
    art: `
    Sallar
  ███████ 
  ██      
  ███████ 
       ██ 
  ███████
    `,
    description: 'In this project I created both mini games related to the Sallar application and metaverse which can be viewed on the attached YouTube link, metaverse at this point has not gone into production.  https://www.youtube.com/watch?v=fJVDzym0LZs',
    url: 'https://sallar.io/',
  },
  project4: {
    art: `
        TON OF TRADES

  ████████  ██████  ████████ 
     ██    ██    ██    ██    
     ██    ██    ██    ██    
     ██    ██    ██    ██    
     ██     ██████     ██    
                         
    `,
    description: 'This is a game from scratch created by me, along with a backend in C#, the game is created in unity WebGl using also react embedding. This is a game in the Telegram app that can be played by joining the bot @TonOfTradesBot. ',
    url: 'https://tonoftrades.com/',
  },
 
};
const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectDescriptions[projectId || ''];

  if (!project) {
    return <Container>Project not found.</Container>;
  }

  return (
    <Container>
      <Art>{project.art}</Art>
      <p>{project.description}</p>
      <ExternalLink href={project.url} target="_blank" rel="noopener noreferrer">
        🔗 View Project
      </ExternalLink>
      <StyledLink to="/projects">⬅ Back to Projects</StyledLink>
    </Container>
  );
};

export default ProjectDetail;
