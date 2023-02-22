import { Container,Flex } from '@chakra-ui/react';
import React from 'react'
import '../HeaderPage/Sale.css'
const colors = [
  'https://logan.nnnow.com/content/dam/nnnow-project/15-feb-2023/Smashbox_TopBanner_Desktop.jpg',
  'https://logan.nnnow.com/content/dam/nnnow-project/08-feb-2023/se/ND_TopBannerdesktop.jpg',
  'https://logan.nnnow.com/content/dam/nnnow-project/22-feb-2023/DearDahlia_Topbannerdesktop(1).jpg',
  'https://logan.nnnow.com/content/dam/nnnow-project/14-feb-2023/DrDennis_HomePageBanner_Desktop.jpg',
  'https://logan.nnnow.com/content/dam/nnnow-project/22-feb-2023/SC_Holidaycollection_HPBanner_Desktop(1).jpg'
];
const delay = 2500;
const Sale = () => {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);
  return (
    <>
    <div className="slideshow" style={{marginTop:'25px',marginBottom:'50px'}}>
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((backgroundColor, index) => (
          <div
            className="slide"
            key={index}
            // style={{ backgroundColor }}
          ><img src={backgroundColor} alt="slid" width='100%' /></div>
        ))}
      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
    {/* Slider Done */}
    <Container maxW='container.xl' marginBottom='100px'>
      
    </Container>
    </>
  )
}

export default Sale