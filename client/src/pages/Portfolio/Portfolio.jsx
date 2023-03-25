import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './Portfolio.css';
import { feltolt } from '../../redux/cartSlice';

const Portfolio = () => {
    const [portfolioItems, setPortfolioItems] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const betolt = async () => {
            const data = await fetch(
                'http://localhost:3500/portfolio/portfolios'
            );
            const portfolios = await data.json();
            setPortfolioItems(portfolios);
            console.log(portfolios);
        };

        betolt();
    }, []);

    const kivalaszt = (id) => {
        const portfolio = portfolioItems.filter((elem) => elem._id === id);
        console.log(portfolio);
        dispatch(feltolt({ portfolio }));
        localStorage.setItem('portfolio', JSON.stringify(portfolio[0]));
    };

    return (
        <div className="portfolio">
            {portfolioItems.map((item) => (
                <div key={item._id} className="portfolio-item">
                    <img src={item.image} alt={item.title} />
                    <div className="portfolio-item-info">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <p>{item.result}</p>
                        <Link
                            to={{ pathname: '/Kosar/' + item._id }}
                            onClick={() => kivalaszt(item._id)}
                        >
                            Ajánlat Kiválasztása
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Portfolio;
