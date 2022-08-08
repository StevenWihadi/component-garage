import { css } from "@emotion/css";

export const styBase = css`
    padding: 8px 16px;
    background: #3A83F9;
    border-radius: 8px;
    color: white;
`;

export const styWithIcon = css`
    ${styBase}
    color: red;

    &: disabled {
        opacity: .5;
    }
`;
