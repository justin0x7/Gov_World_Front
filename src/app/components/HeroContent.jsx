import { useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'reactstrap'

import Link from 'next/link';
import TextSlider from './TextSlider';
import AnimateButton from './AnimateButton';
import styles from './css/HeroContent.module.css'
import GovButton from './GovButton';
// import Icon from '@mdi/react';
// import { mdiArrowDownBox } from '@mdi/js';
import { useTranslation } from "react-i18next";

function HeroContent({ interval = 3000 }) {
    const { t } = useTranslation();

    const texts = [
        { content: 'CRYPTO', color: '#FF007A' },
        { content: 'CRYPTO', color: '#8F00FF' },
        { content: 'CRYPTO', color: '#01FF89' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentColorIndex, setCurrentColorIndex] = useState(0);
    const colors = ['red', 'blue', 'green'];

    const timeoutRef = useRef(null);
    useEffect(() => {
        return () => {
            clearTimeout(timeoutRef.current);
        };
    }, [currentIndex]);

    useEffect(() => {
        timeoutRef.current = setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
            setCurrentColorIndex(prevIndex => (prevIndex + 1) % colors.length);
        }, interval);

        return () => {
            clearTimeout(timeoutRef.current);
        };
    }, [currentIndex, texts, interval]);

    const buttonColorClass = `button-color-${currentColorIndex}`;

    return (
        <div className="HeroContent">


            <Container>
                <Container>
                    <Row>
                        <Col md={12} className="SpaceText">
                            <h3 className="animationText1">{t("BORROW")}</h3>
                            <h3 className="animationText2">{t("STABLECOINS")},</h3>
                            <h3 className="animationText3">{t("KEEP YOUR")}</h3>
                            <h1 className="animationText4"><img src="/images/crypto.png" alt="crypto" /></h1>
                            <h5 className="animationText5">For decentralized, diamond-handed. communities everywhere.
                                <br />
                                Unlock liquidity and maintain all native benefits.
                            </h5>
                                <h1><GovButton
                                    navigatePath="/"
                                    buttonName="Launch App"
                                    length="3"
                                    height="48"
                                />
                                </h1>
                        </Col>
                    </Row>

                </Container>


            </Container>
            <br />
        </div>
    )
}

export default HeroContent