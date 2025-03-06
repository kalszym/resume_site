
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
  justify-items: center;
`;

const ArtStationLink = styled.a`
  color: #00ff00;
  text-decoration: none;
  font-size: 1.2rem;
  margin-top: 20px;

  &:hover {
    text-decoration: underline;
  }
`;
const Tile = styled.div`
  border: 2px dashed #00ff00;
  padding: 20px;
  text-align: center;
  font-family: 'Courier New', Courier, monospace;
  color: #00ff00;
  cursor: pointer;
  width: 100%;
  max-width: 200px;

  &:hover {
    background-color: #333;
  }
`;

const projects = [
  { id: 'project1', name: 'SimRail, Railway Simulator' },
  { id: 'project2', name: '3Dragons,Nakama' },
  { id: 'project3', name: 'Sallar Metaverse' },
  { id: 'project4', name: 'Ton Of Trades, Telegram app' },
];

const Projects = () => {
  return (
    <Container>
      <h2>My Portfolio</h2>
      <Grid>
        {projects.map((project) => (
          <Link to={`/projects/${project.id}`} key={project.id}>
            <Tile>{project.name}</Tile>
          </Link>
        ))}
      </Grid>
      <ArtStationLink
        href="https://www.artstation.com/kalszym"
        target="_blank"
        rel="noopener noreferrer"
      >
        🔗 Check out my ArtStation profile
      </ArtStationLink>
    </Container>
  );
};

export default Projects;
