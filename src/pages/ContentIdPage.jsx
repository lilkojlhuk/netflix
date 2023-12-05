import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Shows } from '../Shows';
import SecondHeader from '../components/SecondHeader/SecondHeader';
import Error from '../components/Error/Error';
import HeroShow from '../components/HeroShow/HeroShow';
import Footer from '../components/Footer/Footer';
import MyLine from '../components/UI/MyLine/MyLine';

const ContentIdPage = () => {
    const params = useParams();
    const primaryId = parseInt(params.id, 10);
    const [content, setContent] = useState(null);

    useEffect(() => {
        const selectedContent = Shows[primaryId - 1];
        setContent(selectedContent);
    }, [primaryId]);

    if (!content) { return <Error /> }

    return (
        <div>
            <SecondHeader bg={'#000'} container={'container-show'} />
            <HeroShow item={content} />
            <MyLine />
            <Footer bg={'#181818'} container={'container-show'} />
        </div>
    );
};

export default ContentIdPage;