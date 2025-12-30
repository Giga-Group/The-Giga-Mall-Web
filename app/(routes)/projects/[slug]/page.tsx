"use client";

import { useState } from "react";
import { Box, Typography, Container, Button, Paper, TextField, MenuItem, useTheme, useMediaQuery } from "@mui/material";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProjectHero from "@/components/sections/ProjectHero/ProjectHero";
import { notFound } from "next/navigation";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  projects,
  Project,
} from "@/components/sections/ProjectHero/ProjectData";

// Define types for the data structures
interface WorldClassAmenity {
  name: string;
  description: string;
}

interface ConstructionUpdate {
  title: string;
  date: string;
  progress: string;
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Since projects is an object, access it directly
  const project = projects[params.slug as keyof typeof projects];

  if (!project) notFound();

  // Type assertion for TypeScript
  const typedProject = project as unknown as Project & {
    worldClassAmenities?: WorldClassAmenity[];
    constructionUpdates?: ConstructionUpdate[];
    designPhilosophyImage?: string;
    amenityImage1?: string;
    amenityImage2?: string;
    constructionImage1?: string;
    constructionImage2?: string;
  };

  // Embla carousel for mobile construction updates
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      slidesToScroll: 1,
      skipSnaps: false,
      dragFree: false,
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: false })]
  );

  // Embla carousel for mobile related projects
  const [relatedProjectsEmblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      slidesToScroll: 1,
      skipSnaps: false,
      dragFree: false,
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: false })]
  );

  // Embla carousel for mobile amenities section (World-Class Amenities & Why Choose)
  const [amenitiesCarouselRef] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      slidesToScroll: 1,
      skipSnaps: false,
      dragFree: false,
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: false })]
  );

  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    project: typedProject.title,
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <Header />

      <ProjectHero
        title={typedProject.title}
        description={typedProject.description}
        backgroundImage={typedProject.backgroundImage}
      />

      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 8 }, px: { xs: 1.5, sm: 2, md: 4 } }}>
        
        {/* Project Overview - Matching Image Design */}
        <Box sx={{ mb: { xs: 6, md: 8 }, width: { xs: "100%", md: "70%" }, margin: "0 auto" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 4, md: 6 },
            }}
          >
            {/* Left Content */}
            <Box
              sx={{
                width: { xs: "100%", md: "55%" },
                flexShrink: 0,
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem", lg: "3.5rem" },
                  fontWeight: 400,
                  color: "#D19F3B",
                  mb: { xs: 1, md: 1.5 },
                  lineHeight: 1.2,
                  fontFamily: '"Arvo", serif',
                }}
              >
                {typedProject.title}
              </Typography>

              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.6rem", lg: "1.8rem" },
                  fontWeight: 400,
                  color: "#D19F3B",
                  mb: { xs: 3, md: 4 },
                  fontFamily: '"Arvo", serif',
                }}
              >
                {typedProject.description}
              </Typography>

              <Box sx={{ mb: { xs: 3, md: 4 } }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "1rem", sm: "1.05rem", md: "1.1rem" },
                    lineHeight: 1.7,
                    color: "#333",
                    mb: { xs: 2, md: 3 },
                    fontFamily: '"Quicksand", sans-serif',
                  }}
                >
                  {typedProject.overview}
                </Typography>
              </Box>

              {typedProject.detailedContent && (
                <Box>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: "1rem", sm: "1.05rem", md: "1.1rem" },
                      lineHeight: 1.7,
                      color: "#333",
                      fontFamily: '"Quicksand", sans-serif',
                    }}
                  >
                    {typedProject.detailedContent}
                  </Typography>
                </Box>
              )}
            </Box>
            
            {/* Right Sidebar - Clean Design */}
            <Box
              sx={{
                width: { xs: "100%", md: "40%" },
                flexShrink: 0,
              }}
            >
              <Paper
                elevation={1}
                sx={{
                  p: { xs: 3, md: 4, lg: 5 },
                  backgroundColor: "#f9f9f9",
                  borderRadius: 1,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}
              >
                <Box sx={{ mt: { xs: 0, md: 0 } }}>
                  {typedProject.details &&
                    Object.entries(typedProject.details).map(([key, value]) => (
                      <Box
                        key={key}
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          mb: { xs: 2, md: 2.5 },
                          "&:last-child": {
                            mb: 0,
                          },
                        }}
                      >
                        <Typography
                          sx={{
                            fontWeight: 700,
                            color: "#333",
                            fontSize: { xs: "0.95rem", sm: "1rem", md: "1.05rem" },
                            flex: 1,
                            pr: 1,
                            fontFamily: '"Quicksand", sans-serif',
                          }}
                        >
                          {key}:
                        </Typography>
                        <Typography
                          sx={{
                            color: "#333",
                            fontSize: { xs: "0.95rem", sm: "1rem", md: "1.05rem" },
                            textAlign: "right",
                            flex: 1,
                            fontWeight: 400,
                            fontFamily: '"Quicksand", sans-serif',
                          }}
                        >
                          {value as string}
                        </Typography>
                      </Box>
                    ))}
                </Box>
              </Paper>
            </Box>
          </Box>
        </Box>

        {/* Design Philosophy - Image Only */}
        {typedProject.designPhilosophyImage && (
          <Box
            sx={{
              mb: { xs: 6, md: 8 },
              width: { xs: "100%", md: "70%" },
              margin: "0 auto",
              mt: { xs: 2, md: 4 },
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: { xs: "400px", md: "500px", lg: "600px" },
                position: "relative",
                borderRadius: 2,
                overflow: "hidden",
              }}
            >
              <Image
                src={typedProject.designPhilosophyImage}
                alt="Design Philosophy"
                fill
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Box>
        )}

        {/* Design Philosophy - Text Section */}
        {typedProject.designPhilosophy && (
          <Box sx={{ mb: { xs: 6, md: 8 }, width: { xs: "100%", md: "70%" }, margin: "0 auto" }}>
            <Typography
              variant="h3"
              sx={{
                color: "#D19F3B",
                fontSize: { xs: "1.8rem", sm: "2rem", md: "2.2rem", lg: "2.5rem" },
                fontWeight: 400,
                mb: { xs: 2, md: 3 },
                fontFamily: '"Arvo", serif',
              }}
            >
              Design Philosophy
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1rem", sm: "1.05rem", md: "1.1rem" },
                lineHeight: 1.7,
                color: "#000",
                fontFamily: '"Quicksand", sans-serif',
              }}
            >
              {typedProject.designPhilosophy}
            </Typography>
          </Box>
        )}

        {/* Premium Amenities & Features - Matching Image Design */}
        {typedProject.premiumAmenities && (
          <Box sx={{ mb: { xs: 6, md: 8 }, width: { xs: "100%", md: "70%" }, margin: "0 auto" }}>
            <Typography
              variant="h3"
              sx={{
                color: "#D19F3B",
                fontSize: { xs: "1.8rem", sm: "2rem", md: "2.2rem", lg: "2.5rem" },
                fontWeight: 400,
                mb: { xs: 2, md: 3 },
                fontFamily: '"Arvo", serif',
              }}
            >
              Premium Amenities & Features
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1rem", sm: "1.05rem", md: "1.1rem" },
                lineHeight: 1.7,
                color: "#000",
                mb: { xs: 3, md: 4 },
                fontFamily: '"Quicksand", sans-serif',
              }}
            >
              World-class facilities designed to enhance your lifestyle and provide exceptional comfort and convenience.
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 2, md: 2.5 } }}>
              {typedProject.premiumAmenities.map(
                (amenity: string, index: number) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                    }}
                  >
                    <CheckCircleIcon
                      sx={{
                        color: "#D19F3B",
                        mr: 2,
                        mt: 0.3,
                        fontSize: { xs: "1.2rem", md: "1.3rem" },
                        flexShrink: 0,
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: { xs: "1rem", sm: "1.05rem", md: "1.1rem" },
                        lineHeight: 1.7,
                        color: "#000",
                        fontFamily: '"Quicksand", sans-serif',
                      }}
                    >
                      {amenity}
                    </Typography>
                  </Box>
                )
              )}
            </Box>
          </Box>
        )}

        {/* Two Images Section with Text Columns */}
        {(typedProject.amenityImage1 || typedProject.amenityImage2) && (
          <Box sx={{ mb: { xs: 6, md: 8 }, width: { xs: "100%", md: "70%" }, margin: "0 auto" }}>
            {/* Mobile View - Restructured Layout */}
            {isMobile ? (
              <>
                {/* Carousel for World-Class Amenities and Why Choose Sections with Images */}
                {(typedProject.worldClassAmenities || typedProject.whyChoose) && (
                  <Box
                    sx={{
                      overflow: "hidden",
                      position: "relative",
                      width: "100%",
                      mb: 6,
                    }}
                    ref={amenitiesCarouselRef}
                  >
                    <Box
                      sx={{
                        display: "flex",
                      }}
                    >
                      {/* Slide 1: Image + World-Class Amenities Section */}
                      {typedProject.worldClassAmenities && (
                        <Box
                          sx={{
                            flex: "0 0 100%",
                            minWidth: 0,
                            width: "100%",
                            px: 1,
                          }}
                        >
                          {/* Image at Top */}
                          {typedProject.amenityImage2 && (
                            <Box
                              sx={{
                                width: "100%",
                                height: "300px",
                                position: "relative",
                                borderRadius: 2,
                                overflow: "hidden",
                                mb: 4,
                              }}
                            >
                              <Image
                                src={typedProject.amenityImage2}
                                alt="Amenity"
                                fill
                                sizes="100vw"
                                style={{ objectFit: "cover" }}
                              />
                            </Box>
                          )}
                          {/* World-Class Amenities Content */}
                          <Box>
                            <Typography
                              variant="h3"
                              sx={{
                                color: "#D19F3B",
                                fontSize: "1.8rem",
                                fontWeight: 400,
                                mb: 2,
                                fontFamily: '"Arvo", serif',
                              }}
                            >
                              World-Class Amenities
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: "1rem",
                                lineHeight: 1.7,
                                color: "#000",
                                mb: 3,
                                fontFamily: '"Quicksand", sans-serif',
                              }}
                            >
                              Comprehensive facilities that create a self-sustained premium community.
                            </Typography>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
                              {typedProject.worldClassAmenities.slice(0, 4).map(
                                (amenity: WorldClassAmenity, index: number) => (
                                  <Box
                                    key={index}
                                    sx={{
                                      display: "flex",
                                      alignItems: "flex-start",
                                    }}
                                  >
                                    <CheckCircleIcon
                                      sx={{
                                        color: "#D19F3B",
                                        mr: 2,
                                        mt: 0.3,
                                        fontSize: "1.2rem",
                                        flexShrink: 0,
                                      }}
                                    />
                                    <Box>
                                      <Typography
                                        sx={{
                                          fontSize: "1rem",
                                          lineHeight: 1.7,
                                          color: "#000",
                                          fontWeight: 600,
                                          fontFamily: '"Quicksand", sans-serif',
                                          mb: 0.5,
                                        }}
                                      >
                                        {amenity.name}
                                      </Typography>
                                      <Typography
                                        sx={{
                                          fontSize: "0.95rem",
                                          lineHeight: 1.6,
                                          color: "#000",
                                          fontFamily: '"Quicksand", sans-serif',
                                        }}
                                      >
                                        {amenity.description}
                                      </Typography>
                                    </Box>
                                  </Box>
                                )
                              )}
                            </Box>
                          </Box>
                        </Box>
                      )}

                      {/* Slide 2: Image + Why Choose Section */}
                      {typedProject.whyChoose && (
                        <Box
                          sx={{
                            flex: "0 0 100%",
                            minWidth: 0,
                            width: "100%",
                            px: 1,
                          }}
                        >
                          {/* Image at Top */}
                          {typedProject.designPhilosophyImage && (
                            <Box
                              sx={{
                                width: "100%",
                                height: "300px",
                                position: "relative",
                                borderRadius: 2,
                                overflow: "hidden",
                                mb: 4,
                              }}
                            >
                              <Image
                                src={typedProject.designPhilosophyImage}
                                alt="Design Philosophy"
                                fill
                                sizes="100vw"
                                style={{ objectFit: "cover" }}
                              />
                            </Box>
                          )}
                          {/* Why Choose Content */}
                          <Box>
                            <Typography
                              variant="h3"
                              sx={{
                                color: "#D19F3B",
                                fontSize: "1.8rem",
                                fontWeight: 400,
                                mb: 2,
                                fontFamily: '"Arvo", serif',
                              }}
                            >
                              Why Choose {typedProject.title}
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: "1rem",
                                lineHeight: 1.7,
                                color: "#000",
                                mb: 3,
                                fontFamily: '"Quicksand", sans-serif',
                              }}
                            >
                              Unique advantages that make this project the premier choice for luxury living in Islamabad.
                            </Typography>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
                              {typedProject.whyChoose.slice(0, 4).map(
                                (reason: string, index: number) => (
                                  <Box
                                    key={index}
                                    sx={{
                                      display: "flex",
                                      alignItems: "flex-start",
                                    }}
                                  >
                                    <CheckCircleIcon
                                      sx={{
                                        color: "#D19F3B",
                                        mr: 2,
                                        mt: 0.3,
                                        fontSize: "1.2rem",
                                        flexShrink: 0,
                                      }}
                                    />
                                    <Typography
                                      sx={{
                                        fontSize: "1rem",
                                        lineHeight: 1.7,
                                        color: "#000",
                                        fontFamily: '"Quicksand", sans-serif',
                                      }}
                                    >
                                      {reason}
                                    </Typography>
                                  </Box>
                                )
                              )}
                            </Box>
                          </Box>
                        </Box>
                      )}
                    </Box>
                  </Box>
                )}
              </>
            ) : (
              /* Desktop View - Original Layout */
              <>
                {/* Two Images */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 4,
                    mb: 8,
                  }}
                >
                  {/* Left Image */}
                  {typedProject.amenityImage1 && (
                    <Box
                      sx={{
                        width: "50%",
                        height: "400px",
                        position: "relative",
                        borderRadius: 2,
                        overflow: "hidden",
                      }}
                    >
                      <Image
                        src={typedProject.amenityImage1}
                        alt="Amenity"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </Box>
                  )}

                  {/* Right Image */}
                  {typedProject.amenityImage2 && (
                    <Box
                      sx={{
                        width: "50%",
                        height: "400px",
                        position: "relative",
                        borderRadius: 2,
                        overflow: "hidden",
                      }}
                    >
                      <Image
                        src={typedProject.amenityImage2}
                        alt="Amenity"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </Box>
                  )}
                </Box>

                {/* Two Columns Text Section */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 8,
                  }}
                >
                  {/* Left Column - World-Class Amenities */}
                  {typedProject.worldClassAmenities && (
                    <Box sx={{ width: "50%" }}>
                      <Typography
                        variant="h3"
                        sx={{
                          color: "#D19F3B",
                          fontSize: { md: "2.2rem", lg: "2.5rem" },
                          fontWeight: 400,
                          mb: 3,
                          fontFamily: '"Arvo", serif',
                        }}
                      >
                        World-Class Amenities
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "1.1rem",
                          lineHeight: 1.7,
                          color: "#000",
                          mb: 4,
                          fontFamily: '"Quicksand", sans-serif',
                        }}
                      >
                        Comprehensive facilities that create a self-sustained premium community.
                      </Typography>
                      <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
                        {typedProject.worldClassAmenities.slice(0, 4).map(
                          (amenity: WorldClassAmenity, index: number) => (
                            <Box
                              key={index}
                              sx={{
                                display: "flex",
                                alignItems: "flex-start",
                              }}
                            >
                              <CheckCircleIcon
                                sx={{
                                  color: "#D19F3B",
                                  mr: 2,
                                  mt: 0.3,
                                  fontSize: "1.3rem",
                                  flexShrink: 0,
                                }}
                              />
                              <Box>
                                <Typography
                                  sx={{
                                    fontSize: "1.1rem",
                                    lineHeight: 1.7,
                                    color: "#000",
                                    fontWeight: 600,
                                    fontFamily: '"Quicksand", sans-serif',
                                    mb: 0.5,
                                  }}
                                >
                                  {amenity.name}
                                </Typography>
                                <Typography
                                  sx={{
                                    fontSize: "1.05rem",
                                    lineHeight: 1.6,
                                    color: "#000",
                                    fontFamily: '"Quicksand", sans-serif',
                                  }}
                                >
                                  {amenity.description}
                                </Typography>
                              </Box>
                            </Box>
                          )
                        )}
                      </Box>
                    </Box>
                  )}

                  {/* Right Column - Why Choose */}
                  {typedProject.whyChoose && (
                    <Box sx={{ width: "50%" }}>
                      <Typography
                        variant="h3"
                        sx={{
                          color: "#D19F3B",
                          fontSize: { md: "2.2rem", lg: "2.5rem" },
                          fontWeight: 400,
                          mb: 3,
                          fontFamily: '"Arvo", serif',
                        }}
                      >
                        Why Choose {typedProject.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "1.1rem",
                          lineHeight: 1.7,
                          color: "#000",
                          mb: 4,
                          fontFamily: '"Quicksand", sans-serif',
                        }}
                      >
                        Unique advantages that make this project the premier choice for luxury living in Islamabad.
                      </Typography>
                      <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
                        {typedProject.whyChoose.slice(0, 4).map(
                          (reason: string, index: number) => (
                            <Box
                              key={index}
                              sx={{
                                display: "flex",
                                alignItems: "flex-start",
                              }}
                            >
                              <CheckCircleIcon
                                sx={{
                                  color: "#D19F3B",
                                  mr: 2,
                                  mt: 0.3,
                                  fontSize: "1.3rem",
                                  flexShrink: 0,
                                }}
                              />
                              <Typography
                                sx={{
                                  fontSize: "1.1rem",
                                  lineHeight: 1.7,
                                  color: "#000",
                                  fontFamily: '"Quicksand", sans-serif',
                                }}
                              >
                                {reason}
                              </Typography>
                            </Box>
                          )
                        )}
                      </Box>
                    </Box>
                  )}
                </Box>
              </>
            )}
          </Box>
        )}

        {/* Construction Updates - Matching Image Design */}
        {typedProject.constructionUpdates && (
          <Box sx={{ mb: { xs: 6, md: 8 }, width: { xs: "100%", md: "70%" }, margin: "0 auto" }}>
            <Typography
              variant="h3"
              sx={{
                color: "#D19F3B",
                fontSize: { xs: "1.8rem", sm: "2rem", md: "2.2rem", lg: "2.5rem" },
                fontWeight: 400,
                mb: { xs: 2, md: 3 },
                fontFamily: '"Arvo", serif',
              }}
            >
              Construction Updates
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1rem", sm: "1.05rem", md: "1.1rem" },
                lineHeight: 1.7,
                color: "#000",
                mb: { xs: 4, md: 6 },
                fontFamily: '"Quicksand", sans-serif',
              }}
            >
              Stay updated with the latest progress on {typedProject.title}. Our construction team is working diligently to deliver this landmark project.
            </Typography>

            {/* Mobile Carousel View */}
            {isMobile ? (
              <Box
                sx={{
                  overflow: "hidden",
                  position: "relative",
                  width: "100%",
                }}
                ref={emblaRef}
              >
                <Box
                  sx={{
                    display: "flex",
                  }}
                >
                  {typedProject.constructionUpdates.slice(0, 2).map(
                    (update: ConstructionUpdate, index: number) => (
                      <Box
                        key={index}
                        sx={{
                          flex: "0 0 100%",
                          minWidth: 0,
                          width: "100%",
                        }}
                      >
                        {/* Construction Card */}
                        <Box
                          sx={{
                            backgroundColor: "#fff",
                            borderRadius: 2,
                            overflow: "hidden",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                          }}
                        >
                          {/* Blue Header Strip */}
                          <Box
                            sx={{
                              backgroundColor: "#1a237e",
                              py: 1.5,
                              px: 2,
                            }}
                          >
                            <Typography
                              sx={{
                                color: "#fff",
                                fontSize: "0.9rem",
                                fontWeight: 500,
                                fontFamily: '"Quicksand", sans-serif',
                              }}
                            >
                              UAN: 051 111 786 123
                            </Typography>
                          </Box>

                          {/* Construction Image */}
                          {((index === 0 && typedProject.constructionImage1) || (index === 1 && typedProject.constructionImage2)) && (
                            <Box
                              sx={{
                                width: "100%",
                                height: "300px",
                                position: "relative",
                              }}
                            >
                              <Image
                                src={index === 0 ? typedProject.constructionImage1! : typedProject.constructionImage2!}
                                alt={`Construction Progress ${index + 1}`}
                                fill
                                sizes="100vw"
                                style={{ objectFit: "cover" }}
                              />
                            </Box>
                          )}

                          {/* Blue Footer Strip */}
                          <Box
                            sx={{
                              backgroundColor: "#1a237e",
                              py: 1.5,
                              px: 2,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              flexWrap: "wrap",
                              gap: 1,
                            }}
                          >
                            {/* GIGAGROUP Logo - Left */}
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                              <Typography
                                sx={{
                                  color: "#fff",
                                  fontSize: "0.8rem",
                                  fontWeight: 700,
                                  fontFamily: '"Arvo", serif',
                                }}
                              >
                                GIGAGROUP
                              </Typography>
                            </Box>

                            {/* Yellow Boxes - Center */}
                            <Box sx={{ display: "flex", gap: 1 }}>
                              <Box
                                sx={{
                                  backgroundColor: "#D19F3B",
                                  px: 1.5,
                                  py: 0.5,
                                  borderRadius: 1,
                                }}
                              >
                                <Typography
                                  sx={{
                                    color: "#000",
                                    fontSize: "0.7rem",
                                    fontWeight: 700,
                                    fontFamily: '"Arvo", serif',
                                  }}
                                >
                                  CONSTRUCTION UPDATES
                                </Typography>
                              </Box>
                              <Box
                                sx={{
                                  backgroundColor: "#D19F3B",
                                  px: 1.5,
                                  py: 0.5,
                                  borderRadius: 1,
                                }}
                              >
                                <Typography
                                  sx={{
                                    color: "#000",
                                    fontSize: "0.7rem",
                                    fontWeight: 700,
                                    fontFamily: '"Arvo", serif',
                                  }}
                                >
                                  {update.date?.toUpperCase() || "NOV 2025"}
                                </Typography>
                              </Box>
                            </Box>

                            {/* GoldCrest VIEWS Logo - Right */}
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                              <Typography
                                sx={{
                                  color: "#D19F3B",
                                  fontSize: "0.8rem",
                                  fontWeight: 700,
                                  fontFamily: '"Arvo", serif',
                                }}
                              >
                                GoldCrest VIEWS
                              </Typography>
                            </Box>
                          </Box>
                        </Box>

                        {/* Text Below Card */}
                        <Box sx={{ mt: 2 }}>
                          <Typography
                            sx={{
                              color: "#000",
                              fontSize: "1.1rem",
                              fontWeight: 700,
                              mb: 0.5,
                              fontFamily: '"Arvo", serif',
                            }}
                          >
                            Construction Progress {typedProject.title} {index + 1}
                          </Typography>
                          <Typography
                            sx={{
                              color: "#666",
                              fontSize: "0.9rem",
                              fontFamily: '"Quicksand", sans-serif',
                            }}
                          >
                            Latest Update
                          </Typography>
                        </Box>
                      </Box>
                    )
                  )}
                </Box>
              </Box>
            ) : (
              /* Desktop Grid View */
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 4,
                }}
              >
                {typedProject.constructionUpdates.slice(0, 2).map(
                  (update: ConstructionUpdate, index: number) => (
                    <Box
                      key={index}
                      sx={{ 
                        width: "50%",
                      }}
                    >
                      {/* Construction Card */}
                      <Box
                        sx={{
                          backgroundColor: "#fff",
                          borderRadius: 2,
                          overflow: "hidden",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                        }}
                      >
                        {/* Blue Header Strip */}
                        <Box
                          sx={{
                            backgroundColor: "#1a237e",
                            py: 1.5,
                            px: 2,
                          }}
                        >
                          <Typography
                            sx={{
                              color: "#fff",
                              fontSize: "1rem",
                              fontWeight: 500,
                              fontFamily: '"Quicksand", sans-serif',
                            }}
                          >
                            UAN: 051 111 786 123
                          </Typography>
                        </Box>

                        {/* Construction Image */}
                        {((index === 0 && typedProject.constructionImage1) || (index === 1 && typedProject.constructionImage2)) && (
                          <Box
                            sx={{
                              width: "100%",
                              height: "400px",
                              position: "relative",
                            }}
                          >
                            <Image
                              src={index === 0 ? typedProject.constructionImage1! : typedProject.constructionImage2!}
                              alt={`Construction Progress ${index + 1}`}
                              fill
                              sizes="50vw"
                              style={{ objectFit: "cover" }}
                            />
                          </Box>
                        )}

                        {/* Blue Footer Strip */}
                        <Box
                          sx={{
                            backgroundColor: "#1a237e",
                            py: 1.5,
                            px: 2,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            flexWrap: "wrap",
                            gap: 1,
                          }}
                        >
                          {/* GIGAGROUP Logo - Left */}
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Typography
                              sx={{
                                color: "#fff",
                                fontSize: "0.9rem",
                                fontWeight: 700,
                                fontFamily: '"Arvo", serif',
                              }}
                            >
                              GIGAGROUP
                            </Typography>
                          </Box>

                          {/* Yellow Boxes - Center */}
                          <Box sx={{ display: "flex", gap: 1 }}>
                            <Box
                              sx={{
                                backgroundColor: "#D19F3B",
                                px: 1.5,
                                py: 0.5,
                                borderRadius: 1,
                              }}
                            >
                              <Typography
                                sx={{
                                  color: "#000",
                                  fontSize: "0.8rem",
                                  fontWeight: 700,
                                  fontFamily: '"Arvo", serif',
                                }}
                              >
                                CONSTRUCTION UPDATES
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                backgroundColor: "#D19F3B",
                                px: 1.5,
                                py: 0.5,
                                borderRadius: 1,
                              }}
                            >
                              <Typography
                                sx={{
                                  color: "#000",
                                  fontSize: "0.8rem",
                                  fontWeight: 700,
                                  fontFamily: '"Arvo", serif',
                                }}
                              >
                                {update.date?.toUpperCase() || "NOV 2025"}
                              </Typography>
                            </Box>
                          </Box>

                          {/* GoldCrest VIEWS Logo - Right */}
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Typography
                              sx={{
                                color: "#D19F3B",
                                fontSize: "0.9rem",
                                fontWeight: 700,
                                fontFamily: '"Arvo", serif',
                              }}
                            >
                              GoldCrest VIEWS
                            </Typography>
                          </Box>
                        </Box>
                      </Box>

                      {/* Text Below Card */}
                      <Box sx={{ mt: 2 }}>
                        <Typography
                          sx={{
                            color: "#000",
                            fontSize: "1.2rem",
                            fontWeight: 700,
                            mb: 0.5,
                            fontFamily: '"Arvo", serif',
                          }}
                        >
                          Construction Progress {typedProject.title} {index + 1}
                        </Typography>
                        <Typography
                          sx={{
                            color: "#666",
                            fontSize: "1rem",
                            fontFamily: '"Quicksand", sans-serif',
                          }}
                        >
                          Latest Update
                        </Typography>
                      </Box>
                    </Box>
                  )
                )}
              </Box>
            )}
          </Box>
        )}

        {/* Related Projects Section */}
        <Box sx={{ mb: { xs: 6, md: 8 }, width: { xs: "100%", md: "70%" }, margin: "0 auto", mt: { xs: 8, md: 12 } }}>
          <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
            <Typography 
              sx={{ 
                color: "#D19F3B", 
                fontSize: { xs: "2rem", md: "2rem", lg: "2rem" }, 
                fontWeight: 400, 
                fontFamily: '"Arvo", serif',
                textAlign: "center",
              }}
            >
              Related Projects
            </Typography>
          </Box>

          {/* Mobile Carousel View */}
          {isMobile ? (
            <Box
              sx={{
                overflow: "hidden",
                position: "relative",
                width: "100%",
                mt: 6,
              }}
              ref={relatedProjectsEmblaRef}
            >
              <Box
                sx={{
                  display: "flex",
                }}
              >
                {Object.values(projects)
                  .filter((p) => p.slug !== params.slug)
                  .slice(0, 3)
                  .map((project) => (
                    <Box
                      key={project.slug}
                      sx={{
                        flex: "0 0 100%",
                        minWidth: 0,
                        width: "100%",
                        px: 1,
                      }}
                    >
                      <Link href={`/projects/${project.slug}`} style={{ textDecoration: "none" }}>
                        <Box
                          sx={{
                            position: "relative",
                            height: 420,
                            overflow: "hidden",
                            cursor: "pointer",
                            transition: "transform 0.4s ease",
                            borderRadius: 2,
                            "&:active": { 
                              transform: "scale(0.98)",
                            },
                          }}
                        >
                          <Image
                            src={project.backgroundImage}
                            alt={project.title}
                            fill
                            sizes="100vw"
                            style={{ objectFit: "cover" }}
                          />

                          {/* Overlay with Text */}
                          <Box
                            sx={{
                              position: "absolute",
                              inset: 0,
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              justifyContent: "center",
                              backgroundColor: "rgba(0, 0, 0, 0.5)",
                              padding: 3,
                            }}
                          >
                            <Typography
                              sx={{
                                color: "#ffffff",
                                fontSize: "1.5rem",
                                fontWeight: 700,
                                textAlign: "center",
                                fontFamily: '"Arvo", serif',
                                letterSpacing: "0.05em",
                                mb: 1,
                                maxWidth: "90%",
                              }}
                            >
                              {project.title}
                            </Typography>
                            <Typography
                              sx={{
                                color: "#ffffff",
                                fontSize: "1rem",
                                textAlign: "center",
                                fontFamily: '"Quicksand", sans-serif',
                                fontWeight: 400,
                                maxWidth: "85%",
                              }}
                            >
                              {project.description}
                            </Typography>
                          </Box>
                        </Box>
                      </Link>
                    </Box>
                  ))}
              </Box>
            </Box>
          ) : (
            /* Desktop Grid View */
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { md: "repeat(2,1fr)", lg: "repeat(3,1fr)" },
                gap: 6,
                mt: 6,
              }}
            >
              {Object.values(projects)
                .filter((p) => p.slug !== params.slug)
                .slice(0, 3)
                .map((project) => (
                  <Link key={project.slug} href={`/projects/${project.slug}`} style={{ textDecoration: "none" }}>
                    <Box
                      sx={{
                        position: "relative",
                        height: 420,
                        overflow: "hidden",
                        cursor: "pointer",
                        transition: "transform 0.4s ease",
                        "&:hover": { 
                          transform: "translateY(-6px)",
                          "& .hover-overlay": {
                            opacity: 1,
                            "&::before": {
                              opacity: 1,
                            },
                            "&::after": {
                              opacity: 1,
                            },
                          },
                        },
                      }}
                    >
                      <Image
                        src={project.backgroundImage}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1200px) 50vw, 33vw"
                        style={{ objectFit: "cover" }}
                      />

                      {/* Hover Overlay with Text and L-shaped Brackets */}
                      <Box
                        className="hover-overlay"
                        sx={{
                          position: "absolute",
                          inset: 0,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: "rgba(0, 0, 0, 0.45)",
                          opacity: 0,
                          transition: "opacity 0.4s ease",
                          // Top-left L-shaped bracket
                          "&::before": {
                            content: '""',
                            position: "absolute",
                            top: "20px",
                            left: "20px",
                            width: "120px",
                            height: "120px",
                            borderTop: "2px solid #ffffff",
                            borderLeft: "2px solid #ffffff",
                            opacity: 0,
                            transition: "opacity 0.4s ease",
                          },
                          // Bottom-right L-shaped bracket
                          "&::after": {
                            content: '""',
                            position: "absolute",
                            bottom: "20px",
                            right: "20px",
                            width: "120px",
                            height: "120px",
                            borderBottom: "2px solid #ffffff",
                            borderRight: "2px solid #ffffff",
                            opacity: 0,
                            transition: "opacity 0.4s ease",
                          },
                        }}
                      >
                        <Typography
                          className="project-title-text"
                          sx={{
                            color: "#ffffff",
                            fontSize: { md: "1.8rem", lg: "2rem" },
                            fontWeight: 700,
                            textAlign: "center",
                            fontFamily: '"Arvo", serif',
                            letterSpacing: "0.05em",
                            mb: 1,
                            maxWidth: "70%",
                            transition: "color 0.4s ease",
                            "&:hover": {
                              color: "#D19F3B",
                            },
                          }}
                        >
                          {project.title}
                        </Typography>
                        <Typography
                          className="project-description-text"
                          sx={{
                            color: "#ffffff",
                            fontSize: "1.2rem",
                            textAlign: "center",
                            fontFamily: '"Quicksand", sans-serif',
                            fontWeight: 400,
                            maxWidth: "80%",
                          }}
                        >
                          {project.description}
                        </Typography>
                      </Box>
                    </Box>
                  </Link>
                ))}
            </Box>
          )}
        </Box>

        {/* Contact Form Section */}
     <Box
  sx={{
    mb: { xs: 6, md: 8 },
    width: { xs: "100%", md: "70%" },
    margin: "0 auto",
    mt: { xs: 6, md: 12 },
  }}
