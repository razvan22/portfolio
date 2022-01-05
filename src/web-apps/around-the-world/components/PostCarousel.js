import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import{Container, Row, Col} from "react-bootstrap";


function PostCarousel(props) {
  const {imgList} = props;

  return (
		<Carousel keyboard={true} className="d-block w-100 ">
			{props.imgList.map((img) => (
				<Carousel.Item key={img.id}>
					<img
						style={{ height: "80vh" }}
						className="d-block w-100"
						src={`${process.env.REACT_APP_BACKEND_SERVER_IP}${img.url}`}
						alt="First slide"
					/>
				</Carousel.Item>
			))}
		</Carousel>
	);
}

export default PostCarousel
