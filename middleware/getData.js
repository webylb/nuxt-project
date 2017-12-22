import axios from 'axios';

/**
 * 使用异步async来处理异步请求数据
 * @param {*} context 
 */
export default async function(context){
  // const data = await axios.get('http://localhost:3000/pagelist');
  const data = {};
  console.log('我是中间件的:',data);
  return data;
}