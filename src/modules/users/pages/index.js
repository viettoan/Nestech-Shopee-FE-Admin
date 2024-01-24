import { useEffect, useState } from "react"

export function Index() {
    const [users, setUsers] = useState([]);
    useEffect(
        () => {
            getUsers();
        },
        []
    );
    const getUsers = () => {
        //call api danh sach users
        fetch("https://dummyjson.com/users")
            .then(
                (res) => res.json()
            )
            .then(
                (res) => {
                    setUsers(res.users);
                }
            )
    }

    return (
        <>
        <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Quản lý users</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                                    <li className="breadcrumb-item">Quản lý users</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="contentHeader">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="card mb-3">
                                    <div className="card-header">
                                        <h3 className="card-title">Tìm kiếm</h3>
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="row mb-3">
                                                <div className="col-3"><input type="text" className="form-control" placeholder="Họ tên"
                                                        name="name"/></div>
                                                <div className="col-3"><input type="email" className="form-control" placeholder="Email"
                                                        name="email"/></div>
                                                <div className="col-3"><input type="text" className="form-control"
                                                        placeholder="Số điện thoại" name="phone"/></div>
                                                <div className="col-3"><select className="form-select" aria-label="Phân quyền" name="level">
                                                        <option value="">Phân quyền</option>
                                                        <option value="1">Super Admin</option>
                                                        <option value="2">Admin</option>
                                                        <option value="3">User</option>
                                                    </select></div>
                                            </div>
                                            <div className="row">
                                                <div className="col-auto"><button type="submit" className="btn btn-primary me-2">Tìm
                                                        kiếm</button><button type="button"
                                                        className="me-2 btn btn-success">Import</button><button type="button"
                                                        className="btn btn-info">Export</button></div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="card mb-3">
                                    <div className="card-header">
                                        <h3 className="card-title">Danh sách users</h3>
                                    </div>
                                    <div className="card-body">
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr className="text-center">
                                                    <th style={{width: "10px"}}>ID</th>
                                                    <th>Họ tên</th>
                                                    <th>Email</th>
                                                    <th>Số điện thoại</th>
                                                    <th>Tuổi</th>
                                                    <th style={{width: "15%"}}>Label</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    users.map(
                                                        user => (
                                                            <tr key={user.id}>
                                                                <td>{user.id}</td>
                                                                <td>{ user.lastName + " " + user.firstName }</td>
                                                                <td>{ user.email }</td>
                                                                <td>{ user.phone }</td>
                                                                <td>{ user.age }</td>
                                                                <td className="text-center"><button type="button"
                                                                        className="btn btn-danger me-2">Xóa</button><a className="btn btn-success"
                                                                        href="/users/64897780e0a9bc71dde22383/edit">Chỉnh sửa</a></td>
                                                            </tr>
                                                        )
                                                    )
                                                }

                                            </tbody>
                                        </table>
                                        <ul className="pagination">
                                            <li className="page-item"><a className="page-link" role="button" tabIndex="0" href="#"><span
                                                        aria-hidden="true">«</span><span className="visually-hidden">First</span></a>
                                            </li>
                                            <li className="page-item"><a className="page-link" role="button" tabIndex="0" href="#"><span
                                                        aria-hidden="true">‹</span><span className="visually-hidden">Previous</span></a>
                                            </li>
                                            <li className="page-item"><a className="page-link" role="button" tabIndex="0" href="#"><span
                                                        aria-hidden="true">›</span><span className="visually-hidden">Next</span></a>
                                            </li>
                                            <li className="page-item"><a className="page-link" role="button" tabIndex="0" href="#"><span
                                                        aria-hidden="true">»</span><span className="visually-hidden">Last</span></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}