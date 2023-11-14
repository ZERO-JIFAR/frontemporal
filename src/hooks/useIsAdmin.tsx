export default function useIsAdmin() {
    if (Boolean(window.localStorage.getItem('isAdmin')) === true){
        return Boolean(window.localStorage.getItem('isAdmin'))
    }
    return false
        
}