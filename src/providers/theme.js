import React from "react"
import { useThemeSetting } from "../features"
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { StyledEngineProvider, CssBaseline } from "@mui/material";

const Theme = (props) => {
    const { themeMode } = useThemeSetting();
    const theme = React.useMemo(() =>
            createTheme({
                spacing: 4,
                breakpoints: {
                    keys: ["xs", "sm", "md", "lg", "xl"],
                    values: { xs: 0, lg: 1280, sm: 600, md: 960, xl: 1920 }
                },
                palette: {
                    mode: themeMode,
                    background: {
                        default: themeMode === 'light' ? '#FFFFFF' : '#18191a',
                        gray: themeMode === 'light' ? '#F6F7F9' : '#282C34',
                    },
                    primary: {
                        main: "#F05B1D",
                    }
                },
                typography: {
                    fontFamily: 'Noto Sans Myanmar, Arial, "Poppins"',
                    fontSize: 12,
                    fontWeightLight: 300,
                    fontWeightRegular: 400,
                    fontWeightMedium: 500,
                    fontWeightBold: 700,
                    root: {
                          margin: 0,
                          padding: 0
                    },
                    button: {
                          fontSize: 11,
                          fontWeight: 400,
                          textTransform: 'uppercase',
                          lineHeight: 0,
                    },
                    h1: {
                          fontSize: 24,
                          fontWeight: 800,
                          margin: '13px 0px',
                    },
                    h2: {
                          fontSize: 22,
                          fontWeight: 600,
                          margin: '12px 0px',
                    },
                    h3: {
                          fontSize: 20,
                          fontWeight: 600,
                          margin: '10px 0px',
                    },
                    h4: {
                          fontSize: 18,
                          fontWeight: 600,
                          margin: '9px 0px',
                    },
                    h5: {
                          fontSize: 16,
                          fontWeight: 600,
                          margin: '9px 0px',
                    },
                    h6: {
                          fontSize: 14,
                          fontWeight: 600,
                          margin: '8px 0px',
                    },
                    heading: {
                        fontSize: 12,
                        fontWeight: 600,
                    },
                    paragraph: {
                        fontSize: 10
                    }
                },
            }), [themeMode]);
    
    return (
        <StyledEngineProvider>
            <ThemeProvider theme={ theme }>
                <CssBaseline/>
                { props.children }
            </ThemeProvider>
        </StyledEngineProvider>
    )
}

export default Theme;