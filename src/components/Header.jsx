import BackgroundsIcon from "./icons/BackgroundsIcon"
import BlogIcon from "./icons/BlogIcon"
import BooksIcon from "./icons/BooksIcon"
import BoxIcon from "./icons/BoxIcon"
import CollectionsIcon from "./icons/CollectionsIcon"
import ColorsIcon from "./icons/ColorsIcon"
import FontsIcon from "./icons/FontsIcon"
import HomeIcon from "./icons/HomeIcon"
import IconsIcon from "./icons/IconsIcon"
import IlstracionesIcon from "./icons/IlstracionesIcon"
import PhotosIcon from "./icons/PhotosIcon"
import ToolsIcon from "./icons/ToolsIcon"
import VideosIcon from "./icons/VideosIcon"
function Header() {
  return (
    <nav className="flex">
        <HomeIcon />
        <IconsIcon />Iconos
        <IlstracionesIcon />Ilstraciones
        <PhotosIcon />Fotos
        <VideosIcon />Videos
        <ColorsIcon />Colores
        <BackgroundsIcon />Backgrounds
        <FontsIcon />Fuentes
        <BoxIcon />3D
        <BooksIcon />Librerias
        <BlogIcon />Blogs
        <ToolsIcon />Herramientas
        <CollectionsIcon />Colecciones
    </nav>
  )
}

export default Header