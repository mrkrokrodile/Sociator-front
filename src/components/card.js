import { Card } from 'primereact/card';
import PrimeReact from 'primereact/api';
PrimeReact.ripple = true;
import { Button } from 'primereact/button';
import React, { useState , Component } from 'react'
import img from "../img/profil.jpg"
import { Avatar } from 'primereact/avatar';
import { Accordion, AccordionTab } from 'primereact/accordion';


const Carte = () => {
    
    const [post, setPost] = React.useState([]);

    React.useEffect(() => {

        fetch('http://localhost:5000/post', {
            method: 'GET',
            credentials: 'include'
        })
            .then(response => response.json())
            .then(content => setPost(content))
            .catch(err => console.error(err))
           
        }, []);
    


        const [activeIndex, setActiveIndex] = useState(null);

        const onClick = (itemIndex) => {
        let _activeIndex = activeIndex ? [...activeIndex] : [];

        if (_activeIndex.length === 0) {
            _activeIndex.push(itemIndex);
        }
        else {
            const index = _activeIndex.indexOf(itemIndex);
            if (index === -1) {
                _activeIndex.push(itemIndex);
            }
            else {
                _activeIndex.splice(index, 1);
            }
        }
        setActiveIndex(_activeIndex);
    }


            const header = (
                <Avatar image={img} size="xlarge" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}/>
            );
            const footer = (
                <span>
                    <Button className="p-button-success userpost" label="Like" icon="pi pi-heart" />
                    <Button label="Commentate" icon="pi pi-comments" className="p-ml-2 userpost"  />
                    {post.map((p, index) =>
                    <Accordion activeIndex={0}>
                    <AccordionTab header="Commentaires">
                        <h5>{p.posterId}</h5>
                        <p>{p.comments.text}</p>
                    </AccordionTab>
                </Accordion>
                 )}
                    
                </span>
            );
    
            return (
                <div id="mur">
                    {post.map((p, index) =>
                    <Card key={index} title={p.posterId} subTitle={p.createdAt} footer={footer} header={header}>
                        <p className="p-m-0" style={{lineHeight: '1.5'}}>{p.message}</p>                        
                    </Card>

                )}
                </div>
            )
        
    }
    export default Carte



