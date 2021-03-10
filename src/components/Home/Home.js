import React, { useEffect, useState } from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import BannerImg from '../../Images/banner.png';
import Team from '../Team/Team';

const Home = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
            .then(response => response.json())
            .then(data => setTeams(data.teams))
    }, []);

    const bannerStyle = {
        filter: "brightness(60%)",
        maxHeight: "300px",
        objectFit: "cover"
    }

    return (
        <Container className="my-3">
            <Card className="text-white">
                <Card.Img src={BannerImg} alt="Card image" style={bannerStyle} />
                <Card.ImgOverlay className="d-flex justify-content-center align-items-center">
                    <Card.Title as={"h1"}>Soccer Club</Card.Title>
                </Card.ImgOverlay>
            </Card>
            <Row>
                {
                    teams.map(team => <Team key={team.idTeam} team={team} />)
                }
            </Row>
        </Container>
    );
};

export default Home;