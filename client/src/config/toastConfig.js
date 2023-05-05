import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const successToast =  message => {
    toast.success(message,{
        autoClose:2000,
        pauseOnHover:false,
    });
}
const errorToast =  message => {
    toast.error(message,{
        autoClose:2000,
        pauseOnHover:false,
    });
}

export {successToast, errorToast}