import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Row, Col, ConfigProvider, Alert } from 'antd';

const App: React.FC<{}> = () => {
  const isDarkMode = useCraftDarkMode();

  function useCraftDarkMode() {
    const [isDarkMode, setIsDarkMode] = React.useState(false);
  
    React.useEffect(() => {
      craft.env.setListener(env => setIsDarkMode(env.colorScheme === 'dark'));
    }, []);
  
    return isDarkMode;
  }

  React.useEffect(() => {
    if (isDarkMode) {
      // Note: 根据应用主题模式，适配 UI，各种颜色配置详见：https://ant-design.gitee.io/docs/react/customize-theme-variable-cn
      ConfigProvider.config({
        theme: {
            primaryColor: '#f04848',
        }
      });
    } else {
      ConfigProvider.config({
        theme: {
            primaryColor: 'blue',
        }
      });
    }
  }, [isDarkMode]);

  return (
    <Row style={{padding: '30px'}}>
      <Col span={24}>
        <Alert
          message="说明"
          description="在这里写你的组件，使用在控制台查 log 信息，当前 Mac 端不支持控制台等 log 方式，需要在浏览器中调试。"
          type="info"
        />
      </Col>
    </Row>
  );
}

// API 示例
// async function insertHelloWorld () {
//   // console.log('shit');
//   const block = craft.blockFactory.textBlock({
//     content: 'Hello world!'
//   });
//   const data = await craft.dataApi.getCurrentPage();
//   console.log('data:', data);
//   if (data && data.data) {
//     // Note: 这里我们判断了 data
//     const md = craft.markdown.craftBlockToMarkdown([data.data], 'common', {
//       tableSupported: true,
//     })
//     console.log('md:', md);
//   }
//   craft.dataApi.addBlocks([block]);
// }

export function initApp() {
  ReactDOM.render(<App />, document.getElementById('react-root'))
}
