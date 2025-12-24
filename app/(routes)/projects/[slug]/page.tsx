"use client";

import { Box, Typography, Container, Button, Paper } from "@mui/material";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProjectHero from "@/components/sections/ProjectHero/ProjectHero";
import { notFound } from "next/navigation";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
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
        
        {/* Project Overview - Mobile Optimized */}
        <Box sx={{ mb: { xs: 6, md: 8 }, width: { xs: "100%", md: "80%" }, margin: "0 auto" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 3, md: 4 },
            }}
          >
            {/* Left Content */}
            <Box
              sx={{
                width: { xs: "100%", md: "66.67%" },
                flexShrink: 0,
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2.2rem", lg: "2.5rem" },
                  fontWeight: 700,
                  color: "#D19F3B",
                  mb: { xs: 1, md: 2 },
                  lineHeight: 1.2,
                }}
              >
                {typedProject.title}
              </Typography>

              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.4rem", lg: "1.5rem" },
                  fontWeight: 600,
                  color: "#555",
                  mb: { xs: 2, md: 3 },
                  fontStyle: "italic",
                }}
              >
                {typedProject.description}
              </Typography>

              <Box sx={{ mb: { xs: 3, md: 4 } }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
                    lineHeight: 1.7,
                    color: "#333",
                    mb: { xs: 2, md: 3 },
                    textAlign: "justify",
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
                      fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
                      lineHeight: 1.7,
                      color: "#333",
                      textAlign: "justify",
                    }}
                  >
                    {typedProject.detailedContent}
                  </Typography>
                </Box>
              )}
            </Box>
            
            {/* Right Sidebar - Mobile Optimized */}
            <Box
              sx={{
                width: { xs: "100%", md: "33.33%" },
                flexShrink: 0,
              }}
            >
              <Paper
                elevation={2}
                sx={{
                  p: { xs: 2.5, md: 3, lg: 4 },
                  backgroundColor: "#f9f9f9",
                  borderRadius: 2,
                  position: { md: "sticky" },
                  top: { md: 20 },
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: "#D19F3B",
                    mb: { xs: 2, md: 3 },
                    fontWeight: 700,
                    borderBottom: "2px solid #D19F3B",
                    pb: 1,
                    fontSize: { xs: "1.2rem", md: "1.3rem", lg: "1.5rem" },
                  }}
                >
                  Key Details
                </Typography>
                
                <Box sx={{ mt: { xs: 1, md: 2 } }}>
                  {typedProject.details &&
                    Object.entries(typedProject.details).map(([key, value]) => (
                      <Box
                        key={key}
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          mb: { xs: 1.5, md: 2 },
                          pb: { xs: 1, md: 1.5 },
                          borderBottom: "1px solid #e0e0e0",
                          "&:last-child": {
                            borderBottom: "none",
                            mb: 0,
                            pb: 0,
                          },
                        }}
                      >
                        <Typography
                          sx={{
                            fontWeight: 600,
                            color: "#555",
                            fontSize: { xs: "0.8rem", sm: "0.85rem", md: "0.9rem", lg: "0.95rem" },
                            flex: 1,
                            pr: 1,
                          }}
                        >
                          {key}:
                        </Typography>
                        <Typography
                          sx={{
                            color: "#333",
                            fontSize: { xs: "0.8rem", sm: "0.85rem", md: "0.9rem", lg: "0.95rem" },
                            textAlign: "right",
                            flex: 1,
                            fontWeight: 500,
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

        {/* Design Philosophy - Mobile Optimized */}
        {typedProject.designPhilosophy && (
          <Box
            sx={{
              mb: { xs: 6, md: 8 },
              backgroundColor: "#f8f8f8",
              p: { xs: 3, sm: 4, md: 5, lg: 6 },
              borderRadius: 2,
              width: { xs: "100%", md: "80%" },
              margin: "0 auto",
              mt: { xs: 2, md: 4 },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: "#D19F3B",
                fontSize: { xs: "1.5rem", sm: "1.7rem", md: "1.9rem", lg: "2rem" },
                fontWeight: 700,
                mb: { xs: 2.5, md: 3, lg: 4 },
                textAlign: "center",
              }}
            >
              Design Philosophy
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "0.95rem", sm: "1rem", md: "1.05rem", lg: "1.1rem" },
                lineHeight: 1.7,
                color: "#333",
                maxWidth: "800px",
                margin: "0 auto",
                textAlign: "center",
              }}
            >
              {typedProject.designPhilosophy}
            </Typography>
          </Box>
        )}

        {/* Premium Amenities - Mobile Optimized */}
        {typedProject.premiumAmenities && (
          <Box sx={{ mb: { xs: 6, md: 8 }, width: { xs: "100%", md: "80%" }, margin: "0 auto" }}>
            <Typography
              variant="h3"
              sx={{
                color: "#D19F3B",
                fontSize: { xs: "1.5rem", sm: "1.7rem", md: "1.9rem", lg: "2rem" },
                fontWeight: 700,
                mb: { xs: 3, md: 4 },
                mt: { xs: 2, md: 4 },
                textAlign: "center",
              }}
            >
              Premium Amenities
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 2, md: 3 } }}>
              {typedProject.premiumAmenities.map(
                (amenity: string, index: number) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      p: { xs: 2, sm: 2.5, md: 3 },
                      backgroundColor: "#fff",
                      borderRadius: 2,
                      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                      transition: "transform 0.3s",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                      },
                    }}
                  >
                    <CheckCircleIcon
                      sx={{
                        color: "#D19F3B",
                        mr: 2,
                        mt: 0.3,
                        fontSize: { xs: "1.2rem", md: "1.5rem" },
                        flexShrink: 0,
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: { xs: "0.9rem", sm: "0.95rem", md: "1rem" },
                        lineHeight: 1.6,
                        color: "#333",
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

        {/* World-Class Facilities - Mobile Optimized */}
        {typedProject.worldClassAmenities && (
          <Box sx={{ mb: { xs: 6, md: 8 }, width: { xs: "100%", md: "80%" }, margin: "0 auto" }}>
            <Typography
              variant="h3"
              sx={{
                color: "#D19F3B",
                fontSize: { xs: "1.5rem", sm: "1.7rem", md: "1.9rem", lg: "2rem" },
                fontWeight: 700,
                mb: { xs: 3, md: 4 },
                mt: { xs: 2, md: 4 },
                textAlign: "center",
              }}
            >
              World-Class Facilities
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: { xs: 2.5, sm: 3, md: 4 },
              }}
            >
              {typedProject.worldClassAmenities.map(
                (item: WorldClassAmenity, index: number) => (
                  <Box
                    key={index}
                    sx={{
                      width: { xs: "100%", sm: "90%", md: "48%", lg: "31%" },
                      mb: { xs: 2, sm: 0 },
                    }}
                  >
                    <Paper
                      elevation={1}
                      sx={{
                        p: { xs: 2.5, sm: 3, md: 3.5, lg: 4 },
                        height: "100%",
                        borderRadius: 2,
                        textAlign: "center",
                        transition: "all 0.3s",
                        "&:hover": {
                          backgroundColor: "#f9f9f9",
                          transform: "translateY(-5px)",
                          boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                        },
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#D19F3B",
                          mb: { xs: 1.5, md: 2 },
                          fontWeight: 600,
                          fontSize: { xs: "1rem", sm: "1.1rem", md: "1.15rem", lg: "1.2rem" },
                        }}
                      >
                        {item.name}
                      </Typography>
                      {item.description && (
                        <Typography
                          sx={{
                            color: "#666",
                            fontSize: { xs: "0.85rem", sm: "0.9rem", md: "0.92rem", lg: "0.95rem" },
                            lineHeight: 1.6,
                          }}
                        >
                          {item.description}
                        </Typography>
                      )}
                    </Paper>
                  </Box>
                )
              )}
            </Box>
          </Box>
        )}

        {/* Why Choose This Project - Mobile Optimized */}
        {typedProject.whyChoose && (
          <Box
            sx={{
              mb: { xs: 6, md: 8 },
              backgroundColor: "#fffaf0",
              p: { xs: 3, sm: 4, md: 5, lg: 6 },
              borderRadius: 2,
              width: { xs: "100%", md: "80%" },
              margin: "0 auto",
              mt: { xs: 2, md: 4 },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: "#D19F3B",
                fontSize: { xs: "1.5rem", sm: "1.7rem", md: "1.9rem", lg: "2rem" },
                fontWeight: 700,
                mb: { xs: 3, md: 4 },
                textAlign: "center",
              }}
            >
              Why Choose {typedProject.title}
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 1.5, md: 2 } }}>
              {typedProject.whyChoose.map((reason: string, index: number) => (
                <Box
                  key={index}
                  sx={{ 
                    display: "flex", 
                    alignItems: "flex-start", 
                    mb: { xs: 1.5, md: 2 } 
                  }}
                >
                  <ArrowForwardIcon
                    sx={{
                      color: "#D19F3B",
                      mr: 2,
                      flexShrink: 0,
                      fontSize: { xs: "1rem", md: "1.2rem" },
                      mt: 0.2,
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: { xs: "0.95rem", sm: "1rem", md: "1.05rem", lg: "1.1rem" },
                      color: "#333",
                      fontWeight: 500,
                      lineHeight: 1.6,
                    }}
                  >
                    {reason}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        )}

        {/* Construction Updates - Mobile Optimized */}
        {typedProject.constructionUpdates && (
          <Box sx={{ mb: { xs: 6, md: 8 }, width: { xs: "100%", md: "80%" }, margin: "0 auto" }}>
            <Typography
              variant="h3"
              sx={{
                color: "#D19F3B",
                fontSize: { xs: "1.5rem", sm: "1.7rem", md: "1.9rem", lg: "2rem" },
                fontWeight: 700,
                mb: { xs: 3, md: 4 },
                mt: { xs: 2, md: 4 },
                textAlign: "center",
              }}
            >
              Construction Progress
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: { xs: 2.5, sm: 3 },
              }}
            >
              {typedProject.constructionUpdates.map(
                (update: ConstructionUpdate, index: number) => (
                  <Box
                    key={index}
                    sx={{ 
                      width: { 
                        xs: "100%", 
                        sm: "48%", 
                        md: "48%", 
                        lg: "23%" 
                      },
                      mb: { xs: 2, sm: 0 } 
                    }}
                  >
                    <Paper
                      sx={{
                        p: { xs: 2, sm: 2.5, md: 3 },
                        textAlign: "center",
                        borderRadius: 2,
                        backgroundColor: "#fff",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                        height: "100%",
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#D19F3B",
                          mb: 1,
                          fontWeight: 600,
                          fontSize: { xs: "0.95rem", sm: "1rem", md: "1.05rem", lg: "1.1rem" },
                        }}
                      >
                        {update.title}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#666",
                          fontSize: { xs: "0.8rem", sm: "0.85rem", md: "0.87rem", lg: "0.9rem" },
                          mb: { xs: 1.5, md: 2 },
                        }}
                      >
                        {update.date}
                      </Typography>
                      <Box
                        sx={{
                          height: 6,
                          backgroundColor: "#eee",
                          borderRadius: 4,
                          overflow: "hidden",
                          mb: 1,
                        }}
                      >
                        <Box
                          sx={{
                            height: "100%",
                            backgroundColor: "#D19F3B",
                            width: update.progress,
                          }}
                        />
                      </Box>
                      <Typography
                        sx={{
                          color: "#333",
                          fontWeight: 600,
                          fontSize: { xs: "0.8rem", sm: "0.85rem", md: "0.87rem", lg: "0.9rem" },
                        }}
                      >
                        {update.progress}
                      </Typography>
                    </Paper>
                  </Box>
                )
              )}
            </Box>
          </Box>
        )}

        {/* Call to Action - Mobile Optimized */}
        <Box
          sx={{
            textAlign: "center",
            py: { xs: 4, sm: 5, md: 6 },
            px: { xs: 2, sm: 3, md: 4 },
            backgroundColor: "#f9f9f9",
            borderRadius: 2,
            mt: { xs: 4, md: 6, lg: 8 },
            width: { xs: "100%", md: "80%" },
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#333",
              mb: { xs: 2, md: 3 },
              fontWeight: 700,
              fontSize: { xs: "1.4rem", sm: "1.6rem", md: "1.8rem", lg: "2rem" },
            }}
          >
            Interested in {typedProject.title}?
          </Typography>

          <Typography
            sx={{
              color: "#666",
              mb: { xs: 3, md: 4 },
              maxWidth: "600px",
              fontSize: { xs: "0.95rem", sm: "1rem", md: "1.05rem", lg: "1.1rem" },
              lineHeight: 1.6,
            }}
          >
            Contact our sales team for detailed brochures, site visits, and
            investment opportunities.
          </Typography>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#D19F3B",
              color: "#fff",
              px: { xs: 4, sm: 5, md: 6 },
              py: { xs: 1, sm: 1.25, md: 1.5 },
              fontSize: { xs: "0.95rem", sm: "1rem", md: "1.05rem", lg: "1.1rem" },
              fontWeight: 600,
              borderRadius: 2,
              minWidth: { xs: "200px", sm: "220px" },
              "&:hover": {
                backgroundColor: "#b88c2a",
              },
            }}
          >
            Schedule a Consultation
          </Button>
        </Box>
      </Container>

      <Footer />
    </>
  );
}