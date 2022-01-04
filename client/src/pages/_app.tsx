import { ChakraProvider } from "@chakra-ui/react";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import { AppProps } from "next/app";
import { SwrSupabaseContext } from "supabase-swr";
import { supabase } from "../lib/supabase";
import theme from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
	TimeAgo.addDefaultLocale(en);

	return (
		<SwrSupabaseContext.Provider value={supabase}>
			<ChakraProvider resetCSS theme={theme}>
				<Component {...pageProps} />
			</ChakraProvider>
		</SwrSupabaseContext.Provider>
	);
}

export default MyApp;
