import Button from "./Button";
import WithIcon from "./features/WithIconAndLabel";
import IconOnly from "./features/IconOnly";
import {
    styBase,
    styWithIcon,
    styIconOnly
} from "./style";


const MainButton = (props) =>
<Button {...props} className={styBase(props.size, props.type)}>
    {props.children}
</Button>

MainButton.WithIconAndLabel = (props) =>
<Button {...props} className={styWithIcon(props.size, props.type)}>
    <WithIcon feature={props.feature}/>
</Button>

MainButton.IconOnly = (props) =>
<Button {...props} className={styIconOnly(props.size, props.type)}>
    <IconOnly feature={props.feature}/>
</Button>

export default MainButton;