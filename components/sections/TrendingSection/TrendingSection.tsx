'use client';

import { useCallback, useEffect, useState, useRef } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
// import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import ArrowBackIosNew from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import useEmblaCarousel from 'embla-carousel-react';
import { useScroll, useTransform } from 'framer-motion';
import Card from '@/components/ui/Card';
import { TrendingItem } from '@/types';

const TrendingSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start center"]
  });

  const showVideoCard = useTransform(scrollYProgress, (latest) => latest > 0.9);

  const trendingItems: TrendingItem[] = [
    {
      image: '/trending1.jpg',
      category: 'GIGA MALL',
      title: '6th September Defence Day Celebration',
      dates: '6th September 2025'
    },
    {
      image: '/trending8.jpg',
      category: 'GIGA MALL',
      title: 'Eid ul Adha Celebration',
      dates: '15th March 2025'
    },
    // {
    //   image: '/trending2.jpg',
    //   category: 'GIGA MALL',
    //   title: 'Experience Style and Innovation',
    //   dates: '1st January 2025 - 31st December 2025'
    // },
    {
      image: '/trending3.jpg',
      category: 'GIGA MALL',
      title: '14th August Independence Day Celebration',
      dates: '14th August 2025'
    },
    // {
    //   image: '/trending5.jpg',
    //   category: 'GIGA MALL',
    //   title: 'Trending Now: Fashion Forward',
    //   dates: '1st January 2025 - 31st December 2025'
    // },
    // {
    //   image: '/trending7.jpg',
    //   category: 'GIGA MALL',
    //   title: 'Explore New Collections',
    //   dates: '1st January 2025 - 31st December 2025'
    // },
    
    // {
    //   image: '/trending9.jpg',
    //   category: 'GIGA MALL',
    //   title: 'Shop the Hottest Trends',
    //   dates: '1st January 2025 - 31st December 2025'
    // },
    {
      image: '/trending31.jpg',
      category: 'GIGA MALL',
      title: 'Giga Mall 5th Anniversary Celebration',
      dates: '1st January 2025 - 31st December 2025'
    },
    // {
    //   image: '/trending 11.jpg',
    //   category: 'GIGA MALL',
    //   title: 'Trending Collections 2025',
    //   dates: '1st January 2025 - 31st December 2025'
    // },
    {
      image: '/trending13.jpg',
      category: 'GIGA MALL',
      title: 'Mothers Day Celebration',
      dates: '18th May 2025'
    },
    // {
    //   image: '/trending14.jpg',
    //   category: 'GIGA MALL',
    //   title: 'Stay Ahead of the Trends',
    //   dates: '1st January 2025 - 31st December 2025'
    // },
    // {
    //   image: '/trending16.jpg',
    //   category: 'GIGA MALL',
    //   title: 'Latest Fashion Trends',
    //   dates: '1st January 2025 - 31st December 2025'
    // },
    {
      image: '/trending17.jpg',
      category: 'GIGA MALL',
      title: 'MOU Signing Ceremony With The Last Tribe',
      dates: '1st January 2025 - 31st December 2025'
    },
    {
      image: '/trending22.jpg',
      category: 'GIGA MALL',
      title: 'Umro Ayar Film Festival at Giga Mall ',
      dates: '1st January 2025 - 31st December 2025'
    },
    // {
    //   image: '/trending18.JPG',
    //   category: 'GIGA MALL',
    //   title: 'Explore Trending Styles',
    //   dates: '1st January 2025 - 31st December 2025'
    // },
    {
      image: '/trending 19.JPG',
      category: 'GIGA MALL',
      title: 'Giga Tribal Beats 2025',
      dates: '1st January 2025 - 31st December 2025'
    },
   
    // {
    //   image: '/trending20.JPG',
    //   category: 'GIGA MALL',
    //   title: 'Latest Trends and Fashion',
    //   dates: '1st January 2025 - 31st December 2025'
    // },
    // {
    //   image: '/trending21.JPG',
    //   category: 'GIGA MALL',
    //   title: 'Giga Tribal Beats 2025',
    //   dates: '10 December 2025'
    // }
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
      slidesToScroll: 1,
      skipSnaps: false,
      dragFree: false,
    }
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const [shouldShowVideoCard, setShouldShowVideoCard] = useState(false);
  const [prevShouldShowVideoCard, setPrevShouldShowVideoCard] = useState(false);

  useEffect(() => {
    const unsubscribe = showVideoCard.on('change', (latest) => {
      setShouldShowVideoCard(latest);
    });
    const initialValue = showVideoCard.get();
    setShouldShowVideoCard(initialValue);
    return () => unsubscribe();
  }, [showVideoCard]);

  useEffect(() => {
    if (shouldShowVideoCard && !prevShouldShowVideoCard && emblaApi) {
      requestAnimationFrame(() => {
        emblaApi.scrollTo(0, false);
        setSelectedIndex(0);
      });
    }
    setPrevShouldShowVideoCard(shouldShowVideoCard);
  }, [shouldShowVideoCard, prevShouldShowVideoCard, emblaApi]);
  
  const displayItems = shouldShowVideoCard 
    ? [
        {
          video: '/gigamallvideo.mp4',
          isVideo: true,
          image: '',
          category: '',
          title: '',
          dates: ''
        },
        ...trendingItems
      ]
    : trendingItems;

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      const selected = emblaApi.selectedScrollSnap();
      setSelectedIndex(selected % displayItems.length);
    };

    emblaApi.on('select', onSelect);
    onSelect();

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, displayItems.length]);

  return (
    <Box
      ref={sectionRef}
      sx={{
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        height: { xs: '100vh', sm: '120vh' },
        minHeight: { xs: '100vh', sm: '120vh' },
        paddingBottom: { xs: '40px', sm: '0' },
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontFamily: '"Arvo", serif',
          fontStyle: 'normal',
          fontWeight: 700,
          fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem', xl: '3.5rem' },
          textTransform: 'uppercase',
          textAlign: { xs: 'center', md: 'left' },
          marginBottom: { xs: '32px', sm: '40px', md: '30px', lg: '100px' },
          marginTop: { xs: '20px', sm: '24px', md: '40px' },
          paddingLeft: { xs: '16px', sm: '20px', md: '40px', lg: '130px' },
          paddingRight: { xs: '16px', sm: '20px', md: '40px' },
          color: '#D19F3B',
        }}
      >
        TRENDINGS AT GIGA MALL
      </Typography>

      <Box
        sx={{
          overflow: 'visible',
          width: '100%',
          padding: { xs: '0', md: '0', lg: '0' },
          marginBottom: '40px',
          '& .embla__viewport': {
            overflow: 'visible',
            width: '100%',
            paddingLeft: { xs: '16px', sm: '20px', md: '40px', lg: '40px' },
            paddingRight: { xs: '16px', sm: '20px', md: '40px', lg: '40px' }
          },
          '& .embla__container': {
            display: 'flex',
            touchAction: 'pan-y pinch-zoom'
          },
          '& .embla__slide': {
            flex: '0 0 auto',
            minWidth: {
              xs: `calc((100vw - 32px) / 1.15)`,
              sm: `calc((100vw - 40px) / 1.5)`,
              md: `calc((100vw - 80px) / 2.2)`,
              lg: `calc((100vw - 80px) / 2.8)`,
              xl: `calc((100vw - 80px) / 3.5)`
            },
            maxWidth: {
              xs: `calc((100vw - 32px) / 1.15)`,
              sm: `calc((100vw - 40px) / 1.5)`,
              md: `calc((100vw - 80px) / 2.2)`,
              lg: `calc((100vw - 80px) / 2.8)`,
              xl: `calc((100vw - 80px) / 3.5)`
            },
              marginRight: { xs: '12px', sm: '15px', md: '20px', lg: '20px' }
            },
            '& .embla__container > *': {
            marginRight: { xs: '15px', md: '20px', lg: '20px' },
            '&:last-child': {
              marginRight: { xs: '15px', md: '20px', lg: '20px' }
            }
          }
        }}
        ref={emblaRef}
      >
        <Box className="embla__container">
          {displayItems.map((item, index) => (
            <Box
              key={`${shouldShowVideoCard ? 'with-video' : 'no-video'}-${index}`}
              className="embla__slide"
            >
              <Card 
                variant="trending" 
                data={item} 
                isHeroVideo={item.isVideo && index === 0}
                showOverlay={true}
                showLogo={true}
              />
            </Box>
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: { xs: '0 16px', sm: '0 20px', md: '0 40px', lg: '0 130px' },
          marginTop: { xs: '24px', sm: '32px', md: '40px' },
          marginBottom: { xs: '0', sm: '0', md: '0', lg: '20px' }
        }}
      >
        <Box
  sx={{
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  }}
>
  <IconButton
    onClick={scrollPrev}
    sx={{
      width: { xs: 36, sm: 32 },
      height: { xs: 36, sm: 32 },
      borderRadius: '50%',
      backgroundColor: '#E5E5E5',
      border: '1px solid #e0e0e0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '&:hover': {
        backgroundColor: '#e0e0e0',
      },
    }}
  >
    <ArrowBackIosNew
      sx={{
        fontSize: { xs: 18, sm: 16, md: 20 },
        color: '#000000',
      }}
    />
  </IconButton>

  <IconButton
    onClick={scrollNext}
    sx={{
      width: { xs: 36, sm: 32 },
      height: { xs: 36, sm: 32 },
      borderRadius: '50%',
      backgroundColor: '#E5E5E5',
      border: '1px solid #e0e0e0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '&:hover': {
        backgroundColor: '#e0e0e0',
      },
    }}
  >
    <ArrowForwardIos
      sx={{
        fontSize: { xs: 18, sm: 16, md: 20 },
        color: '#000000',
      }}
    />
  </IconButton>
</Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          {displayItems.map((_, index) => {
            const isActive = index === selectedIndex;
            return (
              <Box
                key={index}
                onClick={() => scrollTo(index)}
                sx={{
                  width: isActive ? { xs: '20px', sm: '24px' } : '8px',
                  height: { xs: '6px', sm: '8px' },
                  borderRadius: isActive ? '4px' : '50%',
                  backgroundColor: isActive ? '#000000' : '#e0e0e0',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: isActive ? '#000000' : '#b0b0b0'
                  }
                }}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default TrendingSection;

