// Layout.tsx
import React from "react";
import { Box, Stack, CssBaseline } from "@mui/material";
import { alpha } from "@mui/material/styles";
import SideMenu from "../components/SideMenu";
import AppNavbar from "../components/AppNavbar";
import Header from "../components/Header";
import AppTheme from "../pages/shared-theme/AppTheme";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppTheme>
      <CssBaseline enableColorScheme />
      <Box sx={{ display: "flex" }}>
        {/* Menú lateral */}
        <SideMenu />
        {/* Barra de navegación superior */}
        <AppNavbar />
        
        {/* Contenedor del contenido principal */}
        <Box
          component="main"
          sx={(theme) => ({
            flexGrow: 1,
            backgroundColor: alpha(theme.palette.background.default, 1),
            overflow: "auto",
          })}
        >
          <Stack
            spacing={2}
            sx={{
              alignItems: "center",
              mx: 3,
              pb: 5,
              mt: { xs: 8, md: 0 },
            }}
          >
            {/* Encabezado */}
            <Header />
            {/* Aquí se inserta el contenido específico de la página */}
            {children}
          </Stack>
        </Box>
      </Box>
    </AppTheme>
  );
};

export default Layout;
