export function Index() {
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
                                                    <th style={{width: "10px"}}>#</th>
                                                    <th>Họ tên</th>
                                                    <th>Email</th>
                                                    <th>Số điện thoại</th>
                                                    <th>Phân quyền</th>
                                                    <th style={{width: "15%"}}>Label</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Viet Toan 1</td>
                                                    <td>viettoan290696@gmail.com</td>
                                                    <td>0981934614</td>
                                                    <td>Admin</td>
                                                    <td className="text-center"><button type="button"
                                                            className="btn btn-danger me-2">Xóa</button><a className="btn btn-success"
                                                            href="/users/64897780e0a9bc71dde22383/edit">Chỉnh sửa</a></td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>A ly</td>
                                                    <td>snguyenquy702@gmail.com</td>
                                                    <td>0389506772</td>
                                                    <td>User</td>
                                                    <td className="text-center"><button type="button"
                                                            className="btn btn-danger me-2">Xóa</button><a className="btn btn-success"
                                                            href="/users/6489aaab6c2aa12f4c19b124/edit">Chỉnh sửa</a></td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>Nguyễn Thượng Hải</td>
                                                    <td>thuonghai2711@gmail.com</td>
                                                    <td>0923449086</td>
                                                    <td>User</td>
                                                    <td className="text-center"><button type="button"
                                                            className="btn btn-danger me-2">Xóa</button><a className="btn btn-success"
                                                            href="/users/6489ce3a306f29b8a89f9b48/edit">Chỉnh sửa</a></td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>Nguyễn Trường Sơn</td>
                                                    <td>onlymoon801@gmail.com</td>
                                                    <td>0978597532</td>
                                                    <td>User</td>
                                                    <td className="text-center"><button type="button"
                                                            className="btn btn-danger me-2">Xóa</button><a className="btn btn-success"
                                                            href="/users/6489d02648450ab9130cf773/edit">Chỉnh sửa</a></td>
                                                </tr>
                                                <tr>
                                                    <td>5</td>
                                                    <td>Minh Cương</td>
                                                    <td>minhcuong3859@gmail.com</td>
                                                    <td>0254523565</td>
                                                    <td>Admin</td>
                                                    <td className="text-center"><button type="button"
                                                            className="btn btn-danger me-2">Xóa</button><a className="btn btn-success"
                                                            href="/users/6489d29c722add8f0d24117b/edit">Chỉnh sửa</a></td>
                                                </tr>
                                                <tr>
                                                    <td>6</td>
                                                    <td>Viet Toan 1</td>
                                                    <td>viettoan@gmail.com</td>
                                                    <td>0987954321</td>
                                                    <td>User</td>
                                                    <td className="text-center"><button type="button"
                                                            className="btn btn-danger me-2">Xóa</button><a className="btn btn-success"
                                                            href="/users/648c503ff2ecded37d4ce9c3/edit">Chỉnh sửa</a></td>
                                                </tr>
                                                <tr>
                                                    <td>7</td>
                                                    <td>Nguyễn Quang Dương</td>
                                                    <td>juong3008@gmail.com</td>
                                                    <td>0333368999</td>
                                                    <td>Admin</td>
                                                    <td className="text-center"><button type="button"
                                                            className="btn btn-danger me-2">Xóa</button><a className="btn btn-success"
                                                            href="/users/648c51be9961579f787243e9/edit">Chỉnh sửa</a></td>
                                                </tr>
                                                <tr>
                                                    <td>8</td>
                                                    <td>Nguyễn Trọng Huyền Anh</td>
                                                    <td>batthuong96@gmail.com</td>
                                                    <td>0981595201</td>
                                                    <td>Admin</td>
                                                    <td className="text-center"><button type="button"
                                                            className="btn btn-danger me-2">Xóa</button><a className="btn btn-success"
                                                            href="/users/648c589ba4a3b2579323f348/edit">Chỉnh sửa</a></td>
                                                </tr>
                                                <tr>
                                                    <td>9</td>
                                                    <td>Khiem</td>
                                                    <td>omg123@gmail.com</td>
                                                    <td>0123456789</td>
                                                    <td>Admin</td>
                                                    <td className="text-center"><button type="button"
                                                            className="btn btn-danger me-2">Xóa</button><a className="btn btn-success"
                                                            href="/users/648c57c6b718f9ae1cbf4c72/edit">Chỉnh sửa</a></td>
                                                </tr>
                                                <tr>
                                                    <td>10</td>
                                                    <td>test 1</td>
                                                    <td>snguyenquy7023@gmail.com</td>
                                                    <td>0981934617</td>
                                                    <td>User</td>
                                                    <td className="text-center"><button type="button"
                                                            className="btn btn-danger me-2">Xóa</button><a className="btn btn-success"
                                                            href="/users/648d6815eac0e02908e75b53/edit">Chỉnh sửa</a></td>
                                                </tr>
                                                <tr>
                                                    <td>11</td>
                                                    <td>test 1</td>
                                                    <td>snguyenquy7024@gmail.com</td>
                                                    <td>0981934618</td>
                                                    <td>User</td>
                                                    <td className="text-center"><button type="button"
                                                            className="btn btn-danger me-2">Xóa</button><a className="btn btn-success"
                                                            href="/users/648d68a1fbd3318516a6a508/edit">Chỉnh sửa</a></td>
                                                </tr>
                                                <tr>
                                                    <td>12</td>
                                                    <td>test 1</td>
                                                    <td>snguyenquy7025@gmail.com</td>
                                                    <td>0981934619</td>
                                                    <td>User</td>
                                                    <td className="text-center"><button type="button"
                                                            className="btn btn-danger me-2">Xóa</button><a className="btn btn-success"
                                                            href="/users/648d694141ffd63b9ab86687/edit">Chỉnh sửa</a></td>
                                                </tr>
                                                <tr>
                                                    <td>13</td>
                                                    <td>test 1</td>
                                                    <td>snguyenquy7026@gmail.com</td>
                                                    <td>0981934610</td>
                                                    <td>User</td>
                                                    <td className="text-center"><button type="button"
                                                            className="btn btn-danger me-2">Xóa</button><a className="btn btn-success"
                                                            href="/users/648d697751d54d7122a60f6f/edit">Chỉnh sửa</a></td>
                                                </tr>
                                                <tr>
                                                    <td>14</td>
                                                    <td>VietToan 20062023</td>
                                                    <td>viettoan20062023@gmail.com</td>
                                                    <td>0987654321</td>
                                                    <td>Admin</td>
                                                    <td className="text-center"><button type="button"
                                                            className="btn btn-danger me-2">Xóa</button><a className="btn btn-success"
                                                            href="/users/64915d1ea1036746a738a1d6/edit">Chỉnh sửa</a></td>
                                                </tr>
                                                <tr>
                                                    <td>15</td>
                                                    <td>VietToan 24062023</td>
                                                    <td>viettoan26062023@gmail.com</td>
                                                    <td>0987654322</td>
                                                    <td>Admin</td>
                                                    <td className="text-center"><button type="button"
                                                            className="btn btn-danger me-2">Xóa</button><a className="btn btn-success"
                                                            href="/users/6496aa99efdd9cbfa2c6bfee/edit">Chỉnh sửa</a></td>
                                                </tr>
                                                <tr>
                                                    <td>16</td>
                                                    <td>test 1</td>
                                                    <td>snguyenqu1y7021@gmail.com</td>
                                                    <td>0981134619</td>
                                                    <td>User</td>
                                                    <td className="text-center"><button type="button"
                                                            className="btn btn-danger me-2">Xóa</button><a className="btn btn-success"
                                                            href="/users/64a912a8c5e4c0e203be08d1/edit">Chỉnh sửa</a></td>
                                                </tr>
                                                <tr>
                                                    <td>17</td>
                                                    <td>test 1</td>
                                                    <td>snguyenqu2y7021@gmail.com</td>
                                                    <td>0981234619</td>
                                                    <td>User</td>
                                                    <td className="text-center"><button type="button"
                                                            className="btn btn-danger me-2">Xóa</button><a className="btn btn-success"
                                                            href="/users/64a913b29096fac88a2fa697/edit">Chỉnh sửa</a></td>
                                                </tr>
                                                <tr>
                                                    <td>18</td>
                                                    <td>test 1</td>
                                                    <td>snguyenqu3y7021@gmail.com</td>
                                                    <td>0911234619</td>
                                                    <td>User</td>
                                                    <td className="text-center"><button type="button"
                                                            className="btn btn-danger me-2">Xóa</button><a className="btn btn-success"
                                                            href="/users/64abc8e421307d037f12977c/edit">Chỉnh sửa</a></td>
                                                </tr>
                                                <tr>
                                                    <td>19</td>
                                                    <td>test 1</td>
                                                    <td>snguyenqu4y7021@gmail.com</td>
                                                    <td>0921234619</td>
                                                    <td>User</td>
                                                    <td className="text-center"><button type="button"
                                                            className="btn btn-danger me-2">Xóa</button><a className="btn btn-success"
                                                            href="/users/64abc9af21307d037f129789/edit">Chỉnh sửa</a></td>
                                                </tr>
                                                <tr>
                                                    <td>20</td>
                                                    <td>test 1</td>
                                                    <td>snguyenqu5y7021@gmail.com</td>
                                                    <td>0931234619</td>
                                                    <td>User</td>
                                                    <td className="text-center"><button type="button"
                                                            className="btn btn-danger me-2">Xóa</button><a className="btn btn-success"
                                                            href="/users/64abcaec6fadb9ab3255d9d0/edit">Chỉnh sửa</a></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <ul className="pagination">
                                            <li className="page-item"><a className="page-link" role="button" tabindex="0" href="#"><span
                                                        aria-hidden="true">«</span><span className="visually-hidden">First</span></a>
                                            </li>
                                            <li className="page-item"><a className="page-link" role="button" tabindex="0" href="#"><span
                                                        aria-hidden="true">‹</span><span className="visually-hidden">Previous</span></a>
                                            </li>
                                            <li className="page-item"><a className="page-link" role="button" tabindex="0" href="#"><span
                                                        aria-hidden="true">›</span><span className="visually-hidden">Next</span></a>
                                            </li>
                                            <li className="page-item"><a className="page-link" role="button" tabindex="0" href="#"><span
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