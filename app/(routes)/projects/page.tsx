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
  { slug: 'gold-crest-views', title: 'Gold Crest Views', description: 'Luxury Residential Complex', image: '/projects/gcv.jpg' },
  { slug: 'gold-crest-commercial', title: 'Gold Crest Commercial', description: 'Premium Commercial Complex', image: '/projects/gcc.jpg' },
  { slug: 'giga-mall-extension', title: 'Giga Mall Extension', description: 'Mixed-Use Development', image: '/projects/gme.jpg' },
  { slug: 'giga-business-complex', title: 'Giga Business Complex', description: 'Corporate Hub', image: '/projects/gbc-grid.jpg' },
  { slug: 'central-palace-residence', title: 'Central Palace Residence', description: 'Ultra-Luxury Living', image: '/projects/cpr-grid.jpg' },
  { slug: 'giga-mall-wtc', title: 'Giga Mall WTC', description: 'World Trade Center', image: '/projects/wtc-grid.jpg' },
  // { slug: 'gold-crest-bay-sands-karachi', title: 'Gold Crest Bay Sands - Karachi', description: 'Luxury Seafront Living', image: '/p16.jpeg' },
  { slug: 'gold-crest-high-life-I', title: 'Goldcrest Highlife I', description: 'Modern Residential Living', image: '/projects/gc-highlife-grid-1.jpg' },
  { slug: 'gold-crest-high-life-II-and-III', title: 'Goldcrest Highlife II & III', description: 'Modern Residential Living', image: '/projects/gc-highlife-grid-2-3.jpg' },
];

/* =======================
   COMPLETED PROJECTS
======================= */
const completedProjects = [
  {
    title: 'Goldcrest Views 1, Dubai',
    description:
      'Goldcrest Views 1 is a 40-storey residential tower in JLT Cluster V, developed by Giga Group. It offers 376 ready units, from studios to penthouses, with top-tier amenities like a rooftop pool, gym, sauna, and sports bar. Located near metro stations, Dubai Marina, and Palm Jumeirah, it promises a luxurious yet convenient lifestyle.',
    image: '/projects/delivered-projects/gc-views-1-dubai.jpg',
  },
  {
    title: 'Goldcrest Views 2, Dubai',
    description:
      'Goldcrest Views 2 is a thirty-nine-story tower that offers a variety of freehold apartments and offices located in Jumeirah Lakes Towers, Dubai. The Tower, designed around a rectangular plan, offers a spectacular lakeside and island view from the apartments on all levels. The building has a bold, contemporary style with strong visual elements. The project has been completed and delivered.',
    image: '/projects/delivered-projects/gc-views-2-dubai.jpg',
  },
  {
    title: 'Goldcrest Executive, Dubai',
    description:
      'Goldcrest Executive is a 40-storey mixed-use tower in JLT, developed by Giga Group. It features offices on the lower 20 floors and residential studios and 1-bed apartments above. With top amenities like a gym, pool, high-speed elevators, and 24/7 security, it offers modern living and working spaces in Dubais vibrant freehold community.',
    image: '/projects/delivered-projects/gcv-exective-dubai.jpg',
  },
  {
    title: 'Canyon Views, DHA Islamabad',
    description:
      'Giga Group, in collaboration with Emaar, started residential projects spread over an area of 386 acres in DHA Islamabad Phase II Extension. The project is named Emaar Canyon Views, Islamabad. It comprises modern luxury villas and townhouses. The first phase of development has been completed, and villas are successfully handed over to the customers.',
    image: '/projects/delivered-projects/canyon-views.jpg',
  },
  {
    title: 'Crescent Bay, DHA Karachi',
    description:
      'The Group partnered with Dubais Emaar Properties to launch CrescentBay, a groundbreaking 108-acre sea-reclaimed project in DHA Phase VIII, Karachi. This modern development includes high- and mid-rise residential and commercial towers, a shopping center, and a five-star beachfront hotel. Located near the DHA golf course, CrescentBay marks a significant milestone in Pakistans real estate landscape.',
    image: '/projects/delivered-projects/cresent-bay.jpg',
  },
  { title: 'Defence Residency, DHA Islamabad', description: 'Defense Residency is a low-rise residential project comprising 2, 3, 4, and 5-room executive apartments located in DHA Phase-Il on the Main G.T. Road in Islamabad. The project includes 17 buildings with over 1,400 apartments. It offers modern amenities and caters to various family setups from middle and upper-class strata.', image: '/projects/delivered-projects/defence-resedency.jpg' },
  { title: 'Giga Boutique Mall, Islamabad', description: 'Giga Boutique Mall, Islamabads newest, hippest mall! Giga West brings you the first water park of its kind in any mall in the Twin Cities. Located right next to Giga Mall in DHA, it features water slides and entertainment for all ages. Combining modern architecture with a variety of shopping and leisure options, its a landmark development.', image: '/projects/delivered-projects/giga-boutique-mall.jpg' },
  { title: 'El Ceilo I and II Apartments Islamabad', description: 'El Cielo is a luxury residential development in DHA II, Islamabad, consisting of two 12-floor towers with 320 apartments. The development includes three categories-premium, premium plus, and executive apartments. It is set to be handed over soon, continuing Gigas tradition of luxurious and secure residential projects.', image: '/projects/delivered-projects/elcielo-1-and-2.jpg' },
  { title: 'Lignum Tower, Islamabad', description: 'Lignum Tower in DHA Phase 2, Giga City, Islamabad, offers stylish high-rise and terrace apartments designed for modern professionals. Featuring spacious dining rooms, ultra-modern kitchens, airy bedrooms, and luxury bathrooms, it blends elegance with comfort. Amenities include dedicated parking, CCTV security, intercom access, swift elevators, and 24/7 power backup, delivering a premium urban living experience.', image: '/projects/delivered-projects/lignum-tower.jpg' },
  {
    title: 'Giga Mall, Islamabad',
    description:
      'One of the largest malls in Pakistan featuring shopping, dining, and entertainment.',
    image: '/projects/delivered-projects/giga-mall.jpeg',
  },
  { title: 'Pearl Residency, Karachi', description: 'Pearl Residency consists of two state-of-the-art high-rise residential towers situated behind Aga Khan Hospital in Block 14 of Gulshan-e-Iqbal, Karachi. It is near the Civic Centre and Expo Centre. The project is fully completed.', image: '/projects/delivered-projects/pearl-residency.jpg' }, { title: 'Al Najeebi Bazaar, Karimabad Karachi', description: 'Al Najeebi Bazaar Karimabad is located at Shahra-e-Pakistan, Main Karimabad, Karachi. The 1511 square yards project features 475 shops (100,000 sq ft) and is fully completed and operational.', image: '/projects/delivered-projects/al-najeebi-bazaar.jpg' },   { title: 'Goldcrest Souq, Lahore', description: 'Goldcrest Souq in Sector DD, Phase IV of DHA Lahore is a modern commercial tower featuring shops and offices. Once complete, it will include 4 basements and a ground plus 13-floor structure. The project is currently in its initial development phase and construction has started.', image: '/projects/delivered-projects/gc-souq-lahore.jpg' },
];

