import Project from "../Project/Project";
import "./Portfolio.css";
import Slider from "react-slick";
import { Zoom } from "react-awesome-reveal";
function Portfolio(props) {
  let projects = props.projects;
  let settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
  };
  return (
      <div className='projects p-5'>
        <h2 className='text-center text-white'>Projects I'm Proud of</h2>
        <Slider {...settings}>
          {projects.map((p) => (
            <Project project={p} key={p.id} />
          ))}
        </Slider>
      </div>
  );
}

export default Portfolio;
