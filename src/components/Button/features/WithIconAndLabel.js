const WithIcon = ({ feature }) => {
    return (
        <span>
            <img src={ feature.icon } />
            {feature.label}
        </span>
    );
}

export default WithIcon;