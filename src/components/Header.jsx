import { Link } from "react-router-dom";
import BackgroundsIcon from "./icons/BackgroundsIcon";
import BlogIcon from "./icons/BlogIcon";
import BooksIcon from "./icons/BooksIcon";
import BoxIcon from "./icons/BoxIcon";
import CollectionsIcon from "./icons/CollectionsIcon";
import ColorsIcon from "./icons/ColorsIcon";
import FontsIcon from "./icons/FontsIcon";
import HomeIcon from "./icons/HomeIcon";
import IconsIcon from "./icons/IconsIcon";
import IlstracionesIcon from "./icons/IlstracionesIcon";
import PhotosIcon from "./icons/PhotosIcon";
import ToolsIcon from "./icons/ToolsIcon";
import VideosIcon from "./icons/VideosIcon";
import ComponentIcon from "./icons/ComponentIcon";
function Header() {
  const claseCss = "mr-2 w-8";
  return (
    <nav className="flex flex-wrap align-middle justify-center m-4">
      <Link className={claseCss} to="/">
        <HomeIcon />
      </Link>
      <Link className={claseCss} to="/videos">
        <VideosIcon />
      </Link>
      <Link className={claseCss} to="/icons">
        <IconsIcon />
      </Link>
      <Link className={claseCss} to="/fonts">
        <FontsIcon />
      </Link>
      <Link className={claseCss} to="/colors">
        <ColorsIcon />
      </Link>
      <Link className={claseCss} to="/collections">
        <CollectionsIcon />
      </Link>
      <Link className={claseCss} to="/backgrounds">
        <BackgroundsIcon />
      </Link>
      <Link className={claseCss} to="/librerias">
        <BooksIcon />
      </Link>
      <Link className={claseCss} to="/photos">
        <PhotosIcon />
      </Link>
      <Link className={claseCss} to="/box">
        <BoxIcon />
      </Link>
      <Link className={claseCss} to="/tools">
        <ToolsIcon />
      </Link>
      <Link className={claseCss} to="/ilustraciones">
        <IlstracionesIcon />
      </Link>
      <Link className={claseCss} to="/blog">
        <BlogIcon />
      </Link>
      <Link className={claseCss} to="/components">
        <ComponentIcon />
      </Link>
    </nav>
  );
}

export default Header;
