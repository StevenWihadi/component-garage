import { css } from "@emotion/css";

const styFilled = css`
    color: white;
    background: #3A83F9;

    &:hover {
        background: #0648B2;
    }

    &:disabled {
        background: #E9F1F5;
        color: #B5CBD6;
    }
`;

const styOutline = css`
    background: #FFFFFF;
    border: 1px solid #3A83F9;
    color: #3A83F9;

    &:hover {
        background: #F6FAFF;
    }

    &:disabled {
        border: 1px solid #D4E4EC;
        color: #B5CBD6;
    }
`;

const stySecondaryOutline = css`
    background: #FFFFFF;
    border: 1px solid #98B2C1;
    color: #98B2C1;

    &:hover {
        background: #F6FAFC;
    }

    &:disabled {
        border: 1px solid #D4E4EC;
        color: #B5CBD6;
    }
`;

const styNaked = css`
    background: #FFFFFF;
    color: #3A83F9;

    &:hover {
        background: #F6FAFF;
    }

    &:disabled {
        color: #B5CBD6;
    }
`;

const styCritical = css`
    background: #F93A3A;
    color: white;

    &:hover {
        background: #B20606;
    }

    &:disabled {
        background: #E9F1F5;
        color: #B5CBD6;
    }
`;

const styleType = {
    filled: styFilled,
    outline: styOutline,
    secondaryOutline: stySecondaryOutline,
    naked: styNaked,
    critical: styCritical
};

const GetType = (type) => {
    return styleType[type];
}

export default GetType;
