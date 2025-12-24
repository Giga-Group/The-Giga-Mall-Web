'use client';

import { Box, Typography } from '@mui/material';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProjectsHero from '@/components/sections/ProjectHero/ProjectsHero';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  { slug: 'gold-crest-views', title: 'Gold Crest Views', description: 'Luxury Residential Complex', image: '/p4.jpeg' },
  { slug: 'gold-crest-commercial', title: 'Gold Crest Commercial', description: 'Premium Commercial Complex', image: '/p12.jpeg' },
  { slug: 'giga-mall-extension', title: 'Giga Mall Extension', description: 'Mixed-Use Development', image: '/p7.jpeg' },
  { slug: 'giga-business-complex', title: 'Giga Business Complex', description: 'Corporate Hub', image: '/p26.jpeg' },
  { slug: 'central-palace-residence', title: 'Central Palace Residence', description: 'Ultra-Luxury Living', image: '/p15.jpeg' },
  { slug: 'giga-mall-wtc', title: 'Giga Mall WTC', description: 'World Trade Center', image: '/p6.jpeg' },
  { slug: 'gold-crest-bay-sands-karachi', title: 'Gold Crest Bay Sands - Karachi', description: 'Goldcrest Bay Sands – Karachi', image: '/p16.jpeg' },
  { slug: 'gold-crest-high-life-I', title: 'Gold Crest High Life I', description: 'Modern Residential Living', image: '/p14.jpeg' },
  { slug: 'gold-crest-high-life-II-and-III', title: 'Gold Crest High Life II & III', description: 'Modern Residential Living', image: '/p5.jpeg' },
];

