import { css } from "@emotion/css";

const styLarge = css`
    width: 320px;
    height: 48px;
    font-size: 18px;
`;

const styMedium = css`
    width: 240px;
    height: 40px;
    font-size: 16px;
`;

const stySmall = css`
    width: 120px;
    height: 32px;
    font-size: 14px;
`;

const btnStyle = {
    large: styLarge,
    medium: styMedium,
    small: stySmall,
    undefined: styLarge
};

const GetSize = (size) => {
    return btnStyle[size];
}

export default GetSize;