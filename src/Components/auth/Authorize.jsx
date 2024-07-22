import React, { createContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const UserContext = createContext({})

function AuthorizeView({children}) {
    const [authorized, setAuthorized] = useState(false)

    const [loading, setLoading] = useState(true)

    const [user, setUser] = useState({email: ""}) 

    useEffect(() => {
        let retryCount = 0
        let maxRetries = 10
        let delay = 1000

        function wait(delay){
            return Promise((resolve) => setTimeout(resolve,delay))
        }

        async function fetchWithRetry(url, options){
            try{
                let response = await fetch(url,options)

                if(response.status == 200){
                    let j = await response.json()

                    setUser({email : j.email })

                    setAuthorized(true)

                    return response
                }else if(response.status == 401){
                    console.log("Unauthorized")
                    return response
                }else {
                    throw new Error("" + response.status)
                }
            }catch(error){
                retryCount ++

                if(retryCount > maxRetries){
                    throw error
                }else {
                    await wait(delay)
                    return fetchWithRetry(url,options)
                }
            }
        }

        fetchWithRetry("/pingauth", {
            method: "GET",
        })
        .catch((error) => {
            // handle the final error
            console.log(error.message);
        })
        .finally(() => {
            setLoading(false);  // set loading to false when the fetch is done
        });

    }, [])

    if(loading){
        return (
            <>
                <p>Loading ....</p>
            </>
        )
    }else{
        if(authorized && !loading){
            return(
                <>
                    <UserContext.Provider value={user}>
                        {prop.children}
                    </UserContext.Provider>
                </>
            )
        }else {
            return (
                <>
                    <Navigate to="/login"/>
                </>
            )
        }
    }
}

export function AuthorizedUser({value}) {
    const user = React.useContext(UserContext)

    if(value == 'email'){
        return <>{user.email}</>
    }else {
        return <></>
    }
}

export default AuthorizeView