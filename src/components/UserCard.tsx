import styled from 'styled-components';
import { GitHubUser } from '../types/githubUser';

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  max-width: 400px;
  margin: 20px auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0 auto 15px;
  display: block;
`;

const Name = styled.h2`
  text-align: center;
  margin-bottom: 10px;
  color: #0366d6;
`;

const Bio = styled.p`
  text-align: center;
  color: #586069;
  margin-bottom: 15px;
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 15px;
`;

const Stat = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-weight: bold;
  font-size: 18px;
`;

const StatLabel = styled.div`
  font-size: 14px;
  color: #586069;
`;

const ProfileLink = styled.a`
  display: block;
  text-align: center;
  color: #0366d6;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

export const UserCard = ({ user }: { user: GitHubUser }) => (
  <Card>
    <Avatar src={user.avatar_url} alt={`${user.login}'s avatar`} />
    <Name>{user.name || user.login}</Name>
    {user.bio && <Bio>{user.bio}</Bio>}
    <Stats>
      <Stat>
        <StatNumber>{user.public_repos}</StatNumber>
        <StatLabel>Repositories</StatLabel>
      </Stat>
      <Stat>
        <StatNumber>{user.followers}</StatNumber>
        <StatLabel>Followers</StatLabel>
      </Stat>
    </Stats>
    <ProfileLink href={user.html_url} target="_blank" rel="noopener noreferrer">
      View GitHub Profile
    </ProfileLink>
  </Card>
);