// Add images for completed projects
const completedProjects = [
  { 
    title: 'Goldcrest Views 1, Dubai', 
    description: 'Goldcrest Views 1 is a 40-storey residential tower in JLT Cluster V, developed by Giga Group. It offers 376 ready units, from studios to penthouses, with top-tier amenities like a rooftop pool, gym, sauna, and sports bar. Located near metro stations, Dubai Marina, and Palm Jumeirah, it promises a luxurious yet convenient lifestyle.',
    image: '/p5.jpeg' // Add your image path
  },
  { 
    title: 'Goldcrest Views 2, Dubai', 
    description: 'Goldcrest Views 2 is a thirty-nine-story tower that offers a variety of freehold apartments and offices located in Jumeirah Lakes Towers, Dubai. The Tower, designed around a rectangular plan, offers a spectacular lakeside and island view from the apartments on all levels. The building has a bold, contemporary style with strong visual elements. The project has been completed and delivered.',
    image: '/p11.jpeg'
  },
  { 
    title: 'Goldcrest Executive, Dubai', 
    description: 'Goldcrest Executive is a 40-storey mixed-use tower in JLT, developed by Giga Group. It features offices on the lower 20 floors and residential studios and 1-bed apartments above. With top amenities like a gym, pool, high-speed elevators, and 24/7 security, it offers modern living and working spaces in Dubais vibrant freehold community.',
    image: '/p15.jpeg'
  },
  { 
    title: 'Canyon Views, DHA Islamabad', 
    description: 'Giga Group, in collaboration with Emaar, started residential projects spread over an area of 386 acres in DHA Islamabad Phase II Extension. The project is named Emaar Canyon Views, Islamabad. It comprises modern luxury villas and townhouses. The first phase of development has been completed, and villas are successfully handed over to the customers.',
    image: '/p8.jpeg'
  },
  { 
    title: 'Crescent Bay, DHA Karachi', 
    description: 'The Group partnered with Dubais Emaar Properties to launch CrescentBay, a groundbreaking 108-acre sea-reclaimed project in DHA Phase VIII, Karachi. This modern development includes high- and mid-rise residential and commercial towers, a shopping center, and a five-star beachfront hotel. Located near the DHA golf course, CrescentBay marks a significant milestone in Pakistans real estate landscape.',
    image: '/p9.jpeg'
  },
  { 
    title: 'Defence Residency, DHA Islamabad', 
    description: 'Defense Residency is a low-rise residential project comprising 2, 3, 4, and 5-room executive apartments located in DHA Phase-Il on the Main G.T. Road in Islamabad. The project includes 17 buildings with over 1,400 apartments. It offers modern amenities and caters to various family setups from middle and upper-class strata.',
    image: '/p17.jpeg'
  },
  { 
    title: 'Giga Boutique Mall, Islamabad', 
    description: 'Giga Boutique Mall, Islamabads newest, hippest mall! Giga West brings you the first water park of its kind in any mall in the Twin Cities. Located right next to Giga Mall in DHA, it features water slides and entertainment for all ages. Combining modern architecture with a variety of shopping and leisure options, its a landmark development.',
    image: '/p14.jpeg'
  },
  { 
    title: 'El Ceilo I and II Apartments Islamabad', 
    description: 'El Cielo is a luxury residential development in DHA II, Islamabad, consisting of two 12-floor towers with 320 apartments. The development includes three categories-premium, premium plus, and executive apartments. It is set to be handed over soon, continuing Gigas tradition of luxurious and secure residential projects.',
    image: '/p16.jpeg'
  },
  { 
    title: 'Lignum Tower, Islamabad', 
    description: 'Lignum Tower in DHA Phase 2, Giga City, Islamabad, offers stylish high-rise and terrace apartments designed for modern professionals. Featuring spacious dining rooms, ultra-modern kitchens, airy bedrooms, and luxury bathrooms, it blends elegance with comfort. Amenities include dedicated parking, CCTV security, intercom access, swift elevators, and 24/7 power backup, delivering a premium urban living experience.',
    image: '/p1.jpeg'
  },
  { 
    title: 'Giga Mall, Islamabad', 
    description: 'Giga Mall in Islamabad is a premier five-floor shopping destination by Giga Group, featuring over 200 local and international stores, dining, and entertainment. It offers modern amenities like spacious parking, Wi-Fi, banking services, prayer rooms, and accessibility features, serving both Islamabad and Rawalpindi.',
    image: '/p7.jpeg'
  },
  { 
    title: 'Pearl Residency, Karachi', 
    description: 'Pearl Residency consists of two state-of-the-art high-rise residential towers situated behind Aga Khan Hospital in Block 14 of Gulshan-e-Iqbal, Karachi. It is near the Civic Centre and Expo Centre. The project is fully completed.',
    image: '/p4.jpeg'
  },
  { 
    title: 'Al Najeebi Bazaar, Karimabad Karachi', 
    description: 'Al Najeebi Bazaar Karimabad is located at Shahra-e-Pakistan, Main Karimabad, Karachi. The 1511 square yards project features 475 shops (100,000 sq ft) and is fully completed and operational.',
    image: '/p2.jpeg'
  },
  { 
    title: 'Goldcrest Souq, Lahore', 
    description: 'Goldcrest Souq in Sector DD, Phase IV of DHA Lahore is a modern commercial tower featuring shops and offices. Once complete, it will include 4 basements and a ground plus 13-floor structure. The project is currently in its initial development phase and construction has started.',
    image: '/p5.jpeg'
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <ProjectsHero />

      {/* Featured Projects Section */}
      <Box sx={{ maxWidth: '1400px', margin: '0 auto', px: { xs: 2, md: 4 }, mt: 10 }}>
        <Typography sx={{ color: '#D19F3B', fontSize: '2rem', fontWeight: 600, textTransform: 'uppercase', mb: 1, textAlign: 'center' }}>
          Our Projects
        </Typography>
        <Typography sx={{ color: '#ffffff', borderRadius: '20px', backgroundColor: '#D19F3B', width: 'fit-content', fontSize: '1rem', fontWeight: 700, mb: 4, textAlign: 'center', padding: '4px 8px', margin: '0 auto' }}>
          Featured Projects
        </Typography>

        <Box
          sx={{
            display: 'grid',
            marginTop: 4,
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', lg: 'repeat(3, 1fr)' },
            gap: { xs: 4, md: 6 },
          }}
        >
          {projects.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} style={{ textDecoration: 'none' }}>
              <Box
                sx={{
                  position: 'relative',
                  height: { xs: '320px', md: '380px', lg: '420px' },
                  backgroundColor: '#000',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'transform 0.6s ease',
                  '&:hover': { transform: 'translateY(-6px)' },
                  '&:hover .overlay': { opacity: 1 },
                }}
              >
                {/* Background Image */}
                {project.image && (
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      zIndex: 1,
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.1) 70%, transparent 100%)',
                        zIndex: 2,
                      },
                    }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ 
                        objectFit: 'cover',
                        transition: 'transform 0.6s ease',
                      }}
                      className="project-image"
                    />
                  </Box>
                )}
                
                {/* Overlay Content */}
                <Box
                  className="overlay"
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    padding: '30px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    opacity: 1,
                    transition: 'opacity 0.6s ease',
                    zIndex: 3,
                    background: 'linear-gradient(to top, rgba(209,159,59,0.3), transparent 40%)',
                  }}
                >
                  <Typography sx={{ fontFamily: 'Georgia, "Times New Roman", Times, serif', fontSize: '1.4rem', fontWeight: 600, color: '#ffffff' }}>
                    {project.title}
                  </Typography>
                  <Typography sx={{ mt: 1, fontFamily: 'Georgia, "Times New Roman", Times, serif', fontSize: '14px', color: '#ffffff', maxWidth: '90%' }}>
                    {project.description}
                  </Typography>
                  <Typography sx={{ mt: 1.5, fontFamily: 'Georgia, "Times New Roman", Times, serif', fontSize: '12px', letterSpacing: '0.12em', color: '#ffffff', textTransform: 'uppercase', borderBottom: '1px solid #ffffff', width: 'fit-content' }}>
                    View Project
                  </Typography>
                </Box>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>

      {/* Completed Projects Section with Hover Effect */}
      <Box sx={{ maxWidth: '1400px', margin: '0 auto', px: { xs: 2, md: 4 }, mt: 16 }}>
        <Typography sx={{ color: '#D19F3B', fontSize: '2rem', fontWeight: 600, textTransform: 'uppercase', mb: 1, textAlign: 'center' }}>
          Our Delivered Projects
        </Typography>
        <Typography sx={{ color: '#ffffff', borderRadius: '20px', backgroundColor: '#D19F3B', width: 'fit-content', fontSize: '1rem', fontWeight: 700, mb: 4, textAlign: 'center', padding: '4px 8px', margin: '0 auto' }}>
          Completed Projects
        </Typography>
        <Box
          sx={{
            display: 'grid',
            marginTop: 4,
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', lg: 'repeat(3, 1fr)' },
            gap: { xs: 4, md: 6 },
          }}
        >
          {completedProjects.map((project, index) => (
            <Box
              key={index}
              sx={{
                position: 'relative',
                height: { xs: '320px', md: '380px', lg: '420px' },
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.4s ease',
                '&:hover': { 
                  transform: 'translateY(-4px)',
                  '& .content-overlay': {
                    opacity: 1,
                    backgroundColor: 'rgba(209, 159, 59, 0.95)',
                  },
                  '& .project-title': {
                    opacity: 0,
                  },
                  '& .project-description': {
                    opacity: 1,
                  }
                },
              }}
            >
              {/* Background Image for Completed Projects */}
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  zIndex: 1,
                  backgroundColor: '#D19F3B', // Fallback color
                }}
              >
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ 
                      objectFit: 'cover',
                    }}
                  />
                )}
              </Box>

              {/* Default Content (Always Visible) */}
              <Box
                className="project-title"
                sx={{
                  position: 'absolute',
                  inset: 0,
                  zIndex: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '30px',
                  backgroundColor: 'rgba(209, 159, 59, 0.7)',
                  transition: 'opacity 0.4s ease',
                  opacity: 1,
                }}
              >
                <Typography 
                  sx={{ 
                    fontFamily: 'Georgia, "Times New Roman", Times, serif', 
                    fontSize: '1.4rem', 
                    fontWeight: 600, 
                    color: '#ffffff',
                    textAlign: 'center',
                  }}
                >
                  {project.title}
                </Typography>
              </Box>

              {/* Hover Overlay with Description */}
              <Box
                className="content-overlay"
                sx={{
                  position: 'absolute',
                  inset: 0,
                  zIndex: 3,
                  padding: '30px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'rgba(209, 159, 59, 0)',
                  transition: 'all 0.4s ease',
                  opacity: 0,
                }}
              >
                <Typography
                  className="project-description"
                  sx={{
                    fontFamily: 'Georgia, "Times New Roman", Times, serif',
                    fontSize: '14px',
                    color: '#ffffff',
                    textAlign: 'center',
                    opacity: 0,
                    transition: 'opacity 0.4s ease 0.1s',
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: 8,
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  {project.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      <Footer />
    </>
  );
}