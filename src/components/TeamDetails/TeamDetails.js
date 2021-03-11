import { faCalendarCheck, faFlag, faFutbol, faVenusMars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import FemaleTeamImg from '../../Images/female.png';
import FacebookIcon from '../../Images/Icon/Facebook.png';
import TwitterIcon from '../../Images/Icon/Twitter.png';
import YouTubeIcon from '../../Images/Icon/YouTube.png';
import MaleTeamImg from '../../Images/male.png';

const TeamDetails = () => {
    const [team, setTeam] = useState({});

    const { teamId } = useParams();
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`)
            .then(response => response.json())
            .then(data => setTeam(data.teams[0]))
    }, [teamId, setTeam]);

    const {
        strStadiumThumb,
        strTeamBadge,
        strTeam,
        intFormedYear,
        strCountry,
        strGender,
        strSport,
        strStadiumDescription,
        strDescriptionEN,
        strFacebook,
        strTwitter,
        strYoutube
    } = team;

    const bannerStyle = {
        filter: "brightness(60%)",
        maxHeight: "300px",
        objectFit: "cover"
    }
    const bannerLogoStyle = {
        maxHeight: "220px",
        maxWidth: "220px",
        padding: "20px"
    }

    return (
        <>
            <Container className="my-3">
                <Card className="text-white">
                    <Card.Img src={strStadiumThumb} alt="Card image" style={bannerStyle} />
                    <Card.ImgOverlay className="d-flex justify-content-center align-items-center">
                        <Card.Img src={strTeamBadge} alt="Logo" style={bannerLogoStyle} />
                    </Card.ImgOverlay>
                </Card>
            </Container>
            <Container className="d-flex justify-content-center">
                <Card className="mb-3 shadow" style={{ maxWidth: "900px", background: "#450861" }}>
                    <Row className="g-0">
                        <Col md={7}>
                            <Card.Body style={{ color: "white", fontWeight: "600" }}>
                                <Card.Title as={"h3"} style={{ fontWeight: "700" }}>{strTeam}</Card.Title>
                                <Card.Text style={{ marginBottom: ".3rem" }}>
                                    <FontAwesomeIcon style={{ marginRight: ".9rem" }} icon={faCalendarCheck} />
                                    Founded: {intFormedYear}
                                </Card.Text>
                                <Card.Text style={{ marginBottom: ".3rem" }}>
                                    <FontAwesomeIcon style={{ marginRight: ".9rem" }} icon={faFlag} />
                                     Country: {strCountry}
                                </Card.Text>
                                <Card.Text style={{ marginBottom: ".3rem" }}>
                                    <FontAwesomeIcon style={{ marginRight: ".9rem" }} icon={faFutbol} />
                                    Sport Type: {strSport}
                                </Card.Text>
                                <Card.Text>
                                    <FontAwesomeIcon style={{ marginRight: ".9rem" }} icon={faVenusMars} />
                                    Gender: {strGender}
                                </Card.Text>
                            </Card.Body>
                        </Col>
                        <Col md={5}>
                            {
                                strGender === 'Male' ? <img className="w-100" src={MaleTeamImg} alt="..." />
                                                     : <img className="w-100" src={FemaleTeamImg} alt="..." />
                            }
                        </Col>
                    </Row>
                </Card>
            </Container>
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col style={{ maxWidth: "900px" }}>
                        <p>{strStadiumDescription}</p>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-center mt-3">
                    <Col style={{ maxWidth: "900px" }}>
                        <p>{strDescriptionEN}</p>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-center my-3">
                    <a href={`https://${strTwitter}`} target="_blank" rel="noopener noreferrer">
                        <img style={{ maxWidth: "50px" }} src={TwitterIcon} alt="" />
                    </a>
                    <a href={`https://${strFacebook}`} target="_blank" rel="noopener noreferrer">
                        <img style={{ maxWidth: "50px", margin: "0 10px" }} src={FacebookIcon} alt="" />
                    </a>
                    <a href={`https://${strYoutube}`} target="_blank" rel="noopener noreferrer">
                        <img style={{ maxWidth: "50px" }} src={YouTubeIcon} alt="" />
                    </a>
                </Row>
            </Container>
        </>
    );
};

export default TeamDetails;