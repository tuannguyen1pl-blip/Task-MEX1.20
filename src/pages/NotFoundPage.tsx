import {Link} from "react-router-dom";
function NotFoundPage() {
    return(
        <div className="not-found">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>Trang bạn tìm kiếm đang không tồn tại.</p>
            <Link to="/">Quay về trang chủ</Link>
        </div>
    )
}

export default NotFoundPage;