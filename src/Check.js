import React, {useContext} from 'react';
import { ProfileContext } from './components/Context/ProfileContext/ProfileContext';

function Check(){
    const [profile,setProfile] = useContext(ProfileContext);
    console.log(profile)
    return(
        <div>
            <h1>Hi{profile.name}</h1>
        </div>
    )
}

export default Check