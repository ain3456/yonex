<div id="root"></div>

function App(){
    const [openMenu,setOpenMenu] = React.useState(null);
    const toggleMenu = (menu) => {
        if(openMenu === menu){
            setOpenMenu(null);
        }else{
            setOpenMenu(menu);
        }
    }
    return(
        <>
        <Header openMenu={openMenu} toggleMenu={toggleMenu} setOpenMenu={setOpenMenu}/>
        <Main/>
        <Footer/>
        </>
    )
}
ReactDOM.render(
        <App/>,
        document.getElementById("root")
);