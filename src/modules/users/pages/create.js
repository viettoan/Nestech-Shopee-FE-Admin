export function Create() {
    return (
        <>
            <section className={'contentHeader'}>
                <div className={'container-fluid'}>
                <div className={'row'}>
                    <div className={'col-12'}>
                    <div className="card mb-3">
                        <div className="card-header text-white bg-primary">
                        <h3 className="card-title">Them moi user</h3>
                        </div>
                        <form>
                            <div className={'p-3 col-6'}>
                            <div className="mb-3">
                                <label htmlFor="inputName" className="form-label">Họ tên <span
                                className={'text-danger fw-bold'}>*</span></label>
                                <input
                                type="text"
                                className="form-control"
                                id="inputName"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputName" className="form-label">Email <span
                                className={'text-danger fw-bold'}>*</span></label>
                                <input
                                type="email"
                                className="form-control"
                                id="inputName"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputPhone" className="form-label">Số điện thoại <span
                                className={'text-danger fw-bold'}>*</span></label>
                                <input
                                type="text"
                                className="form-control"
                                id="inputPhone"
                                />
                            </div>
                            <div className={'mb-3'}>
                                <div>
                                <label className="form-label">Phân quyền <span className={'text-danger fw-bold'}>*</span></label>
                                </div>
                                <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    id="inputLevelAdmin"
                                    value={'2'}
                                />
                                <label className="form-check-label" htmlFor="inputLevelAdmin">
                                    Admin
                                </label>
                                </div>
                                <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    id="inputLevelUser"
                                    value={'1'}
                                />
                                <label className="form-check-label" htmlFor="inputLevelUser">
                                    User
                                </label>
                                </div>
                            </div>
                            </div>
                            <div className="card-footer">
                                <button
                                    className={'btn btn-primary'}
                                >
                                Thêm mới
                                </button>
                            </div>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}