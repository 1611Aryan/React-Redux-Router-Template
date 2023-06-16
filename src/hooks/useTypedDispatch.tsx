import { useDispatch } from "react-redux"
import { AppDispatch } from "~/redux/store"


const useTypedDispatch = () => useDispatch<AppDispatch>()

export default useTypedDispatch