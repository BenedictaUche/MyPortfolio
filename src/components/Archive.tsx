import * as React from "react";
import { data } from "../lib/allProjectsData";
import { Link, MoveLeft, Github } from "lucide-react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";

const Archive = () => {
  const { archiveProjects } = data;

  const back = () => {
    window.history.back();
  };

  return (
    <section className="min-h-[50vh] py-4 px-8 w-full">
      <div className="flex flex-col gap-8 min-h-screen max-w-[100rem] mx-auto w-full">
        <header className="flex items-center justify-between w-full">
          <h1 className="text-4xl md:text-7xl text-lightGrey font-bold mb-2">
            Archive
          </h1>
          <button
            onClick={() => back()}
            title="Projects"
            className="border border-lightGreen py-2 px-3 rounded-md text-lightGreen"
            id="resume-btn"
          >
            <MoveLeft /> Back
          </button>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {archiveProjects.map((item) => (
            <Card
              key={item.name}
              sx={{
                backgroundColor: "#112240",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
              id="archive-card"
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  gap: "0.5rem",
                }}
              >
                <Typography variant="h2" className="text-lightGrey">
                  <h2 className="flex flex-row items-center justify-center gap-1 text-xl text-lightGrey font-bold text-center">
                    <span> {item.name} </span>
                    <span
                      className={
                        item.featured
                          ? "block text-lightGreen text-xs font-medium"
                          : "hidden"
                      }
                    >
                      &#40;Featured Project&#41;
                    </span>
                  </h2>
                </Typography>

                <Typography
                  variant="body1"
                  className="text-lightGrey text-center"
                >
                  <p> {item.description} </p>
                </Typography>

                <Typography sx={{ width: "100%" }} variant="body1">
                  <section className="flex flex-wrap gap-1 items-center justify-around mx-auto text-lightGreen text-xs font-medium w-full max-w-xs mt-3">
                    {item.techUsed.map((tech, index) => (
                      <span key={index}>{tech}</span>
                    ))}
                  </section>
                </Typography>
              </CardContent>

              <CardActions className="flex items-center justify-center">
                <a
                  href={item.repoURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="large" title="GitHub">
                    <Github className="text-lg" />
                  </Button>
                </a>
                <a
                  href={item.hostedURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="large" title="External Link">
                    <Link className="text-lg" />
                  </Button>
                </a>
              </CardActions>
            </Card>
          ))}
        </section>

        {/* Navigate Back */}
        <button
          onClick={() => back()}
          title="Projects"
          className="border self-end border-lightGreen py-2 px-3 rounded-md text-lightGreen"
          id="resume-btn"
        >
          <MoveLeft /> Back
        </button>
      </div>
    </section>
  );
};

export default Archive;
