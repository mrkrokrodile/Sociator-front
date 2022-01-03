import { TabMenu } from 'primereact/tabmenu';
import { Dialog } from 'primereact/dialog';
import { Avatar } from 'primereact/avatar';
import img from "../img/profil.jpg"
import { Button } from 'primereact/button';
// import { FaUserFriends } from "@react-icons/all-files/fa/FaUserFriends";




const Menu = () => {

    const items = [
        {label: 'Home', icon: 'pi pi-fw pi-home'},
        {label: 'Followers', icon: 'pi pi-fw pi-users'},
        {label: 'Settings', icon: 'pi pi-fw pi-cog'},
    ];



    return (
        <span id="navbar">
            <TabMenu model={items} />
            
            <div id="profile">
            <Button label="deconnexion" className="p-button-danger" />
                <p>Gaetan Beurel</p>
                 <Avatar id="avatarnavbar" image={img} size="medium" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}/>

            </div>
           
        </span>
        

    );
}

export default Menu