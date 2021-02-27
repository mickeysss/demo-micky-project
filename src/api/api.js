
import Axios  from "axios";


const instance = Axios.create({
    baseURL:`https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: { "API-KEY" : "99a2e423-a2ee-4d73-a1cf-248896044b3e"}
})

export const usersAPI= {
    getUsers(pageSize= 1,currentPage =10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    follow(userId) {
        return instance.delete(`follow/${userId}`)
        .then(response => response.data)
    },
    unfollow(userId) {
        return instance.post(`follow/${userId}`)
        .then(response => response.data)
    }
}

// export const getUsersUnFollow = ({u}) => {
//     return instance.post(`follow/${u.id}`)
//         .then(response => {
//             return response.data
//         })
// }
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getUserStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateUserStatus(status) {
        return instance.put(`profile/status`, { status:status })
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email,password,rememberMe= false) {
            return instance.post(`auth/login`,{email,password,rememberMe})
        },
    logout() {
        return instance.delete(`auth/login`)
    }
}
/*
export const getProfile =(userId) => {
    return instance.get(`profile/`+ userId)
    return instance.get(`profile/status` + userId)
    return instance.put(`profile/status` + userId, {status:status})
}


export const getHeaderLogin =() => {
    return instance.get(`auth/me`)
        .then(response => {
            return response.data})
    return instance.get
*/