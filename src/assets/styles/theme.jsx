const theme = {
  colors: {
    primary: "#F83636",
    secondary: "#333333",
    background: "#FFFFFF",
    text: "#333333",
    accent: "#F83636",
    gray: "#666666",
    lightGray: "#F5F5F5",
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    fontSizes: {
      base: "16px",
      h1: "68px",
      h2: "42px",
      h3: "26px",
      paragraph: "1.2rem",
    },
    fontWeights: {
      regular: 400,
      medium: 500,
      bold: 600,
    },
    lineHeights: {
      base: 1.6,
      heading: 1.2,
    },
  },
  spacing: {
    xs: "0.5rem",
    sm: "1rem",
    md: "2rem",
    lg: "4rem",
    xl: "8rem",
  },
  breakpoints: {
    xs: "576px",
    sm: "768px",
    md: "992px",
    lg: "1200px",
    xl: "1400px",
  },
  components: {
    button: {
      backgroundColor: "#F83636",
      color: "#FFFFFF",
      padding: "0.8rem 1.5rem",
      borderRadius: "4px",
      fontWeight: 500,
      hover: {
        backgroundColor: "#D82C2C",
      },
    },
    input: {
      padding: "0.8rem",
      borderRadius: "4px",
      border: "1px solid #CCCCCC",
    },
  },
};

export default theme;
