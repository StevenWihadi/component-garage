import Button from "./Button";
import WithIcon from "./features/WithIcon";

const MainButton = (props) => <Button {...props}>{props.children}</Button>
MainButton.WithIcon = (props) => <Button {...props}>
    <WithIcon feature={props.feature}/>
</Button>

export default MainButton;