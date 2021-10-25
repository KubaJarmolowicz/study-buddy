import "styled-components";

// and extend them!
declare module "styled-components" {
	export interface DefaultTheme {
		colors: {
			white: string;
			lightGrey: string;
			grey: string;
			darkGrey: string;
			black: string;
			success: string;
			error: string;
			warning: string;
			darkPurple: string;
			lightPurple: string;
		};
		fontSize: {
			xl: string;
			l: string;
			m: string;
			s: string;
		};
	}
}
