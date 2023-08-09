import './packages.styles.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Packages = () => {
  const tourData = [
    {
        id: 1,
        title: "Seychelles Packages",
        info: "4 Night/5 Days",
        location: "Canada",
        price: "NGN 1,100,00",
        imageUrl: require('../imagess/image1.jpg')
    },
    {
        id: 1,
        title: "Seychelles Packages",
        info: "4 Night/5 Days",
        location: "Canada",
        price: "NGN 1,100,00",
        imageUrl: require('../imagess/image1.jpg')
    },
    {
        id: 1,
        title: "Seychelles Packages",
        info: "4 Night/5 Days",
        location: "Canada",
        price: "NGN 1,100,00",
        imageUrl: require('../imagess/image1.jpg')
    },
    {
        id: 1,
        title: "Seychelles Packages",
        info: "4 Night/5 Days",
        location: "Canada",
        price: "NGN 1,100,00",
        imageUrl: require('../imagess/image1.jpg')
    },
    {
        id: 1,
        title: "Seychelles Packages",
        info: "4 Night/5 Days",
        location: "Canada",
        price: "NGN 1,100,00",
        imageUrl: require('../imagess/image1.jpg')
    },
    {
        id: 1,
        title: "Seychelles Packages",
        info: "4 Night/5 Days",
        location: "Canada",
        price: "NGN 1,100,00",
        imageUrl: require('../imagess/image1.jpg')
    },
    {
        id: 1,
        title: "Seychelles Packages",
        info: "4 Night/5 Days",
        location: "Canada",
        price: "NGN 1,100,00",
        imageUrl: require('../imagess/image1.jpg')
    },
    {
        id: 1,
        title: "Seychelles Packages",
        info: "4 Night/5 Days",
        location: "Canada",
        price: "NGN 1,100,00",
        imageUrl: require('../imagess/image1.jpg')
    },
    {
        id: 1,
        title: "Seychelles Packages",
        info: "4 Night/5 Days",
        location: "Canada",
        price: "NGN 1,100,00",
        imageUrl: require('../imagess/image1.jpg')
    },
    {
        id: 1,
        title: "Seychelles Packages",
        info: "4 Night/5 Days",
        location: "Canada",
        price: "NGN 1,100,00",
        imageUrl: require('../imagess/image1.jpg')
    },
    {
        id: 1,
        title: "Seychelles Packages",
        info: "4 Night/5 Days",
        location: "Canada",
        price: "NGN 1,100,00",
        imageUrl: require('../imagess/image1.jpg')
    },
    {
        id: 1,
        title: "Seychelles Packages",
        info: "4 Night/5 Days",
        location: "Canada",
        price: "NGN 1,100,00",
        imageUrl: require('../imagess/image1.jpg')
    },
    {
        id: 1,
        title: "Seychelles Packages",
        info: "4 Night/5 Days",
        location: "Canada",
        price: "NGN 1,100,00",
        imageUrl: require('../imagess/image1.jpg')
    },
    ]
    

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return ( 
        <div className="package-comp">
            <div className="packageContainer">
                <h1>Top Most Popular Destinations</h1>
                <div className="">
                  <div {...settings}>
                      {tourData.map((data) => {
                        <div>
                          <div className='image-top'>
                            <img src={data.imageUrl} alt={data.id} width="200px" height="200px" />
                            <h2>{data.title}</h2>
                          </div>
                          <div className='image-bottom'>
                            <p>{data.price}</p>
                            <p>{data.location}</p>
                          </div>
                        </div>
                      })}
                  </div>
                </div>  
            </div>
        </div>
     );
} 
export default Packages;