>
  <Paper
    elevation={0}
    sx={{
      backgroundColor: "#f5f5f0",
      borderRadius: 2,
      p: { xs: 3, sm: 4, md: 5 },
    }}
  >
    {/* Heading */}
    <Typography
      variant="h3"
      sx={{
        color: "#D19F3B",
        fontSize: { xs: "1.6rem", sm: "1.8rem", md: "2.2rem", lg: "2.5rem" },
        fontWeight: 400,
        mb: { xs: 1.5, md: 2 },
        fontFamily: '"Arvo", serif',
        textAlign: "center",
        lineHeight: { xs: 1.2, md: 1.3 },
      }}
    >
      Interested in our projects?
    </Typography>

    {/* Subheading */}
    <Typography
      sx={{
        fontSize: { xs: "0.9rem", sm: "1rem", md: "1.05rem" },
        lineHeight: { xs: 1.5, md: 1.7 },
        color: "#333",
        mb: { xs: 3, md: 5 },
        fontFamily: '"Quicksand", sans-serif',
        textAlign: "center",
      }}
    >
      Share your details and our team will contact you with complete information, pricing, and booking options.
    </Typography>

    {/* Form */}
    <Box component="form" onSubmit={handleSubmit}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: { xs: 2.5, md: 4 },
          mb: 4,
        }}
      >
        {/* Left Column */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 2.5, md: 3 } }}>
          <TextField
            name="fullName"
            label="Full Name"
            value={formData.fullName}
            onChange={handleInputChange}
            required
            variant="standard"
            sx={{
              "& .MuiInputBase-input": { fontSize: { xs: "0.875rem", sm: "0.95rem", md: "1rem" } },
              "& .MuiInputLabel-root": { fontSize: { xs: "0.875rem", sm: "0.95rem", md: "1rem" } },
            }}
          />
          <TextField
            name="contactNumber"
            label="Contact Number"
            value={formData.contactNumber}
            onChange={handleInputChange}
            required
            variant="standard"
            sx={{
              "& .MuiInputBase-input": { fontSize: { xs: "0.875rem", sm: "0.95rem", md: "1rem" } },
              "& .MuiInputLabel-root": { fontSize: { xs: "0.875rem", sm: "0.95rem", md: "1rem" } },
            }}
          />
          <TextField
            name="message"
            label="Message (Optional)"
            value={formData.message}
            onChange={handleInputChange}
            multiline
            rows={4}
            variant="standard"
            sx={{
              "& .MuiInputBase-input": { fontSize: { xs: "0.875rem", sm: "0.95rem", md: "1rem" } },
              "& .MuiInputLabel-root": { fontSize: { xs: "0.875rem", sm: "0.95rem", md: "1rem" } },
            }}
          />
        </Box>

        {/* Right Column */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 2.5, md: 3 } }}>
          <TextField
            name="email"
            label="Email Address"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            variant="standard"
            sx={{
              "& .MuiInputBase-input": { fontSize: { xs: "0.875rem", sm: "0.95rem", md: "1rem" } },
              "& .MuiInputLabel-root": { fontSize: { xs: "0.875rem", sm: "0.95rem", md: "1rem" } },
            }}
          />
          <TextField
            name="project"
            label="Project"
            value={formData.project}
            onChange={handleInputChange}
            select
            variant="standard"
            SelectProps={{
              MenuProps: {
                PaperProps: {
                  sx: { "& .MuiMenuItem-root": { fontSize: { xs: "0.875rem", sm: "0.95rem" } } },
                },
              },
            }}
            sx={{
              "& .MuiInputBase-input": { fontSize: { xs: "0.875rem", sm: "0.95rem", md: "1rem" } },
              "& .MuiInputLabel-root": { fontSize: { xs: "0.875rem", sm: "0.95rem", md: "1rem" } },
            }}
          >
            {Object.values(projects).map((proj) => (
              <MenuItem key={proj.slug} value={proj.title}>
                {proj.title}
              </MenuItem>
            ))}
          </TextField>
        </Box>
      </Box>

      {/* Submit Button */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "#D19F3B",
            color: "#fff",
            px: { xs: 3, md: 6 },
            py: { xs: 1.25, md: 2 },
            fontSize: { xs: "0.95rem", md: "1.1rem" },
            fontWeight: 600,
            textTransform: "none",
            borderRadius: 2,
            "&:hover": { backgroundColor: "#b88d2f" },
          }}
        >
          Submit Interest
        </Button>
      </Box>
    </Box>
  </Paper>
</Box>


      </Container>

      <Footer />
    </>
  );
}