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

const registerHandling = new Promise(resolve => setTimeout(resolve, 3000));
const promiseToast = () => {
    toast.promise(
        registerHandling,
        {
          pending: 'Xin chờ trong giây lát ...',
          success: 'Đã thêm tài khoản thành công.',
          error: `Có lỗi xảy ra`
        }
    )
}
export {successToast, errorToast,promiseToast }