import { useAuth } from "@/store/useAuth";
import "./App.scss";
import { Button } from "@/components/Button/Button";
import icon from "@/assets/icon.svg"
import img from "@/assets/iphone.jpg"
import { Profile } from "@/layout/Profile/Profile";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {AllWishes} from "@/layout/AllWishes/AllWishes";
import { Settings } from "@/layout/Settings/Settings";
import { NavLink } from "react-router-dom";
import { WishListPage } from "@/layout/WishListPage/WishListPage";


export const App = () => {
  const logout = useAuth(state => state.logout);
  return (
    <div className="App">
      <Router>
        <section className="sidebar">
          <nav className="navigation">
            <h1 className="logo">Вишлистикс</h1>
            <ul className="menu"> 
            <NavLink to="/profile" className={({isActive}) => isActive ? "menu-item menu-item--active" : "menu-item"}>  
                <img src={icon} alt="" className="menu-item__icon" /> 
                <p className="menu-item__text">Профиль</p>
            </NavLink>
            <NavLink to="/wishlistpage" className={({isActive}) => isActive ? "menu-item menu-item--active" : "menu-item"}>  
                <img src={icon} alt="" className="menu-item__icon" /> 
                <p className="menu-item__text">вишлист</p>
            </NavLink>
            <NavLink to="/allwishes" className={({isActive}) => isActive ? "menu-item menu-item--active" : "menu-item"}>
                <img src={icon} alt="" className="menu-item__icon" /> 
                <p className="menu-item__text">Все желания</p>
            </NavLink>
            <NavLink to="/settings" className={({isActive}) => isActive ? "menu-item menu-item--active" : "menu-item"}>
                <img src={icon} alt="" className="menu-item__icon" /> 
                <p className="menu-item__text">Настройки</p>
            </NavLink>
            </ul>
          </nav>
          <div className="sidebar-profile">
            <img className="sidebar-profile__img" src={img} alt="" />
            <div className="sidebar-profile__info">
              <p className="sidebar-profile__name">Даша Неустроева</p>
              <p className="sidebar-profile__login">neustroeva@gmail.com</p>
            </div>
            <Button 
            type="img" 
            onClick={() => console.log("Кнопка нажата")}
            img={icon}></Button>
          </div>
        </section>
        <Routes>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/wishlistpage" element={<WishListPage title="День рождения" comment="Что я хочу получить на др"/>}/>
          <Route path="/allwishes" element={<AllWishes/>}/>
          <Route path="settings" element={<Settings/>}/>
        </Routes>
      </Router>
    </div>
  );
};
