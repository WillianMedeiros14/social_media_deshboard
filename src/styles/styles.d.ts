import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            background: string;
            backgroundSecondary: string;
            cardBackground: string;
            textPrimary: string;
            textSecondary: string;

            limeGreen: string;
            brightRed: string;
            facebook: string;
            twitter: string;
            youTube: string;
            linearInstagranPrimary: string;
            linearInstagranSecondary: string;

            toggle: string;
        }
    }
}