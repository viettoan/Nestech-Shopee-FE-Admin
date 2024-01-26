import { useForm } from "react-hook-form"
import { useCookies } from "react-cookie";
import moment from "moment/moment";
import { useNavigate } from "react-router-dom";

export function Index() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [ cookies, setCookie ] = useCookies();
    // thuc hien redirect
    const navigate = useNavigate();

    const login = (data) => {
        // call api login
        fetch('http://localhost:5050/auth/login', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(
            (res) => res.json()
        ).then(
            (res) => {
                if (res.data.user_token) {
                    setCookie('user_token', res.data.user_token, {path: '/', expires: moment().add(1, 'months').toDate()})
                    navigate('/')
                }
            }
        )
    };

    return (
        <>
            <form className={"pb-3"} onSubmit={handleSubmit(login)}>
                <div className="mb-3">
                    <label htmlFor="inputPhone" className="form-label">Số điện thoại</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputPhone"
                        {
                            ...register('phone', {
                                required: 'So dien thoai khong duoc de trong',
                                maxLength: {
                                    value: 11,
                                    message: 'so dien thoai khong duoc lon hon 11 ky tu'
                                },
                                minLength: {
                                    value: 10,
                                    message: 'so dien thoai khong duoc nho hon 10 ky tu'
                                }
                            })
                        }
                    />
                    {errors.phone && <p className={'text-danger fw-bold'}>{errors.phone.message}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPassword" className="form-label">Mật khẩu</label>
                    <input
                        type="password"
                        className="form-control"
                        id="inputPassword"
                        {
                            ...register('password', {
                                required: 'Mat khau khong duoc de trong',
                            })
                        }
                    />
                    {errors.password && <p className={'text-danger fw-bold'}>{errors.password.message}</p>}
                </div>
                <div className={'text-center'}>
                    <button type="submit" className="btn btn-primary">Đăng nhập</button>
                </div>
            </form>
        </>
    )
}