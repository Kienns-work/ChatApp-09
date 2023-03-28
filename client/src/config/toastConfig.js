import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const successToast =  message => {
    toast.success(message,{
        autoClose:2000,
    });
}
const errorToast =  message => {
    toast.error(message);
}

export {successToast, errorToast}