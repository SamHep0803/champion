import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
	Box,
	Button,
	Flex,
	IconButton,
	Img,
	Link,
	Stack,
	useColorMode,
	useDisclosure,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React, { useEffect } from "react";
import { useSession } from "supabase-swr";
import { supabase } from "../lib/supabase";
import { definitions } from "../types/supabase";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
	const [profile, setProfile] = React.useState<definitions["profiles"]>(null);
	const { isOpen, onToggle } = useDisclosure();

	const session = useSession();

	useEffect(() => {
		fetchProfile();
	}, [session]);

	async function signOut() {
		await supabase.auth.signOut();
		setProfile(null);
	}
	const fetchProfile = async () => {
		const user = await supabase.auth.user();
		if (!user) return;
		const { data: profile, error } = await supabase
			.from<definitions["profiles"]>("profiles")
			.select("username, avatar_url")
			.eq("id", user.id)
			.single();
		if (error) return;
		setProfile(profile);
	};

	const { colorMode, toggleColorMode } = useColorMode();
	let body;
	if (!profile) {
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
				<Stack
					direction={{ base: "column", md: "row" }}
					display={{ base: "none", md: "flex" }}
					ml="auto"
					alignItems="center"
					pr={4}
				>
					<Button colorScheme="twitter" mr={2} onClick={signOut}>
						Sign Out
					</Button>
					<Box mr={4} color="white">
						@{profile.username}
					</Box>
				</Stack>
				<Box mr={2}>
					<Img src={profile.avatar_url} size="sm" rounded="full" />
				</Box>
			</>
		);
	}

	return (
		<Flex bg="tomato">
			<Flex alignItems="center" py={4}>
				<NextLink href="/">
					<Link color="white" fontSize="2xl" ml={4} fontWeight="bold">
						champion44
					</Link>
				</NextLink>
			</Flex>

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
