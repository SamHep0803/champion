import { Flex } from "@chakra-ui/react";
import { Crown } from "../components/Crown";
import { NavBar } from "../components/NavBar";

const Index = () => {
	return (
		<Flex h="100vh" flexDirection="column">
			<NavBar />
			<Flex
				flexDirection="column"
				maxW="4xl"
				w="100%"
				h="100%"
				alignItems="center"
				alignSelf="center"
			>
				<Crown />
				<Crown />
				<Crown />
				<Crown />
				<Crown />
				<Crown />
			</Flex>
		</Flex>
	);
};

export default Index;
