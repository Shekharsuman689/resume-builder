import { Stack, Typography } from "@mui/material";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import EmailIcon from "@mui/icons-material/Email";
import { Box } from "@mui/system";
import Navbar from "../Components/Common/Navbar";
import Footer from "../Components/Common/footer";

// Defines the components of thr main function.It is the functional component in React, Which is a more straightforward approach to define components.
export default function ButtonMUI() {
  return (
    <>
      <Navbar />
      <Stack p={{ xs: "15px", sm: "25px", md: "40px", lg: "60px " }}>
        <h2 className="template-header-title">Resume Builder</h2>
        <Stack
          className="midContainer"
          direction={{
            xs: "column-reverse",
            sm: "column-reverse",
            md: "column-reverse",
            lg: "row",
          }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          mt="20px"
        >
          <Typography
            sx={{
              fontSize: {
                xs: "13px",
                sm: "15px",
                md: "17px",
                lg: "19px",
              },
              paddingRight: {
                xs: "15px",
                sm: "18px",
                lg: "25px",
              },
              textAlign: "justify",
            }}
          >
            welcome you to our resume builder! A resume builder app is a
            software application designed to help users create a professional
            resume with ease. These apps provide tools, templates, and
            guidelines that streamline the process of drafting and formatting a
            resume, which is crucial for job applications. They cater to users
            who may not have extensive graphic design skills or detailed
            knowledge of how to craft an effective resume.

            
            <br />
            <br />
            <h3>Build Your Resume Quickly and Easily with these Steps</h3>
            <ol>1. Choose Template </ol>
            <ol>2. Fill in the details </ol>
            <ol>3. Preview your resume </ol>
            <ol>4. Now your resume is ready for download.</ol>
            <ol>5. Keep in mind to save image & submit input </ol>
            <br />
            <h3>Technology used in this App</h3>
            <ol>1. Javascript</ol>
            <ol>2. React & Redux Toolkit</ol>
            <ol>3. HTML, CSS, Material UI</ol>
            <ol>4. Jspdf, React-hook-form, React-Icon</ol>
            <br />
            <h3>About Developer</h3>
            <li>Shekhar Suman</li>
            <li>
              <a
                style={{ color: "#01579b", textDecoration: "none" }}
                href="https://shekhar-portfolio01.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Checkout My Portfolio
              </a>
            </li>
            <li>
              <a
                style={{ color: "#01579b", textDecoration: "none" }}
                href="https://mail.google.com/mail/u/0/#inbox"
                target="_blank"
                rel="noreferrer"
              >
                Touch With Me
              </a>
            </li>
            <br />
            Thank you for choosing our Resume Builder! We are excited to support
            you in reaching your career aspirations & career goals...
          </Typography>
          <Stack>
            <img
              src="https://almablog-media.s3.ap-south-1.amazonaws.com/Job_Search_for_Front_End_Developer_38ed9ad161.jpg"
              alt="img"
            />
          </Stack>
        </Stack>
        <Box mt="2px">
          <Typography
            sx={{
              fontSize: {
                xs: "22px",
                sm: "25px",
                md: "27px",
                lg: "30px",
              },
              fontWeight: "400",
              color: "dark",
            }}
          >
            {/* Share with your friends */}
          </Typography>
        </Box>
      </Stack>
      <Footer />
    </>
  );
}
