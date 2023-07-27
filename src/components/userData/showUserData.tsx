import React,{useState} from "react";
import { useAppSelector as UseAppSelector } from '../../hooks';
import { RootState } from "../../store";
import {updateUserContent} from "./userDataSlice";
import { useAppDispatch } from '../../hooks';
import RenderedUserData from "./RenderedUserData";

const ShowUserData:React.FC = () => {
    const dispath = useAppDispatch();
    const userData = UseAppSelector((state: RootState)=> state.users)
    const [userDataV, setUserData] = useState(userData[0].user);
    const [userPass, setUserPass] = useState(userData[0].password);
    const userNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData(event.target.value)
    }
    const userPassHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserPass(event.target.value)
    }
    const submitformHandler = (e:React.FormEvent) => { 
        e.preventDefault()
        let userDataBox = {
            user: userDataV,
            password: userPass,
        }
        dispath(
            updateUserContent(userDataBox)
        )
    }
    return <div>
            <RenderedUserData />
            {/* <div>
            <p>{userDataV}</p>
            <p>{userPass}</p>
            </div> */}
            <div>
                <form onClick={submitformHandler}>
                    <input id="user_name" type="text" placeholder="Enter user name" value={userDataV}  onChange={userNameHandler} />
                    <input id="user_pass" type="text"  placeholder="Enter your password" value={userPass} onChange={userPassHandler} />
                    <button type="submit">Update</button>
                </form>
            </div>
    </div>
}

export default ShowUserData;