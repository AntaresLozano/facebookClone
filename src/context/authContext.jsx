import { createContext, useState, useEffect } from 'react'

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

    const login = () => {
        setCurrentUser({
            id: 1,
            name: "kecaGalindo",
            profilePic: "https://scontent.feoh3-1.fna.fbcdn.net/v/t39.30808-6/261657261_1943286502506457_1133666736656094264_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFXyuCq9GdgJxEQ8SAYB6XPB8xrYWw62wUHzGthbDrbBUlHb0c3wnbKbpX86r1IFmqfGqRcRvtBe20VIGzNjNUO&_nc_ohc=ayrwkCoqpgoAX_b2AyF&_nc_ht=scontent.feoh3-1.fna&oh=00_AfAjJWx97Arcbx-8uwf1RDFjJ1o6D5LrCcgwQMQY_710uA&oe=63EF9D2E"
        });
    }

    useEffect(() => {
        localStorage.setItem("user", currentUser)
    }, [currentUser])

    return (
        <AuthContext.Provider value={{ currentUser, login }} > {children} </AuthContext.Provider>
    )

}