import { useSelector } from "react-redux";
import useThemeActions from "./action"

export const useThemeSetting = () => {
    const { toggleThemeMode, toggleNavDrawer } = useThemeActions();

    const themeMode = useSelector(state => state.theme.mode);
    const isDrawerOpen = useSelector(state => state.theme.isDrawerOpen);

    return {
        themeMode,
        isDrawerOpen,
        toggleThemeMode,
        toggleNavDrawer
    }
}

export { default as themeReducer } from './reducer';