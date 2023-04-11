// import Swal from 'sweetalert2'
import Swal, { SweetAlertIcon } from 'sweetalert2'
export default{
    success(message:String){
        return Swal.fire({
            position: 'top-end',
            icon: "success",
            title: message,            
            customClass: 'Swal-wide',
            showConfirmButton: false,
            timer: 3000
        })
    },
    error(message:String){
        return Swal.fire({
            position: 'top-end',
            icon: "error",
            title: message,            
            customClass: 'Swal-wide',
            showConfirmButton: false,
            timer: 3000
        })
    },
    warning(message:String){
        return Swal.fire({
            position: 'top-end',
            icon: "warning",
            title: message,            
            customClass: 'Swal-wide',
            showConfirmButton: false,
            timer: 3000
        })
    },
        
}