import React from 'react';
import { Route, Routes } from "react-router-dom";
import Main from '../pages/Main';
import Content from '../pages/Content';
import Error from './Error/Error';
import ContentIdPage from '../pages/ContentIdPage';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/netflix" element={<Main />} />
            <Route exact path="/netflix/content" element={<Content />} />
            <Route exact path="/netflix/content/:id" element={<ContentIdPage />} />
            <Route path="*" element={<Error />} />
        </Routes>
    );
};

export default AppRouter;