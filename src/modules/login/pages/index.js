export function Index() {
    return (
        <>
            <form className={"pb-3"}>
                <div className="mb-3">
                    <label htmlFor="inputPhone" className="form-label">Số điện thoại</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputPhone"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPassword" className="form-label">Mật khẩu</label>
                    <input
                        type="password"
                        className="form-control"
                        id="inputPassword"
                    />
                </div>
                <div className={'text-center'}>
                    <button type="submit" className="btn btn-primary">Đăng nhập</button>
                </div>
            </form>
        </>
    )
}