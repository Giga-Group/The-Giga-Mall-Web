"use client";

import { useState } from "react";
import { Box, Typography, Container, Button, Paper, TextField, MenuItem } from "@mui/material";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProjectHero from "@/components/sections/ProjectHero/ProjectHero";
import { notFound } from "next/navigation";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Image from "next/image";
import Link from "next/link";
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
                  fontFamily: '"Jost", sans-serif',
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
                  fontFamily: '"Jost", sans-serif',
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
                    fontFamily: '"Muli", sans-serif',
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
                      fontFamily: '"Muli", sans-serif',
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
                            fontFamily: '"Muli", sans-serif',
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
                            fontFamily: '"Muli", sans-serif',
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
                fontFamily: '"Jost", sans-serif',
              }}
            >
              Design Philosophy
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1rem", sm: "1.05rem", md: "1.1rem" },
                lineHeight: 1.7,
                color: "#000",
                fontFamily: '"Muli", sans-serif',
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
                fontFamily: '"Jost", sans-serif',
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
                fontFamily: '"Muli", sans-serif',
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
                        fontFamily: '"Muli", sans-serif',
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
            {/* Two Images */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: { xs: 4, md: 4 },
                mb: { xs: 6, md: 8 },
              }}
            >
              {/* Left Image */}
              {typedProject.amenityImage1 && (
                <Box
                  sx={{
                    width: { xs: "100%", md: "50%" },
                    height: { xs: "300px", md: "400px" },
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
                    width: { xs: "100%", md: "50%" },
                    height: { xs: "300px", md: "400px" },
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
                flexDirection: { xs: "column", md: "row" },
                gap: { xs: 6, md: 8 },
              }}
            >
              {/* Left Column - World-Class Amenities */}
              {typedProject.worldClassAmenities && (
                <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                  <Typography
                    variant="h3"
                    sx={{
                      color: "#D19F3B",
                      fontSize: { xs: "1.8rem", sm: "2rem", md: "2.2rem", lg: "2.5rem" },
                      fontWeight: 400,
                      mb: { xs: 2, md: 3 },
                      fontFamily: '"Jost", sans-serif',
                    }}
                  >
                    World-Class Amenities
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "1rem", sm: "1.05rem", md: "1.1rem" },
                      lineHeight: 1.7,
                      color: "#000",
                      mb: { xs: 3, md: 4 },
                      fontFamily: '"Muli", sans-serif',
                    }}
                  >
                    Comprehensive facilities that create a self-sustained premium community.
                  </Typography>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 2, md: 2.5 } }}>
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
                              fontSize: { xs: "1.2rem", md: "1.3rem" },
                              flexShrink: 0,
                            }}
                          />
                          <Box>
                            <Typography
                              sx={{
                                fontSize: { xs: "1rem", sm: "1.05rem", md: "1.1rem" },
                                lineHeight: 1.7,
                                color: "#000",
                                fontWeight: 600,
                                fontFamily: '"Muli", sans-serif',
                                mb: 0.5,
                              }}
                            >
                              {amenity.name}
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: { xs: "0.95rem", sm: "1rem", md: "1.05rem" },
                                lineHeight: 1.6,
                                color: "#000",
                                fontFamily: '"Muli", sans-serif',
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
                <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                  <Typography
                    variant="h3"
                    sx={{
                      color: "#D19F3B",
                      fontSize: { xs: "1.8rem", sm: "2rem", md: "2.2rem", lg: "2.5rem" },
                      fontWeight: 400,
                      mb: { xs: 2, md: 3 },
                      fontFamily: '"Jost", sans-serif',
                    }}
                  >
                    Why Choose {typedProject.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "1rem", sm: "1.05rem", md: "1.1rem" },
                      lineHeight: 1.7,
                      color: "#000",
                      mb: { xs: 3, md: 4 },
                      fontFamily: '"Muli", sans-serif',
                    }}
                  >
                    Unique advantages that make this project the premier choice for luxury living in Islamabad.
                  </Typography>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 2, md: 2.5 } }}>
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
                              fontSize: { xs: "1.2rem", md: "1.3rem" },
                              flexShrink: 0,
                            }}
                          />
                          <Typography
                            sx={{
                              fontSize: { xs: "1rem", sm: "1.05rem", md: "1.1rem" },
                              lineHeight: 1.7,
                              color: "#000",
                              fontFamily: '"Muli", sans-serif',
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
                fontFamily: '"Jost", sans-serif',
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
                fontFamily: '"Muli", sans-serif',
              }}
            >
              Stay updated with the latest progress on {typedProject.title}. Our construction team is working diligently to deliver this landmark project.
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: { xs: 4, md: 4 },
              }}
            >
              {typedProject.constructionUpdates.slice(0, 2).map(
                (update: ConstructionUpdate, index: number) => (
                  <Box
                    key={index}
                    sx={{ 
                      width: { xs: "100%", md: "50%" },
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
                            fontSize: { xs: "0.9rem", md: "1rem" },
                            fontWeight: 500,
                            fontFamily: '"Muli", sans-serif',
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
                            height: { xs: "300px", md: "400px" },
                            position: "relative",
                          }}
                        >
                          <Image
                            src={index === 0 ? typedProject.constructionImage1! : typedProject.constructionImage2!}
                            alt={`Construction Progress ${index + 1}`}
                            fill
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
                              fontSize: { xs: "0.8rem", md: "0.9rem" },
                              fontWeight: 700,
                              fontFamily: '"Jost", sans-serif',
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
                                fontSize: { xs: "0.7rem", md: "0.8rem" },
                                fontWeight: 700,
                                fontFamily: '"Jost", sans-serif',
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
                                fontSize: { xs: "0.7rem", md: "0.8rem" },
                                fontWeight: 700,
                                fontFamily: '"Jost", sans-serif',
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
                              fontSize: { xs: "0.8rem", md: "0.9rem" },
                              fontWeight: 700,
                              fontFamily: '"Jost", sans-serif',
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
                          fontSize: { xs: "1.1rem", md: "1.2rem" },
                          fontWeight: 700,
                          mb: 0.5,
                          fontFamily: '"Jost", sans-serif',
                        }}
                      >
                        Construction Progress {typedProject.title} {index + 1}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#666",
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          fontFamily: '"Muli", sans-serif',
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
        )}

        {/* Related Projects Section */}
        <Box sx={{ mb: { xs: 6, md: 8 }, width: { xs: "100%", md: "70%" }, margin: "0 auto", mt: { xs: 8, md: 12 } }}>
          <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
            <Typography 
              sx={{ 
                color: "#D19F3B", 
                fontSize: { xs: "2rem", md: "2.5rem", lg: "3rem" }, 
                fontWeight: 400, 
                fontFamily: '"Jost", sans-serif',
                textAlign: "center",
              }}
            >
              Related Projects
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(2,1fr)", lg: "repeat(3,1fr)" },
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
                          fontSize: { xs: "1.8rem", md: "2.2rem", lg: "2.5rem" },
                          fontWeight: 700,
                          textAlign: "center",
                          fontFamily: '"Jost", sans-serif',
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
                          fontSize: { xs: "1.1rem", md: "1.2rem" },
                          textAlign: "center",
                          fontFamily: '"Muli", sans-serif',
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
        </Box>

        {/* Contact Form Section */}
        <Box sx={{ mb: { xs: 6, md: 8 }, width: { xs: "100%", md: "70%" }, margin: "0 auto", mt: { xs: 8, md: 12 } }}>
          <Paper
            elevation={0}
            sx={{
              backgroundColor: "#f5f5f0",
              borderRadius: 2,
              p: { xs: 3, md: 5 },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: "#D19F3B",
                fontSize: { xs: "1.8rem", sm: "2rem", md: "2.2rem", lg: "2.5rem" },
                fontWeight: 400,
                mb: 2,
                fontFamily: '"Jost", sans-serif',
                textAlign: "center",
              }}
            >
              Interested in our projects?
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "0.95rem", sm: "1rem", md: "1.05rem" },
                lineHeight: 1.7,
                color: "#333",
                mb: { xs: 4, md: 5 },
                fontFamily: '"Muli", sans-serif',
                textAlign: "center",
              }}
            >
              Share your details and our team will contact you with complete information, pricing, and booking options.
            </Typography>

            <Box component="form" onSubmit={handleSubmit}>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                  gap: { xs: 3, md: 4 },
                  mb: 4,
                }}
              >
                {/* Left Column */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  <TextField
                    name="fullName"
                    label="Full Name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    variant="standard"
                    sx={{
                      "& .MuiInput-underline:before": {
                        borderBottomColor: "#ccc",
                      },
                      "& .MuiInput-underline:hover:before": {
                        borderBottomColor: "#1a237e",
                      },
                      "& .MuiInput-underline:after": {
                        borderBottomColor: "#1a237e",
                      },
                      "& .MuiInputLabel-root": {
                        fontFamily: '"Muli", sans-serif',
                        color: "#333",
                      },
                      "& .MuiInputBase-input": {
                        fontFamily: '"Muli", sans-serif',
                        color: "#333",
                      },
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
                      "& .MuiInput-underline:before": {
                        borderBottomColor: "#ccc",
                      },
                      "& .MuiInput-underline:hover:before": {
                        borderBottomColor: "#1a237e",
                      },
                      "& .MuiInput-underline:after": {
                        borderBottomColor: "#1a237e",
                      },
                      "& .MuiInputLabel-root": {
                        fontFamily: '"Muli", sans-serif',
                        color: "#333",
                      },
                      "& .MuiInputBase-input": {
                        fontFamily: '"Muli", sans-serif',
                        color: "#333",
                      },
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
                      "& .MuiInput-underline:before": {
                        borderBottomColor: "#ccc",
                      },
                      "& .MuiInput-underline:hover:before": {
                        borderBottomColor: "#1a237e",
                      },
                      "& .MuiInput-underline:after": {
                        borderBottomColor: "#1a237e",
                      },
                      "& .MuiInputLabel-root": {
                        fontFamily: '"Muli", sans-serif',
                        color: "#333",
                      },
                      "& .MuiInputBase-input": {
                        fontFamily: '"Muli", sans-serif',
                        color: "#333",
                      },
                    }}
                  />
                </Box>

                {/* Right Column */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  <TextField
                    name="email"
                    label="Email Address"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    variant="standard"
                    sx={{
                      "& .MuiInput-underline:before": {
                        borderBottomColor: "#ccc",
                      },
                      "& .MuiInput-underline:hover:before": {
                        borderBottomColor: "#1a237e",
                      },
                      "& .MuiInput-underline:after": {
                        borderBottomColor: "#1a237e",
                      },
                      "& .MuiInputLabel-root": {
                        fontFamily: '"Muli", sans-serif',
                        color: "#333",
                      },
                      "& .MuiInputBase-input": {
                        fontFamily: '"Muli", sans-serif',
                        color: "#333",
                      },
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
                          sx: {
                            "& .MuiMenuItem-root": {
                              fontFamily: '"Muli", sans-serif',
                            },
                          },
                        },
                      },
                    }}
                    sx={{
                      "& .MuiInput-underline:before": {
                        borderBottomColor: "#ccc",
                      },
                      "& .MuiInput-underline:hover:before": {
                        borderBottomColor: "#1a237e",
                      },
                      "& .MuiInput-underline:after": {
                        borderBottomColor: "#1a237e",
                      },
                      "& .MuiInputLabel-root": {
                        fontFamily: '"Muli", sans-serif',
                        color: "#333",
                      },
                      "& .MuiInputBase-input": {
                        fontFamily: '"Muli", sans-serif',
                        color: "#333",
                      },
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

              <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: "#D19F3B",
                    color: "#ffffff",
                    px: { xs: 4, md: 6 },
                    py: { xs: 1.5, md: 2 },
                    fontSize: { xs: "1rem", md: "1.1rem" },
                    fontWeight: 600,
                    fontFamily: '"Muli", sans-serif',
                    textTransform: "none",
                    borderRadius: 2,
                    "&:hover": {
                      backgroundColor: "#b88d2f",
                    },
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