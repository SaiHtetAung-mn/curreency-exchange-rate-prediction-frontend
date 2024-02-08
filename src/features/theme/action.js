import { useDispatch } from "react-redux"
import { changeThemeMode, changeDrawer } from "./reducer";

const useThemeActions = () => {
    const dispatch = useDispatch();

    function toggleThemeMode() {
        dispatch(changeThemeMode());
    }

    function toggleNavDrawer() {
        dispatch(changeDrawer());
    }

    return {
        toggleThemeMode,
        toggleNavDrawer
    }
}

export default useThemeActions;