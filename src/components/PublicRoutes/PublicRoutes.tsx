import React, {FC} from  'react';

import { Route, Navigate  } from 'react-router-dom';
type RouterType = {
    component: FC,
    restricted: boolean,
}

const PublicRoutes:React.FC<RouterType> =  ({component: Component, restricted, ...rest}) => {
    return <Route {...rest}  element={restricted ? <Navigate to="/" /> : <Component />} />
}

export default PublicRoutes;