import { Box, Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NaVSection";

export function SideBarNav(){
  return (
    <Stack spacing="12" align="flex-start">
        
    <NavSection title="Geral">
      <NavLink icon={RiDashboardLine} href="/dashboard" children="Dashboard" />
      <NavLink icon={RiContactsLine} href="/users" children="Usuários" />
    </NavSection>

    <NavSection title="AUTOMAÇÃO">

      <NavLink icon={RiInputMethodLine} href="/forms" children="Formulários" />
      <NavLink icon={RiGitMergeLine} href="/automation" children="Automação" />
    </NavSection>
  </Stack>
  )
}