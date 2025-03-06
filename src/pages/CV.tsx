
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const Header = styled.p`
   font-family: 'Courier New', Courier, monospace;
  font-size: 25px;
  color: #0862ff;
`;
const Info = styled.p`
   font-family: 'Courier New', Courier, monospace;
  font-size: 15px;
  color: white;
`;

const Art = styled.pre`
  font-family: 'Courier New', Courier, monospace;
  color: #ff00ff;
`;

const CV = () => {
  return (
    <Container>
      <h2>My Resume</h2>
      <Art>
        {`
        ┌──────────────────────────────┐
        │ Name: Kamil Bierski          │
        │ Role: Unity C# Developer     │
        │ Email: bierski.ka@gmail.com  │
        └──────────────────────────────┘
        `}
      </Art>

      <Header>Experience:</Header>
      <ul>
      <p>2023-06 - present --- SimRail Sp. z o.o , Katowice --- Unity C# Developer </p>
      <Info>My job here was to develop the SimRail train simulator, both in unity and in the development of api and simulator-related software for train driver training. </Info>
      <p></p>
      <p>2024-07 - present --- TonOfTrades --- Co Owner , Unity C# Developer </p>
      <Info> This is my project in which I created applications for Telegram related to the TON blockchain, I used web technologies combined with Unity.</Info>
      <p></p>
      <p>2022-01 - 2023-06 --- RonIT/Nakama, Poznań ---  Unity C# Developer</p>
      <Info>Here I focused on the development of the metaverse which was created from scratch. I was also seconded to work on the 3Dragons project. </Info>
      <p></p>
      <p>2021-03 - 2021-12 --- Astral Hodling, Kraków ---  Unity C# Developer</p>
        <Info>During my time at this company, I was involved in the development of mini-games and metaverse related to the “Sallar” cryptocurrency project. The games were created in Unity using the C# language.  </Info>
        <p></p>
          <p>2019-10 - 2021-09 --- Operatus Sp. z o.o. --- Bielsko-Biała: IT Support </p>
        <Info>In this company, I worked as IT support, maintaining computer hardware, and supporting the team with ongoing computer problems </Info>
      </ul>
      <Header>Education:</Header>
      <ul>
        <p>
          Computer Science and Econometrics --- Bachelor (engineer) ---
        College of Economics and Computer Science (WSEI), Kraków
        <p></p>
        </p>
        <p>
          Digital graphic process technician --- Technician ---
        Bielska Szkoła Przemysłowa, Bielsko-Biała
        </p>
      </ul>
      <Header>Languages:</Header>
      <ul>
        <p>Polish: native</p>
        <p></p>
        <p>English: intermediate</p>
      </ul>
      
      <Header>Skills:</Header>
      <ul>
        <p>Coding in C#</p>
        <p></p>
        <p>Extensive knowledge of unity game engine</p>
        <p></p>
        <p>Skill in using a Blender.</p>
        <p></p>
        <p>Skill in adobe and corel software.</p>
        <p></p>
        <p>Ability to use the git and Plastic version control system.</p>
        <p></p>
        <p>Knowledge of the Unreal Engine.</p>
        <p></p>
        <p>Skills in video editing software.</p>
      </ul>
      
    </Container>
  );
};

export default CV;
