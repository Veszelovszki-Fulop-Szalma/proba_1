import './Kosar.css';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const Kosar = () => {
    const username = localStorage.getItem('username');
    const portf = localStorage.getItem('portfolio');
    const portfJ = JSON.parse(portf);
    console.log(portfJ);
    const navigate = useNavigate();

    const elkuld = (id) => {
        const feltolt = async () => {
            try {
                const kuld = { username, portfolioId: portfJ._id, agentId: id };

                const response = await fetch('http://localhost:3500/cart', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(kuld),
                });

                if (response.ok) {
                    const res = await response.json();
                    console.log(res);
                    localStorage.setItem('rendeles', true);
                    navigate('/Rendeles');
                } else {
                    const res = await response.json();
                    console.log(res.msg);
                }
            } catch (error) {
                console.log('Valami nem jó!');
            }
        };

        feltolt();
    };

    return (
      <div className="kosar-container">
        <h1 className="sorh1">Hello {username}!</h1>
        <h4>{portfJ.title}</h4>
        <p className="ppp">{portfJ.description}</p>
        <p className="ppp">{portfJ.result}</p>
        <img src={portfJ.image} alt="kép" />
        <h2>Ügynökök</h2>
        <ul className="ulke">
          {portfJ.agent.map((elem) => (
            <li className="like" key={elem._id}>
              <p className="ppp">{elem.name}</p>
              <img className="imgkosar" src={elem.image} alt="kép" />
              <button className="kival" onClick={() => elkuld(elem._id)}>
                Kiválaszt
              </button>
            </li>
          ))}
        </ul>
        <div className='jobrakoszi'>
          <Link className='visszakos' to="/Portfolio">Vissza</Link>
        </div>
        
      </div>
    );
};

export default Kosar;
