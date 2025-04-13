import Carousel from "react-multi-carousel"
import 'react-multi-carousel/lib/styles.css';

export const Languages = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skill" id="languages">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Languages</h2>
                            <br/>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <h5>Golang</h5>
                                </div>
                                <div className="item">
                                    <h5>R</h5>
                                </div>
                                <div className="item">
                                    <h5>C++ & C</h5>
                                </div>
                                <div className="item">
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <h5>Java</h5>
                                </div>
                                <div className="item">
                                    <h5>Kotlin</h5>
                                </div>
                                <div className="item">
                                    <h5>Prolog</h5>
                                </div>
                                <div className="item">
                                    <h5>Haskell</h5>
                                </div>
                                <div className="item">
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <h5>Rust</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      )
}