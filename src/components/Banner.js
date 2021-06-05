import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Banner() {
    return (
        <div className="relative">
            <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20"/>
            <Carousel autoPlay infiniteLoop showStatus={false} showIndicators={false} showThumbs={false} interval={5000}>
            <a href="https://www.primevideo.com/detail/The-Family-Man/0H3DDB4KBJFNDCKKLHNRLRLVKQ" target="_blank">
            <div>
                <img loading="lazy" src="/img/fm2.jpg" alt="slideimg1" />
            </div>
            </a>

            <a href="https://www.amazon.in/gp/prime/pipeline/youngadult/ref=s9_acss_bw_cg_PYASEO_2a1_w?pf_rd_m=A1K21FY43GMZF8&pf_rd_s=merchandised-search-1&pf_rd_r=0RRN95D9ES76QZV1ZZ55&pf_rd_t=101&pf_rd_p=77e5b3c1-baa6-4edb-8741-ebb5771d5ff3&pf_rd_i=15307611031" target="_blank">
            <div>
                <img loading="lazy" src="/img/offerprime.jpg" alt="slideimg1" />
            </div>
            </a>

            <div>
                <img loading="lazy" src="/img/slide1.jpg" alt="slideimg1" />
            </div>
            <div>
                <img loading="lazy"src="/img/slide2.jpg" alt="slideimg2"/>
            </div>
            <div>
                <img loading="lazy"src="/img/slide3.jpg" alt="slideimg3"/>
            </div>
            </Carousel>
        </div>
    )
}

export default Banner
