'use client';

import { Box, Typography } from '@mui/material';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProjectsHero from '@/components/sections/ProjectHero/ProjectsHero';
import Link from 'next/link';
import Image from 'next/image';

/* =======================
   FEATURED PROJECTS
======================= */
const projects = [
  { slug: 'gold-crest-views', title: 'Gold Crest Views', description: 'Luxury Residential Complex', image: '/p4.jpeg' },
  { slug: 'gold-crest-commercial', title: 'Gold Crest Commercial', description: 'Premium Commercial Complex', image: '/p12.jpeg' },
  { slug: 'giga-mall-extension', title: 'Giga Mall Extension', description: 'Mixed-Use Development', image: '/p7.jpeg' },
  { slug: 'giga-business-complex', title: 'Giga Business Complex', description: 'Corporate Hub', image: '/p26.jpeg' },
  { slug: 'central-palace-residence', title: 'Central Palace Residence', description: 'Ultra-Luxury Living', image: '/p15.jpeg' },
  { slug: 'giga-mall-wtc', title: 'Giga Mall WTC', description: 'World Trade Center', image: '/p6.jpeg' },
  { slug: 'gold-crest-bay-sands-karachi', title: 'Gold Crest Bay Sands - Karachi', description: 'Luxury Seafront Living', image: '/p16.jpeg' },
  { slug: 'gold-crest-high-life-I', title: 'Gold Crest High Life I', description: 'Modern Residential Living', image: '/p14.jpeg' },
  { slug: 'gold-crest-high-life-II-and-III', title: 'Gold Crest High Life II & III', description: 'Modern Residential Living', image: '/p5.jpeg' },
];

