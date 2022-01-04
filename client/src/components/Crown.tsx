import { Box, Flex, Img } from "@chakra-ui/react";
import TimeAgo from "javascript-time-ago";
import React from "react";

interface CrownProps {}

export const Crown: React.FC<CrownProps> = ({}) => {
	const data = {
		id: "",
		text: "this is a test crown",
		created_at: new Date().getTime() - 7 * 24 * 60 * 60 * 1000,
		author_id: "00a577de-69e8-11ec-90d6-0242ac120003",
	};

	const userData = {
		id: "00a577de-69e8-11ec-90d6-0242ac120003",
		username: "test_user",
		avatar_url: "https://avatars2.githubusercontent.com/u/17098981?s=460&v=4",
	};

	const timeAgo = new TimeAgo("en-US");

	return (
		<Box
			borderWidth="1px"
			borderColor="gray.200"
			borderRadius="lg"
			backgroundColor="white"
			color="black"
			maxW="xl"
			w="100%"
			p={4}
			my={4}
		>
			<Flex alignItems="center" pb={2}>
				<Box>
					<Img
						src={userData.avatar_url}
						maxW={12}
						maxH={12}
						borderRadius="full"
						alt="avatar"
						mr={2}
					/>
				</Box>
				<Box ml={2}>
					<Box fontWeight="semibold" fontSize="xl">
						@{userData.username}
					</Box>
					<Box fontSize="lg">{data.text}</Box>
				</Box>
				<Flex color="gray.600" ml="auto" fontSize="sm">
					{timeAgo.format(data.created_at, "twitter")}
				</Flex>
			</Flex>
		</Box>
	);
};

//TODO: use fake data to template crown
//TODO: create crowns table in database
