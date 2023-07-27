import { RootState } from "../../store";
import { useAppSelector as UseAppSelector } from '../../hooks';

const RenderedUserData = () => {
    const userData = UseAppSelector((state: RootState)=> state.users)
    return <>
    {
     userData.map(user=>{
        return <div key={Math.random() * 10}>
            <p>{user.user}</p>
            <p>{user.password}</p>
        </div>
    })
    }
    </>
}

export default RenderedUserData;