/* =======================
   COMPLETED PROJECTS
======================= */
const completedProjects = [
  {
    title: 'Goldcrest Views 1, Dubai',
    description:
      'Goldcrest Views 1 is a 40-storey residential tower in JLT Cluster V, developed by Giga Group. It offers 376 ready units, from studios to penthouses, with top-tier amenities like a rooftop pool, gym, sauna, and sports bar. Located near metro stations, Dubai Marina, and Palm Jumeirah, it promises a luxurious yet convenient lifestyle.',
    image: '/p5.jpeg',
  },
  {
    title: 'Goldcrest Views 2, Dubai',
    description:
      'Goldcrest Views 2 is a thirty-nine-story tower that offers a variety of freehold apartments and offices located in Jumeirah Lakes Towers, Dubai. The Tower, designed around a rectangular plan, offers a spectacular lakeside and island view from the apartments on all levels. The building has a bold, contemporary style with strong visual elements. The project has been completed and delivered.',
    image: '/p11.jpeg',
  },
  {
    title: 'Goldcrest Executive, Dubai',
    description:
      'Goldcrest Executive is a 40-storey mixed-use tower in JLT, developed by Giga Group. It features offices on the lower 20 floors and residential studios and 1-bed apartments above. With top amenities like a gym, pool, high-speed elevators, and 24/7 security, it offers modern living and working spaces in Dubais vibrant freehold community.',
    image: '/p15.jpeg',
  },
  {
    title: 'Canyon Views, DHA Islamabad',
    description:
      'Giga Group, in collaboration with Emaar, started residential projects spread over an area of 386 acres in DHA Islamabad Phase II Extension. The project is named Emaar Canyon Views, Islamabad. It comprises modern luxury villas and townhouses. The first phase of development has been completed, and villas are successfully handed over to the customers.',
    image: '/p8.jpeg',
  },
  {
    title: 'Crescent Bay, DHA Karachi',
    description:
      'The Group partnered with Dubais Emaar Properties to launch CrescentBay, a groundbreaking 108-acre sea-reclaimed project in DHA Phase VIII, Karachi. This modern development includes high- and mid-rise residential and commercial towers, a shopping center, and a five-star beachfront hotel. Located near the DHA golf course, CrescentBay marks a significant milestone in Pakistans real estate landscape.',
    image: '/p9.jpeg',
  },
  { title: 'Defence Residency, DHA Islamabad', description: 'Defense Residency is a low-rise residential project comprising 2, 3, 4, and 5-room executive apartments located in DHA Phase-Il on the Main G.T. Road in Islamabad. The project includes 17 buildings with over 1,400 apartments. It offers modern amenities and caters to various family setups from middle and upper-class strata.', image: '/p17.jpeg' },
  { title: 'Giga Boutique Mall, Islamabad', description: 'Giga Boutique Mall, Islamabads newest, hippest mall! Giga West brings you the first water park of its kind in any mall in the Twin Cities. Located right next to Giga Mall in DHA, it features water slides and entertainment for all ages. Combining modern architecture with a variety of shopping and leisure options, its a landmark development.', image: '/p14.jpeg' },
  { title: 'El Ceilo I and II Apartments Islamabad', description: 'El Cielo is a luxury residential development in DHA II, Islamabad, consisting of two 12-floor towers with 320 apartments. The development includes three categories-premium, premium plus, and executive apartments. It is set to be handed over soon, continuing Gigas tradition of luxurious and secure residential projects.', image: '/p16.jpeg' },
  { title: 'Lignum Tower, Islamabad', description: 'Lignum Tower in DHA Phase 2, Giga City, Islamabad, offers stylish high-rise and terrace apartments designed for modern professionals. Featuring spacious dining rooms, ultra-modern kitchens, airy bedrooms, and luxury bathrooms, it blends elegance with comfort. Amenities include dedicated parking, CCTV security, intercom access, swift elevators, and 24/7 power backup, delivering a premium urban living experience.', image: '/p1.jpeg' },
  {
    title: 'Giga Mall, Islamabad',
    description:
      'One of the largest malls in Pakistan featuring shopping, dining, and entertainment.',
    image: '/p7.jpeg',
  },
  { title: 'Pearl Residency, Karachi', description: 'Pearl Residency consists of two state-of-the-art high-rise residential towers situated behind Aga Khan Hospital in Block 14 of Gulshan-e-Iqbal, Karachi. It is near the Civic Centre and Expo Centre. The project is fully completed.', image: '/p4.jpeg' }, { title: 'Al Najeebi Bazaar, Karimabad Karachi', description: 'Al Najeebi Bazaar Karimabad is located at Shahra-e-Pakistan, Main Karimabad, Karachi. The 1511 square yards project features 475 shops (100,000 sq ft) and is fully completed and operational.', image: '/p2.jpeg' }, { title: 'Goldcrest Souq, Lahore', description: 'Goldcrest Souq in Sector DD, Phase IV of DHA Lahore is a modern commercial tower featuring shops and offices. Once complete, it will include 4 basements and a ground plus 13-floor structure. The project is currently in its initial development phase and construction has started.', image: '/p5.jpeg' },
];

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <ProjectsHero />

      {/* =======================
          FEATURED PROJECTS
      ======================= */}
      <Box sx={{ maxWidth: '1400px', mx: 'auto', px: { xs: 2, md: 4 }, mt: 10 }}>
        <Typography sx={{ color: '#D19F3B', fontSize: '2rem', fontWeight: 600, textAlign: 'center' }}>
          Our Projects
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2,1fr)', lg: 'repeat(3,1fr)' },
            gap: 6,
            mt: 6,
          }}
        >
          {projects.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} style={{ textDecoration: 'none' }}>
              <Box
                sx={{
                  position: 'relative',
                  height: 420,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'transform 0.4s ease',
                  '&:hover': { transform: 'translateY(-6px)' },
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />

                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2))',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    p: 3,
                  }}
                >
                  <Typography sx={{ color: '#fff', fontSize: '1.3rem', fontWeight: 600 }}>
                    {project.title}
                  </Typography>
                  <Typography sx={{ color: '#fff', fontSize: '14px', mt: 1 }}>
                    {project.description}
                  </Typography>
                </Box>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>

      {/* =======================
          COMPLETED PROJECTS
      ======================= */}
      <Box sx={{ maxWidth: '1400px', mx: 'auto', px: { xs: 2, md: 4 }, mt: 16 }}>
        <Typography sx={{ color: '#D19F3B', fontSize: '2rem', fontWeight: 600, textAlign: 'center' }}>
          Our Delivered Projects
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2,1fr)', lg: 'repeat(3,1fr)' },
            gap: 6,
            mt: 6,
          }}
        >
          {completedProjects.map((project, index) => (
            <Box
              key={index}
              sx={{
                position: 'relative',
                height: 420,
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.4s ease',

               '&:hover': {
  transform: 'translateY(-4px)',
  '& .content-overlay': {
    opacity: 1,
    backgroundColor: 'rgba(209,159,59,0.95)',
  },
  '& .project-description': {
    opacity: 1,
  },
  '& .content-overlay::before': {
    opacity: 1,
  },
  '& .content-overlay::after': {
    opacity: 1,
  },
},

              }}
            >
              <Image src={project.image} alt={project.title} fill style={{ objectFit: 'cover' }} />

              {/* Default Title */}
              <Box
                className="project-title"
                sx={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(0, 0, 0, 0.16)',
                  transition: 'opacity 0.4s ease',
                }}
              >
                <Typography sx={{ color: '#fff', fontSize: '1.4rem', fontWeight: 600 }}>
                  {project.title}
                </Typography>
              </Box>

              {/* Hover Overlay */}
            <Box
  className="content-overlay"
  sx={{
    position: 'absolute',
    inset: 0,
    zIndex: 3,
    padding: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0,
    transition: 'all 0.4s ease',

    /* TOP-RIGHT CORNER */
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 20,
      right: 20,
      width: 40,
      height: 40,
      borderTop: '2px solid #ffffff',
      borderRight: '2px solid #ffffff',
      opacity: 0,
      transition: 'opacity 0.4s ease',
    },

    /* BOTTOM-LEFT CORNER */
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 20,
      left: 20,
      width: 40,
      height: 40,
      borderBottom: '2px solid #ffffff',
      borderLeft: '2px solid #ffffff',
      opacity: 0,
      transition: 'opacity 0.4s ease',
    },
  }}
>
  <Typography
    className="project-description"
    sx={{
      fontFamily: 'Georgia, "Times New Roman", Times, serif',
      fontSize: '16px',
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
