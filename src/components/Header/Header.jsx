import "./style.css";
const Header = (props) => {
    console.log(props)

 
    return (
        
        <div className="nav">
            <ul>
                <li className={props.mypage==="Home"?'active':''} >Home</li>
                <li className={props.mypage==="About"?'active':''} >About</li>
                <li className={props.mypage==="Conect"?'active':''} >Conect</li>
              
             
            </ul>
        </div>
        
   );
}

export default Header;
