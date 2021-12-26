import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
	Box,
	Button,
	Flex,
	IconButton,
	Link,
	useColorMode,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import { supabase } from "../lib/supabase";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
	async function signOut() {
		await supabase.auth.signOut();
	}
	const { colorMode, toggleColorMode } = useColorMode();
	const user = supabase.auth.user();
	let body;
	if (!user) {
		body = (
			<NextLink href="/login">
				<Link mr={4} color="white">
					Login
				</Link>
			</NextLink>
		);
	} else {
		body = (
			<>
				<Button colorScheme="twitter" mr={4} onClick={signOut}>
					Sign Out
				</Button>
				<Box mr={2} color="white">
					@{user.user_metadata.user_name}
				</Box>
			</>
		);
	}

	return (
		<Flex bg="tomato">
			<Flex alignItems="center"></Flex>
			<Flex ml="auto" p={4} alignItems="center">
				<IconButton
					aria-label="Toggle dark mode"
					icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
					mr={4}
					onClick={toggleColorMode}
				/>
				{body}
			</Flex>
		</Flex>
	);
};
