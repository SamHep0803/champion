import { CloseIcon } from "@chakra-ui/icons";
import { Box, MenuIcon } from "@chakra-ui/react";
import React from "react";

interface MenuToggleProps {
	isOpen: boolean;
	toggle: () => void;
}

export const MenuToggle: React.FC<MenuToggleProps> = ({ isOpen, toggle }) => {
	return (
		<Box display={{ base: "block", md: "none" }} onClick={toggle}>
			{isOpen ? <CloseIcon /> : <MenuIcon />}
		</Box>
	);
};
