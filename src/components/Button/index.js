import Button from "./Button";
import WithIcon from "./features/WithIcon";
import { styBase, styWithIcon } from "./style";

// MIND SET
// : untuk case button case pembeda mungkin style, dan children jadi yg di overide children, dan style
// : case lain untuk inputField mungkin case pembeda nya ada validate char atau number, 
//   jadi yg di overide function onChange. nah function validate untuk number, dan char, di buat micro function lagi, 
//   jadi bisa di pakai di page atau di component lain

// PROS
// - component lebih tertata (banyak macam jenis dalam 1 file)
// - fleksibel
// - mengurangi code redudant (harus ikutin rule yg di sepakati)
// - bug lebih kecil, karena setiap feature meng handle tugas masing2
// - lebih mudah maintance (karena code di component di pecah per feature)

// CONS
// - structure berubah, membutuhkan waktu development tambahan
// - butuh waktu analisa pada awal development
// - 


const MainButton = (props) =>
<Button 
    {...props}
    className={styBase}
>
    {props.children}
</Button>

MainButton.WithIcon = (props) =>
<Button
    {...props}
    className={styWithIcon}
>
    <WithIcon feature={props.feature}/>
</Button>

export default MainButton;