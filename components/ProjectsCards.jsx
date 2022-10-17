import { Col } from "react-bootstrap"

export const ProjectCard = ({title,description,imgUrl,netUrl}) =>{
    return (
        <Col sm={6} md={4}>
        <div className="proj-imgbx">
            <a href={netUrl}><img src={imgUrl}/></a>
            <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{description}</span>
            </div>
        </div>
        </Col>
    )
}
