import { css } from "@emotion/css";
import GetSize from "./styleSize";
import GetType from "./styType";

export const styBase = (size = 'large', type = 'filled') => css`
    ${GetSize(size)}
    border: unset;
    border-radius: 4px;

    ${GetType(type)}
`;

const styIcon = (size) => {
    const imageWidth = { large: 26, medium: 24, small: 20 };
    return css`
        img {
            width: ${imageWidth[size]}px;
        }
    `;
}

export const styWithIcon = (size) => {
    const gab = { large: 10, medium: 8,  small: 6 };

    return css`
        ${styBase(size)}
        span {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: ${gab[size]}px;
        }
        ${styIcon(size)}
    `
};

export const styIconOnly = (size) => css`
    ${styBase(size)}
    width: 48px;
    height: 48px;

    ${styIcon(size)}
`;
