import { NavBar, Icon } from 'antd-mobile';
import { history } from 'umi';

export default function ToolBar(props) {
  const { title } = props;
  return (
    <NavBar
      mode="light"
      leftContent="Back"
      icon={<Icon type="left" />}
      onLeftClick={() => history.goBack()}
    >
      {title}
    </NavBar>
  );
}
