import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import { Connect } from "react-redux";


const FullWidthLayout = ({children})=>{
    return(
        <div>
            <Navbar/>
            {children}
            <Footer/>

        </div>
    )
}

const mapStateToProps = state =>({

})

export default connect(mapStateToProps, {}) (FullWidthLayout);