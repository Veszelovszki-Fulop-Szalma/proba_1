import React from 'react';
import Header4 from '../../components/Header4';
import './Reszveny.css';

const Reszveny = () => {
    return (
        <div>
            <Header4 />
            <div className="container">
                <div className="szurke-hatter">
                    <h1>Részvények</h1>
                </div>
                <div className="sorkiresz">
                    <p>
                        Az értékpapírok, mint például a részvények, a befektetők
                        számára lehetőséget nyújthatnak a pénzük növelésére,
                        azonban egyúttal kockázatot is jelentenek. Az átlagos
                        hozamot illetően, az évtizedek alatt kialakult átlag az,
                        hogy az amerikai tőzsdéken jegyzett részvények átlagosan
                        évente 8-10% hozamot produkálnak.
                    </p>
                    <div className="kepresz" />
                    <div>
                        <h3>A részvények vásárlása érdemes lehet, ha:</h3>
                        <ul>
                            <li>Hosszú távú befektetési céljaid vannak</li>
                            <li>
                                Kapcsolódnak a növekedési potenciállal bíró
                                vállalatokhoz
                            </li>
                            <li>
                                Részt akarsz venni a vállalatok nyereségének
                                osztásában
                            </li>
                            <li>Diversifikálni szeretnéd a befektetéseidet</li>
                        </ul>
                    </div>
                    <div>
                        <h3>
                            Az értékpapírok vásárlása nem érdemes lehet, ha:
                        </h3>
                        <ul>
                            <li>Rövid távú pénzszükségletet kell fedezned</li>
                            <li>
                                Az adott vállalat pénzügyi helyzete instabil
                            </li>
                            <li>Félsz a rövid távú piaci ingadozásoktól</li>
                        </ul>
                    </div>
                    <p>
                        A részvények befektetése növekedési lehetőségekkel és
                        kockázatokkal jár együtt, ezért fontos alaposan
                        megismerni a vállalatokat, amelyeknek a részvényeit
                        vásárolod, valamint figyelembe venni a befektetési
                        céljaidat és a tolerált kockázatot.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Reszveny;
