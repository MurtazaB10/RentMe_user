import { useHistory } from 'react-router-dom'
import './Success.css'
import { useParams } from "react-router-dom";
import { useState } from 'react';

export default function Success(){
    const history = useHistory();
  const params = useParams();
  const [id, setId] = useState(params.id ? params.id : "");

    return (
        <div className='branch'>
            <div className="success">
                <div className="icon">
                    <i className="fa fa-check"></i>
                </div>
                <div className="title">
                   Payment Success!!!
                </div>
                <hr/>
                <div className="description">
                    <p>
                        Payment id : hgif8098-0giykn
                    </p>
                    <p>
                        Order id :hviyfivj yifv
                    </p>
                </div>
                <div className="dismiss-btn">
                    <button id="dismiss-popup-btn" onClick={()=>{
                        history.push('/')
                    }}>Dismiss</button>
                </div>
            </div>
        </div>
    )
}