import { Button } from "@chakra-ui/react";
import { supabase } from "../lib/supabase";

const login = () => {
	async function signInWithTwitter() {
		await supabase.auth.signIn({
			provider: "twitter",
		});
	}
	return (
		<Button
			onClick={signInWithTwitter}
			position="relative"
			px={4}
			py={2}
			bg="#1eb872"
			rounded="lg"
			text="white"
			mt={4}
		>
			Sign in with Twitter
		</Button>
	);
};

export default login;
