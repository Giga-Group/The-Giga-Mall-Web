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

      <Container maxWidth="xl" sx={{ py: 8, px: { xs: 2, sm: 3, md: 4 } }}>
        {/* Project Overview - Using Flexbox for side-by-side layout */}
        <Box sx={{ mb: 8, width: "80%", margin: "0 auto" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
            }}
          >
            {/* Left Content - 66.67% width */}
            <Box
              sx={{
                width: { xs: "100%", md: "66.67%" },
                flexShrink: 0,
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2rem", md: "2.5rem" },
                  fontWeight: 700,
                  color: "#D19F3B",
                  mb: 2,
                }}
              >
                {typedProject.title}
              </Typography>

              <Typography
                variant="h3"
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  color: "#555",
                  mb: 3,
                  fontStyle: "italic",
                }}
              >
                {typedProject.description}
              </Typography>

              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "1.1rem",
                    lineHeight: 1.8,
                    color: "#333",
                    mb: 3,
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
                      fontSize: "1.1rem",
                      lineHeight: 1.8,
                      color: "#333",
                      textAlign: "justify",
                    }}
                  >
                    {typedProject.detailedContent}
                  </Typography>
                </Box>
              )}
            </Box>

            {/* Right Sidebar - 33.33% width */}
            <Box
              sx={{
                width: { xs: "100%", md: "33.33%" },
                flexShrink: 0,
              }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  backgroundColor: "#f9f9f9",
                  borderRadius: 2,
                  position: "sticky",
                  top: 20,
                }}
              >
               

                <Box sx={{ mt: 2 }}>
                  {typedProject.details &&
                    Object.entries(typedProject.details).map(([key, value]) => (
                      <Box
                        key={key}
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          mb: 2.5,
                          pb: 1.5,
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
                            fontSize: "0.95rem",
                            flex: 1,
                          }}
                        >
                          {key}:
                        </Typography>
                        <Typography
                          sx={{
                            color: "#333",
                            fontSize: "0.95rem",
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

        {/* Design Philosophy */}
        {typedProject.designPhilosophy && (
          <Box
            sx={{
              mb: 8,
              backgroundColor: "#f8f8f8",
              p: 6,
              borderRadius: 2,
              width: "80%",
              margin: "0 auto",
              marginTop: 4,
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: "#D19F3B",
                fontSize: "2rem",
                fontWeight: 700,
                mb: 4,
                textAlign: "center",
              }}
            >
              Design Philosophy
            </Typography>

            <Typography
              sx={{
                fontSize: "1.1rem",
                lineHeight: 1.8,
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

        {/* Premium Amenities - Single Column */}
        {typedProject.premiumAmenities && (
          <Box sx={{ mb: 8, width: "80%", margin: "0 auto" }}>
            <Typography
              variant="h3"
              sx={{
                color: "#D19F3B",
                fontSize: "2rem",
                fontWeight: 700,
                mb: 4,
                marginTop: 4,
                textAlign: "center",
              }}
            >
              Premium Amenities
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {typedProject.premiumAmenities.map(
                (amenity: string, index: number) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      p: 3,
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
                        mt: 0.5,
                        fontSize: "1.5rem",
                        flexShrink: 0,
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: "1rem",
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

        {/* World-Class Facilities - Flexbox Approach */}
        {typedProject.worldClassAmenities && (
          <Box sx={{ mb: 8, width: "80%", margin: "0 auto" }}>
            <Typography
              variant="h3"
              sx={{
                color: "#D19F3B",
                fontSize: "2rem",
                fontWeight: 700,
                mb: 4,
                marginTop: 4,
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
                gap: 4,
              }}
            >
              {typedProject.worldClassAmenities.map(
                (item: WorldClassAmenity, index: number) => (
                  <Box
                    key={index}
                    sx={{
                      width: { xs: "100%", sm: "80%", md: "45%", lg: "30%" },
                    }}
                  >
                    <Paper
                      elevation={2}
                      sx={{
                        p: 4,
                        height: "100%",
                        borderRadius: 2,
                        textAlign: "center",
                        transition: "all 0.3s",
                        "&:hover": {
                          backgroundColor: "#f9f9f9",
                          transform: "translateY(-5px)",
                        },
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#D19F3B",
                          mb: 2,
                          fontWeight: 600,
                          fontSize: "1.2rem",
                        }}
                      >
                        {item.name}
                      </Typography>
                      {item.description && (
                        <Typography
                          sx={{
                            color: "#666",
                            fontSize: "0.95rem",
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

        {/* Why Choose This Project - Single Column */}
        {typedProject.whyChoose && (
          <Box
            sx={{
              mb: 8,
              backgroundColor: "#fffaf0",
              p: 6,
              borderRadius: 2,
              width: "80%",
              margin: "0 auto",
              marginTop: 4,
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: "#D19F3B",
                fontSize: "2rem",
                fontWeight: 700,
                mb: 4,
                textAlign: "center",
              }}
            >
              Why Choose {typedProject.title}
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {typedProject.whyChoose.map((reason: string, index: number) => (
                <Box
                  key={index}
                  sx={{ display: "flex", alignItems: "center", mb: 2 }}
                >
                  <ArrowForwardIcon
                    sx={{
                      color: "#D19F3B",
                      mr: 2,
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: "1.1rem",
                      color: "#333",
                      fontWeight: 500,
                    }}
                  >
                    {reason}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        )}

        {/* Construction Updates - Also using Flexbox for consistency */}
        {typedProject.constructionUpdates && (
          <Box sx={{ mb: 8, width: "80%", margin: "0 auto" }}>
            <Typography
              variant="h3"
              sx={{
                color: "#D19F3B",
                fontSize: "2rem",
                fontWeight: 700,
                mb: 4,
                marginTop: 4,
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
                gap: 3,
              }}
            >
              {typedProject.constructionUpdates.map(
                (update: ConstructionUpdate, index: number) => (
                  <Box
                    key={index}
                    sx={{ width: { xs: "100%", sm: "48%", md: "23%" } }}
                  >
                    <Paper
                      sx={{
                        p: 3,
                        textAlign: "center",
                        borderRadius: 2,
                        backgroundColor: "#fff",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#D19F3B",
                          mb: 1,
                          fontWeight: 600,
                          fontSize: "1.1rem",
                        }}
                      >
                        {update.title}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#666",
                          fontSize: "0.9rem",
                          mb: 2,
                        }}
                      >
                        {update.date}
                      </Typography>
                      <Box
                        sx={{
                          height: 8,
                          backgroundColor: "#eee",
                          borderRadius: 4,
                          overflow: "hidden",
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
                          mt: 1,
                          color: "#333",
                          fontWeight: 600,
                          fontSize: "0.9rem",
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

        {/* Call to Action */}
        <Box
          sx={{
            textAlign: "center",
            py: 6,
            px: 4,
            backgroundColor: "#f9f9f9",
            borderRadius: 2,
            marginTop: 8, // Increased top margin for more spacing
            width: "80%",
            marginLeft: "auto", // Center horizontally
            marginRight: "auto", // Center horizontally
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
              mb: 3,
              fontWeight: 700,
            }}
          >
            Interested in {typedProject.title}?
          </Typography>

          <Typography
            sx={{
              color: "#666",
              mb: 4,
              maxWidth: "600px",
              fontSize: "1.1rem",
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
              px: 6,
              py: 1.5,
              fontSize: "1.1rem",
              fontWeight: 600,
              borderRadius: 2,
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
