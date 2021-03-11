import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const League = (props) => {
    const { strTeamBadge, strTeam, strSport, idTeam } = props.team;

    const history = useHistory();
    const handleClick = teamId => {
        history.push(`/team/${teamId}`);
    }

    return (
        <Col className="text-center d-flex justify-content-center my-3">
            <Card className="shadow rounded border-0" style={{ width: '15rem' }}>
                <Card.Img className="p-4" variant="top" src={strTeamBadge} />
                <Card.Body>
                    <Card.Title style={{ fontWeight: "700" }}>{strTeam}</Card.Title>
                    <Card.Text>Sports type: {strSport}</Card.Text>
                    <Button onClick={() => handleClick(idTeam)} style={{ boxShadow: 'none' }} variant="primary">
                        Explore
                        <FontAwesomeIcon style={{ marginLeft: ".8rem" }} icon={faArrowRight} />
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default League;