// Add revalidation for ISR (Incremental Static Regeneration)
export const revalidate = 3600; // Revalidate every hour

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <ProjectsHero />

      {/* =======================
          FEATURED PROJECTS
      ======================= */}
      <Box sx={{ maxWidth: '1400px', mx: 'auto', px: { xs: 2, md: 4 }, mt: 10 }}>
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Typography 
            sx={{ 
              color: '#D19F3B', 
              fontSize: { xs: '0.9rem', md: '1rem' }, 
              fontWeight: 400, 
              fontFamily: '"Quicksand", sans-serif',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              mb: 1,
            }}
          >
            FEATURED WORKS
          </Typography>
          <Typography 
            sx={{ 
              color: '#1a237e', 
              fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' }, 
              fontWeight: 700, 
              fontFamily: '"Arvo", serif',
              textAlign: 'center',
            }}
          >
            Our Projects
          </Typography>
        </Box>

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
                  height: { xs: 420, sm: 420, md: 420 },
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'transform 0.4s ease',
                  '&:hover': { 
                    transform: 'translateY(-6px)',
                    '& .hover-overlay': {
                      opacity: 1,
                      '&::before': {
                        opacity: 1,
                      },
                      '&::after': {
                        opacity: 1,
                      },
                    },
                  },
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                  priority={false}
                />

                {/* Hover Overlay with Text and L-shaped Brackets */}
                <Box
                  className="hover-overlay"
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.45)',
                    opacity: 0,
                    transition: 'opacity 0.4s ease',
                    // Top-left L-shaped bracket
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: '20px',
                      left: '20px',
                      width: '120px',
                      height: '120px',
                      borderTop: '2px solid #ffffff',
                      borderLeft: '2px solid #ffffff',
                      opacity: 0,
                      transition: 'opacity 0.4s ease',
                    },
                    // Bottom-right L-shaped bracket
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: '20px',
                      right: '20px',
                      width: '120px',
                      height: '120px',
                      borderBottom: '2px solid #ffffff',
                      borderRight: '2px solid #ffffff',
                      opacity: 0,
                      transition: 'opacity 0.4s ease',
                    },
                  }}
                >
                  <Typography
                    className="project-title-text"
                    sx={{
                      color: '#ffffff',
                      fontSize: { xs: '1.8rem', md: '2.2rem', lg: '2.5rem' },
                      fontWeight: 700,
                      textAlign: 'center',
                      fontFamily: '"Arvo", serif',
                      letterSpacing: '0.05em',
                      mb: 1,
                      maxWidth: '70%',
                      transition: 'color 0.4s ease',
                      '&:hover': {
                        color: '#D19F3B',
                      },
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    className="project-description-text"
                    sx={{
                      color: '#ffffff',
                      fontSize: { xs: '1.1rem', md: '1.2rem' },
                      textAlign: 'center',
                      fontFamily: '"Quicksand", sans-serif',
                      fontWeight: 400,
                      maxWidth: '80%',
                    }}
                  >
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
      <Box sx={{ maxWidth: '1400px', mx: 'auto', px: { xs: 2, md: 4 }, mt: 16, pb: { xs: 6, md: 8, lg: 10 } }}>
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Typography 
            sx={{ 
              color: '#D19F3B', 
              fontSize: { xs: '0.9rem', md: '1rem' }, 
              fontWeight: 400, 
              fontFamily: '"Quicksand", sans-serif',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              mb: 1,
            }}
          >
            FEATURED WORKS
          </Typography>
          <Typography 
            sx={{ 
              color: '#1a237e', 
              fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' }, 
              fontWeight: 700, 
              fontFamily: '"Arvo", serif',
              textAlign: 'center',
            }}
          >
            Our Delivered Projects
          </Typography>
        </Box>

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
                height: { xs: 420, sm: 420, md: 420 },
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.4s ease',
                '&:hover': { 
                  transform: 'translateY(-6px)',
                  '& .hover-overlay': {
                    opacity: 1,
                    '&::before': {
                      opacity: 1,
                    },
                    '&::after': {
                      opacity: 1,
                    },
                  },
                },
              }}
            >
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
                priority={false}
              />

              {/* Hover Overlay with Text and L-shaped Brackets */}
              <Box
                className="hover-overlay"
                sx={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(26, 35, 126, 0.85)',
                  opacity: 0,
                  transition: 'opacity 0.4s ease',
                  padding: { xs: '24px', md: '32px', lg: '40px' },
                  // Top-left L-shaped bracket
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    width: '80px',
                    height: '80px',
                    borderTop: '2px solid #ffffff',
                    borderLeft: '2px solid #ffffff',
                    opacity: 0,
                    transition: 'opacity 0.4s ease',
                  },
                  // Bottom-right L-shaped bracket
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '20px',
                    right: '20px',
                    width: '80px',
                    height: '80px',
                    borderBottom: '2px solid #ffffff',
                    borderRight: '2px solid #ffffff',
                    opacity: 0,
                    transition: 'opacity 0.4s ease',
                  },
                }}
              >
                <Typography
                  className="project-title-text"
                  sx={{
                    color: '#ffffff',
                    fontSize: { xs: '1.1rem', md: '1.2rem', lg: '1.2rem' },
                    fontWeight: 600,
                    textAlign: 'center',
                    fontFamily: '"Arvo", serif',
                    letterSpacing: '0.02em',
                    mb: 2,
                    maxWidth: { xs: '85%', md: '75%', lg: '70%' },
                    lineHeight: 1.3,
                  }}
                >
                  {project.title}
                </Typography>
                <Typography
                  className="project-description-text"
                  sx={{
                    color: '#ffffff',
                    fontSize: { xs: '0.75rem', md: '0.85rem', lg: '0.9rem' },
                    textAlign: 'center',
                    fontFamily: '"Quicksand", sans-serif',
                    fontWeight: 400,
                    maxWidth: { xs: '90%', md: '90%', lg: '90%' },
                    lineHeight: 1.6,
                    maxHeight: { xs: '180px', md: '200px' },
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: { xs: 10, md: 12 },
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
