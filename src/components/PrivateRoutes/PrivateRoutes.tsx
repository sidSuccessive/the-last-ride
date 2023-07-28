import React, {FC} from 'react';
import { Route, Navigate  } from 'react-router-dom';
type RouterType = {
    component: FC,
    restricted: boolean,
}
const PrivateRoute:React.FC<RouterType> = ({component: Component, restricted, ...rest}) => {
    return (
        <Route element={restricted ? <Component /> : <Navigate to="/login" />} />
    )
}

export default PrivateRoute;
