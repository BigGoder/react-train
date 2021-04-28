import { Link } from 'umi';
import '../../../components/SearchNav/index.less';

export default function index() {
  return (
    <Link to="/search" className="searchHead">
      点击搜索
    </Link>
  );
}
